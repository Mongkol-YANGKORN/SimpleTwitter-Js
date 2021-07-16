const TodoTitle = document.querySelector('.title');
const TodoButton = document.querySelector('.addtodo');
const todoList = document.querySelector('.tweet');

function removeTodo(event){
    event.target.parentNode.remove();
}

