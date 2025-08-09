async function sendQuery() {
  const pdfUrl = document.getElementById("pdfUrlInput").value.trim();
  const questionsRaw = document.getElementById("questionsInput").value.trim();
  const outputBox = document.getElementById("responseOutput");

  if (!pdfUrl) {
    outputBox.textContent = "Please enter the PDF document URL.";
    return;
  }

  if (!questionsRaw) {
    outputBox.textContent = "Please enter at least one question";
    return;
  }

  const questions = questionsRaw
    .split("\n")
    .map((q) => q.trim())
    .filter(Boolean);

  outputBox.textContent = "Processing...";

  try {
    const response = await fetch(
      "https://manavsaha1.app.n8n.cloud/webhook-test/e1a08ca3-c465-4c4a-9606-c21439b396f2",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdfUrl,
          questions,
        }),
      }
    );

    if (!response.ok)
      throw new Error(`Server responded with status ${response.status}`);


const data = await response.json();

if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
  outputBox.textContent = "No answers found in response.";
  return;
}

const answers = data.items.map(item => item.json.text || "No answer found.");

const formatted = questions
  .map((q, i) => `Q: ${q}\nA: ${answers[i] || "No answer found."}`)
  .join("\n\n");

outputBox.textContent = formatted;

  } catch (error) {
    console.error("Error:", error);
    outputBox.textContent =
      "An error occurred while processing your request: " + error.message;
  }
}
