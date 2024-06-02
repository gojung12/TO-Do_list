function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
        alert("MAUSKIN TUGASNYA WOI!");
        return;
    }
  
    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
  
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        var newText = prompt("CEPET MASUKINNYA:", taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText;
        }
    };
  
    var completeButton = document.createElement("button");
    completeButton.textContent = "Selesai";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };
  
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }




  // Get the input field
var input = document.getElementById("taskInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button1").click();
  }
});