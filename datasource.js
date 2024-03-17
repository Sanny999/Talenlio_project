let todos = [];

const getTodos = () => todos;

const addTodo = (task) => {
  const todo = {
    id: String(todos.length + 1),
    task,
    completed: false,
  };
  todos.push(todo);
  return todo;
};

const toggleTodoCompleted = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
    return todos[todoIndex];
  }
  return null;
};

module.exports = { getTodos, addTodo, toggleTodoCompleted };
