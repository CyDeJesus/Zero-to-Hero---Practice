document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.querySelector("#main");
  const todoInput = document.querySelector("#todo");
  const addBtn = document.querySelector("#todoBtn");
  const todo_mainUL = document.querySelector("#todo-mainUL");

  function addTodoList(todoItem) {
    return `<li><span>${todoItem}</span> <button class="delBtn" style="margin-left:10px;">Delete</button></li>`;
  }

  const delBtn = document.querySelector("#del");

  function handleAddTodoList() {
    if (todoInput.value === "") {
      document.querySelector("#result").textContent = "Can't be empty!";
    } else {
      const mainUL = todo_mainUL.innerHTML;
      const userInput = todoInput.value;

      todo_mainUL.innerHTML = mainUL + addTodoList(userInput);
      todoInput.value = "";
      document.querySelector("#result").textContent = "";
    }
  }

  function test() {
    console.log("hello");
  }

  addBtn.addEventListener("click", handleAddTodoList);

  todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleAddTodoList();
    }
  });

  todo_mainUL.addEventListener("click", (event) => {
    if (event.target.classList.contains("delBtn")) {
      event.target.parentElement.remove(); // removes the <li>
    }
  });
});
