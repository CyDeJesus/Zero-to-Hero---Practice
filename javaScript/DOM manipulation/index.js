// document.addEventListener("DOMContentLoaded", () => {
//   const rootDiv = document.querySelector("#root"); // can also use getElementById instead of querySelector - (. for class and # for id)
//   const testSpan = document.querySelector(".test-span");

//   console.log("rootDiv", rootDiv);
//   console.log("testSpan", testSpan);
// });

document.addEventListener("DOMContentLoaded", () => {
  const rootDiv = document.querySelector("#root");
  const todoMainUL = document.querySelector("#to-do-main");
  const addBtn = document.querySelector("#addBtn");
  const inputTodo = document.querySelector("#inputTodo");

  function addTodoItem(todo) {
    return `<li>${todo}</li>`;
  }

  function handleAddTodo() {
    if (inputTodo.value === "") {
      document.querySelector("#result").textContent = "Cannot be empty!";
      // document.querySelector("#result").style.color = "red";
    } else {
      const toAdd = todoMainUL.innerHTML;
      const todoItem = inputTodo.value;
      todoMainUL.innerHTML = toAdd + addTodoItem(todoItem);
      inputTodo.value = "";
      document.querySelector("#result").textContent = "";
    }
  }

  function test() {
    console.log("hello test");
  }
  // addBtn.addEventListener("click", handleAddTodo);
  addBtn.addEventListener("click", handleAddTodo);
});
