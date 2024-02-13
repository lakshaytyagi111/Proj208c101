var draggingTask = null;

function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();

  if (task !== "") {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");

    var taskText = document.createElement("span");
    taskText.textContent = task;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&times;"; // Cross sign HTML entity
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function() {
      toggleTaskCompletion(li);
    };

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    
    li.setAttribute("draggable", true);
    li.ondragstart = function(event) {
      draggingTask = event.target;
    };
    li.ondragover = function(event) {
      event.preventDefault();
    };
    li.ondrop = function(event) {
      var droppedTask = event.target;
      if (draggingTask !== null && draggingTask !== droppedTask) {
        ul.insertBefore(draggingTask, droppedTask.nextSibling);
      }
      draggingTask = null;
    };

    ul.appendChild(li);
    input.value = "";
  }
}

function toggleTaskCompletion(taskElement) {
  taskElement.classList.toggle("completed");
}
