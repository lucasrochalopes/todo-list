var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

/*var todos = [
    'Fazer café',
    'Estudar javascript',
    'Acessar comunidade rocketseat'
];*/

buttonElement.onclick = addTodo;

renderTodos();

function addTodo(){
    var todo = inputElement.value;
    todos.push(todo);
    inputElement.value='';
    renderTodos();
    saveToStorage();
}

function removerTodo(pos){
    
    todos.splice(pos,1);
    renderTodos()
    saveToStorage();
        
}

function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}

function renderTodos(){
    
    ulElement.innerHTML = '';

    for(todo of todos){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(todo);
        liElement.appendChild(textElement);
        
        var linkExcluirElement = document.createElement('a');
        var textLinkElement = document.createTextNode('Excluir');
        linkExcluirElement.appendChild(textLinkElement);
        linkExcluirElement.setAttribute('href','#!');
        var pos = todos.indexOf(todo);
        linkExcluirElement.onclick = function(){
            removerTodo(pos);
        }
        
        liElement.appendChild(linkExcluirElement);
        ulElement.appendChild(liElement);

    }
}