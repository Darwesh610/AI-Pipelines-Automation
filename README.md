# VectorShift Frontend Technical Assessment

A drag-and-drop pipeline builder that lets users visually connect AI workflow nodes on an interactive canvas.

---

## Tech Stack

- **Frontend:** React, ReactFlow, Zustand
- **Backend:** Python, FastAPI

---

## Requirements

- Node.js v16+
- Python v3.12+

---

## Running the Project

Both servers must be running at the same time for the app to work correctly.

### 1. Backend

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app
```

Backend runs at: `http://localhost:8000`

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

---

## Features

### Part 1 — Node Abstraction
A reusable `BaseNode` component powers all nodes. Creating a new node requires only a title, input handles, and output handles — no repeated code.

Nine node types are available:
- **Input** — entry point for pipeline data
- **Output** — final destination of pipeline data
- **LLM** — language model processing step
- **Text** — text input with dynamic variable handles
- **Transform** — applies text transformations (uppercase, lowercase, trim)
- **Note** — sticky note for canvas annotation
- **Conditional** — if/else routing logic
- **API Call** — makes an external HTTP request
- **Merge** — combines two inputs into one

### Part 2 — Styling
Dark theme with a unified design system using CSS variables. All nodes, handles, inputs, and controls share a consistent visual language.

### Part 3 — Text Node Logic
The Text node supports two dynamic behaviors:
- **Auto-resize:** the node grows wider and taller as the user types
- **Variable handles:** typing `{{ variableName }}` creates a new input handle on the left side of the node. Handles are deduplicated and removed when the variable is deleted.

### Part 4 — Backend Integration
Clicking **Submit Pipeline** sends the current nodes and edges to the `/pipelines/parse` endpoint. The backend returns:
- Number of nodes
- Number of edges
- Whether the pipeline forms a valid Directed Acyclic Graph (DAG)

An alert displays all three values to the user.

---

## Project Structure

```
/frontend       → React app (npm start)
  /src
    /nodes      → All node components (BaseNode + 8 node types)
    toolbar.js  → Draggable node toolbar
    ui.js       → ReactFlow canvas
    store.js    → Zustand state management
    submit.js   → Submit button + backend integration

/backend        → FastAPI app (uvicorn main:app)
  main.py       → /pipelines/parse endpoint + DAG algorithm
```
