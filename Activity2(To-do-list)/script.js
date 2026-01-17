
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();

   
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement('li');
    
    
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

   
    li.querySelector('.task-text').addEventListener('click', function() {
        this.parentElement.classList.toggle('completed');
    });


    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

 
    taskList.appendChild(li);

   
    taskInput.value = "";
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});