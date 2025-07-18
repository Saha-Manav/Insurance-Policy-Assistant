async function sendQuery() {
  const query = document.getElementById("queryInput").value.trim();
  const outputBox = document.getElementById("responseOutput");

  if (!query) {
    outputBox.textContent = "Please enter a query first.";
    return;
  }

  outputBox.textContent = "Processing...";

  try {
    const response = await fetch("https://manavsaha.app.n8n.cloud/webhook/e1a08ca3-c465-4c4a-9606-c21439b396f2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) throw new Error(`Server responded with ${response.status}`);
    
    const data = await response.json(); // Expecting an array
    const firstItem = Array.isArray(data) ? data[0] : data;

    const modelResponse = firstItem?.model_response || "No relevant content found.";

    outputBox.innerHTML = modelResponse.replace(/\n/g, "<br>"); // display nicely
  } catch (error) {
    console.error("Error:", error);
    outputBox.textContent = "An error occurred while processing your request.";
  }
}
