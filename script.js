let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  let list = document.getElementById("taskList");
  if (!list) return;

  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;

    let del = document.createElement("button");
    del.textContent = "X";
    del.style.marginLeft = "10px";

    del.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(del);
    list.appendChild(li);
  });
}

function addTask() {
  let task = prompt("Enter a new task:");

  if (!task || task.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push(task.trim());
  saveTasks();
}


function showMessage() {
  addTask();
}

function submitForm() {
  let name = document.querySelector("input[type='text']").value;
  alert("Thank you, " + name + "! Your message has been received.");
  return false;
}

function showAll() {
  renderTasks();
}

function showFirstFive() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.slice(0, 5).forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

// initialize on load
renderTasks();
