/* chat box*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  /* collaps button*/ 
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


/*  button delete */
const boxDiv = document.querySelector("#textHead");
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");

addButton.addEventListener("click", function () {
  textHead.classList.add("style");
});

removeButton.addEventListener("click", function () {
  textHead.classList.remove("style");
});


const newTaskInput = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

function addTask() {
  const newTask = newTaskInput.value;
  if (newTask) {
    const li = document.createElement('li');
    li.textContent = newTask;
    taskList.appendChild(li);
    newTaskInput.value = '';
    li.addEventListener('click', completeTask);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(deleteButton);
  }
}

function completeTask(event) {
  const task = event.target;
  task.classList.toggle('done');
}

function deleteTask(event) {
  const task = event.target.parentElement;
  task.remove();
}

addTaskButton.addEventListener('click', addTask);



