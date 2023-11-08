let idNumber = 1;
let todoItems = [];

// Add Function
function addToDoItem(text) {
  const newTodo = {
    id: idNumber,
    text: text,
    completed: false
  };
  idNumber++;
  todoItems.push(newTodo);
}

// Remove Function
function removeToDoItem(todoId) {
  todoItems = todoItems.filter(item => item.id !== todoId);
}

// Mark as complete Function
function markToDoItemAsCompleted(todoId) {
  const gotItem = todoItems.find(item => item.id === todoId);
  if (gotItem) {
    gotItem.completed = true;
  }
}

// Clear Function
function clearCompletedTasks() {
  const originalLength = todoItems.length;
  todoItems = todoItems.filter(item => !item.completed);
  return todoItems.length !== originalLength;
}

addToDoItem("Go outside");
addToDoItem("Buy colognes");

markToDoItemAsCompleted(1);

console.log("Todo list:", todoItems);

clearCompletedTasks();
console.log("After clearing completed tasks:", todoItems);


// Resoruces used down below 
// Chatgpt was used for debugging
// Past python Knowledge (Arrays,loops,if statements, and functions)
