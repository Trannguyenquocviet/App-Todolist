let btnAddTaskEl=document.querySelector('button')
let taskNameEl=document.querySelector('#content')

btnAddTaskEl.addEventListener('click', function(){
    if (!taskNameEl.value){
        alert('vui lòng nhập tên công việc')
        return false
    }

    let tasks=[]

    tasks.push({
        name: taskNameEl.value
    })
    taskNameEl.value=''

    renderTasks(tasks)
})


function renderTasks(tasks=[]){
    let content='<ul>'

    tasks.forEach((task)=>{
        content += `<li>
            <div class="task-name">${task.name}</div>
            <a href="#">sửa</a>
            <a href="#">xoá</a>
        </li>`
    })

    content +='</ul>'

    document.querySelector('#result').innerHTML = content
}