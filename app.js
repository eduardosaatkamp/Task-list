'use strict';

const switcher = document.querySelector('#theme-btn');

switcher.addEventListener('click', function () {

  document.body.classList.toggle('dark-theme');

  var className = document.body.className;
  var themeToggle = document.getElementById("tema");
  var binBg = document.getElementById("delete");

  if (className == 'dark-theme') {
    themeToggle.style.color = '#fae900';
    if (binBg != null) { 
      binBg.style.backgroundColor = '#999999'; 
    }

  } else {
    themeToggle.style.color = '#0400fb';
    if (binBg != null){
      binBg.style.backgroundColor = '#e2e2e2';
    }
  }

  console.log('current class name: ' + className);
});

const dataElement = document.getElementById('data-atual');

const dataAtual = new Date();

const options = { day: 'numeric', month: 'long', year: 'numeric' };
const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);

dataElement.textContent = dataFormatada;

const checkboxes = document.querySelectorAll('.checkbox-group');

const messageElement = document.getElementById('message');

function checkAllCheckboxes() {
  let allChecked = true;

  checkboxes.forEach(checkbox => {

    if (!checkbox.checked) {
      allChecked = false;
    }
  });

  if (allChecked) {
    messageElement.textContent = 'Parabéns, você concluiu tudo!';
  } else {
    messageElement.textContent = '';
  }
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', checkAllCheckboxes);
});

var inputCount = 1;

function adicionarTarefa() {

  const inputText = document.getElementById('input-tarefa');

  //Caso o input esteja vazio exibe a mensagem passado no alerta.
  if (document.querySelector('#input-task input').value.length == 0) {
    alert("Campo vazio, por favor informar uma tarefa");
  }

  //Se uma tarefa for informada, faz a criação do elemento e adiciona a tarefa com seus id, classes e formatação
  else {
    var taskList = document.querySelector('#task-list').innerHTML += `
    <li>
      <input id="iten${inputCount}" class="checkbox-group" type="checkbox">
      <label for="iten${inputCount}">${inputText.value}</label>
      <button id="delete">
        <i id="lixeira" class="far fa-trash-alt"></i>
      </button>
    </li>
    `

    var currentTask = document.querySelectorAll('#delete');

    //Função para remover a tarefa referente ao botão deletar cliclado.
    for (var i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      }
    }
    inputCount++;
  }

  inputText.value = '';
}