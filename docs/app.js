//Define UI vars
const form= document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearBtn= document.querySelector('.clear-tasks');
const filter= document.querySelector('#filter');
const taskInput= document.querySelector('#task');

// Load all event listener

loadEventListeners();

function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//Add Task

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    ///create li
    const li= document.createElement('li');
    //add class
    li.className= 'collection-item';
    //create text nodej and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link=document.createElement('a');
    link.className= 'delete-item secondary-content'; //secondary-content puts something to the left of a list item in materialize
    //Add icon html

    link.innerHTML='<i class="fa fa-remove"></i>';
    //append link to li


    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);
    //Clear input
    taskInput.value='';

    e.preventDefault(); //prevents default form submit
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
};

function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

}

function filterTasks(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item= task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) !== -1){
           task.style.display="block";
        } else{
            task.style.display = 'none';
        }
    }); //querySelectorAll returns node list
}