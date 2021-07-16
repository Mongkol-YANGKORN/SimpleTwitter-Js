const TodoTitle = document.querySelector('.todo-title');
const TodoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');

function removeTodo(event){
    event.target.parentNode.remove();
}

function likeTodo(event){
    let Count = 0;
    Count++;
    console.log(Count);
    event.target.parentNode.add(Count);
}


function addtodo(){

    // div
    const todo = document.createElement('div');
    todo.classList.add('todo');

    // h3
    const h3 = document.createElement('h3');
    h3.innerHTML = TodoTitle.value;

    // tweet , delete button
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('remove-Todo');
    button.innerHTML = 'Delete';
    button.addEventListener('click', removeTodo);

    // 

    // h3 , button -> div
    todo.append(h3, button);

    // div + todo list
    todoList.prepend(todo);
}
TodoButton.addEventListener('click', addtodo);