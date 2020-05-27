//Used to mimic a call to the server
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = [
  { "id": 0, "description": "duis dolore nostrud", "done": true },
  { "id": 1, "description": "exercitation ea cupidatat", "done": true },
  { "id": 2, "description": "laborum laborum est", "done": false },
  { "id": 3, "description": "laborum id et", "done": false },
  { "id": 4, "description": "velit amet pariatur", "done": true },
  { "id": 5, "description": "est deserunt aliquip", "done": false },
  { "id": 6, "description": "enim id nostrud", "done": false },
  { "id": 7, "description": "consequat labore ipsum", "done": false },
  { "id": 8, "description": "cillum consequat elit", "done": false },
  { "id": 9, "description": "esse aute incididunt", "done": false }
]

const fetchTodos = async () => {
  await delay(2000);
  return todos
}

export { fetchTodos }