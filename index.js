const TodoTitle = document.querySelector('.todo-title');
const TodoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');


function removeTodo(event){
    event.target.parentNode.remove();
}



function addtodo(){
    function likeTodo(){
        count++;
        showLike.innerHTML=`Like of Clicks are: ${count}`;
    }

    let count = 0;
    const showLike = document.createElement('h3');

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

    //  like button
    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.classList.add('like-todo');
    button2.innerHTML = 'Like';
    button2.addEventListener('click', likeTodo);
    

    // h3 , button -> div
    todo.append(h3, button2, button, showLike);

    // div + todo list
    todoList.prepend(todo);
}
TodoButton.addEventListener('click', addtodo);