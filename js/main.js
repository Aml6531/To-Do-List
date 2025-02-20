const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const buttons = document.getElementById("buttons");




// Add Task

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please Enter a Task");
  } else {
    let li = document.createElement("li");
    li.setAttribute("data-text", inputBox.value);
    li.textContent = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);
    saveData();
    toggleButtons();
  }
  inputBox.value = "";
}


//clear search input 
function clearInput() {
    inputBox.value = "";
  }

// Checked/Unchecked Task 
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); 
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// check all tasks
function checkAll() {
  let allTasks = document.querySelectorAll("#list-container li");
  let check = [...allTasks].some(task => !task.classList.contains("checked"));

  allTasks.forEach(task => task.classList.toggle("checked", check));

  saveData();
}

// clear all tasks
function clearAll() {
  listContainer.innerHTML = ""; 
  saveData(); 
  toggleButtons();
}

// hide/show buttons
function toggleButtons() {
  if (listContainer.children.length > 0) {
    buttons.classList.remove("d-none"); // Show buttons
  } else {
    buttons.classList.add("d-none"); // Hide buttons
  }
}

//save tasks 
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  toggleButtons();
}

function listedTasks() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
  toggleButtons();
 
}
listedTasks();


