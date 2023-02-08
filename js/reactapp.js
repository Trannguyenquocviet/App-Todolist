let btnAddTaskEl=document.querySelector('button')
let taskNameEl=document.querySelector('#content')


let tasks=getTaskFromLocalStorage()
renderTasks(tasks)


btnAddTaskEl.addEventListener('click', function(){
    if (!taskNameEl.value){
        alert('vui lòng nhập tên công việc')
        return false
    }


    let tasks=getTaskFromLocalStorage()
   

    tasks.push({
        name: taskNameEl.value
    })
    taskNameEl.value=''

    localStorage.setItem('tasks',JSON.stringify(tasks))



    renderTasks(tasks)
})


function editTask(id){

}

function deleteTask(id){
    if(confirm('Are you sure to get the job done?')){
        let tasks = getTaskFromLocalStorage()
        tasks.splice(id, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasks(getTaskFromLocalStorage())
    }
}



function renderTasks(tasks=[]){
    let content='<ul>'

    tasks.forEach((task, index)=>{
        content += `<li>
            <div class="task-name">${task.name}</div>
            
            <a href="#" onclick="deleteTask(${index})">Done</a>
        </li>`
    })

    content +='</ul>'

    document.querySelector('#result').innerHTML = content
}

function getTaskFromLocalStorage(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) :[]
}
    