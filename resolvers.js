let todos = [
    { id: "1", task: "Buy groceries", completed: false },
    { id: "2", task: "Walk the dog", completed: false }
  ];
  
  const resolvers = {
    Query: {
      todos: () => todos,
      todoById: (_, { id }) => {
        return todos.find(todo => todo.id === id);
      }
    },
    Mutation: {
      addTodo: (_, { task }) => {
        const newTodo = { id: String(todos.length + 1), task, completed: false };
        todos.push(newTodo);
        return newTodo;
      },
      updateTodo: (_, { id, task }) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        if (todoToUpdate) {
          todoToUpdate.task = task;
          return todoToUpdate;
        }
        return null;
      },
      toggleTodoCompleted: (_, { id }) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        if (todoToUpdate) {
          todoToUpdate.completed = !todoToUpdate.completed;
          return todoToUpdate;
        }
        return null;
      },
      deleteTodo: (_, { id }) => {
        const indexToDelete = todos.findIndex(todo => todo.id === id);
        if (indexToDelete !== -1) {
          const deletedTodo = todos.splice(indexToDelete, 1);
          return deletedTodo[0];
        }
        return null;
      }
    }
  };
  
  module.exports = resolvers;
  