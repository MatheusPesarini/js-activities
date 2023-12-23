input = document.querySelector('.addTarefa');
btn = document.querySelector('.btnAddTarefa');
tarefas = document.querySelector('.tarefas');
const form = document.querySelector('form');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    console.log(textoInput);
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    botaoApagar(li);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!input.value) return;
    criaTarefa(input.value);
    input.value = ''; // Limpa o input
    salvarTarefas();
});

function botaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(event){
    const el = event.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();