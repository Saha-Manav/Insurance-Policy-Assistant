# 🛡️ Insurance Query Assistant

The **Insurance Query Assistant** is an intelligent system that allows users to ask natural language questions about insurance documents (policies, claims, terms, etc.) and receive accurate, context-aware answers. It leverages Large Language Models (LLMs) and document retrieval pipelines to help users navigate complex insurance information with ease.

---

## 📌 Features

- 🧠 **Natural Language Querying**: Ask questions like “What is my policy’s claim period?” or “Is dental covered?”
- 📄 **Document Parsing**: Extracts key info from unstructured documents like PDFs, emails, and scanned policies.
- 🔍 **Context-Aware Answering**: Matches queries with the most relevant document sections using embeddings and retrieval.
- ⚙️ **Modular Architecture**: Easily extendable backend with FastAPI and frontend integration.
- 📡 **Webhook Integration**: Designed for deployment via n8n for no-code/low-code workflows.
- 🌐 **Frontend Interface**: Clean, simple UI to input queries and view responses.

---


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Saha-Manav//Insurance-Policy-Assistant.git
cd Insurance-Policy-Assistant
```



### 2. Start Frontend 

You can open `frontend/index.html` directly in your browser.


## 🌐 Deployable Site

🔗 **Live Demo**: [Insurance Query Assistant Web App](https://insurance-query-assistant.netlify.app/)

Experience the deployed version of the Insurance Query Assistant. Use the interface to ask natural language questions and see how the system retrieves answers from insurance documents.

---

## 🔄 n8n Workflow Deployment

To integrate with [n8n](https://n8n.io):

1. Import the `n8n/webhook-workflow.json` into your n8n instance.
2. Configure the webhook trigger URL.
3. Make sure the Gemini API key (or other LLM provider keys) are properly added in HTTP Request node.
4. Use the frontend to POST queries to the n8n webhook endpoint.

---

## 🧪 Example Query

1. Ask a question:

   ```
   “What is the maximum hospitalization coverage under this policy?”
   ```

2. The assistant will:
   - Retrieve relevant policy sections
   - Process the context using the LLM
   - Return a concise, human-like answer

---

## ⚙️ Technologies Used

- **Python 3.10+**
- **FastAPI**
- **Gemini API & OpenAI API**
- **n8n (No-code orchestration)**
- **Frontend (HTML + CSS + JavaScript)**

---

## 📈 Roadmap

- [ ] Multi-document support
- [ ] Policy comparison across providers
- [ ] Chat history and memory
- [ ] OCR integration for scanned policies
- [ ] User authentication and dashboard

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push and create a Pull Request

---
