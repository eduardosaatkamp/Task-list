'use strict';

// Seleciona o elemento com a classe 'btn'
const switcher = document.querySelector('.btn');

// Adiciona um ouvinte de evento de clique ao elemento 'switcher'
switcher.addEventListener('click', function() {
  // Toggla a classe 'dark-theme' no elemento 'body'
  document.body.classList.toggle('dark-theme');

  // Obtém a classe atual do elemento 'body'
  var className = document.body.className;
  var icone = document.getElementById("icone");

  // Verifica se a classe é 'dark-theme' e define a cor do ícone de acordo
  if (className == 'dark-theme') {
    icone.style.color = '#fae900';
  } else {
    icone.style.color = '#0400fb';
  }

  // Imprime a classe atual no console
  console.log('current class name: ' + className);
});

// Obtém o elemento <span> pelo ID
const dataElement = document.getElementById('data-atual');

// Obtém a data atual
const dataAtual = new Date();

// Formata a data para o formato desejado
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);

// Define o texto do elemento <span> para exibir a data atual completa
dataElement.textContent = dataFormatada;

// Seleciona todos os elementos com a classe '.checkbox-group'
const checkboxes = document.querySelectorAll('.checkbox-group');

// Seleciona o elemento com o ID 'message'
const messageElement = document.getElementById('message');

// Função para verificar se todas as caixas de seleção estão marcadas
function checkAllCheckboxes() {
  let allChecked = true;

  // Itera sobre cada elemento 'checkbox' da lista 'checkboxes'
  checkboxes.forEach(checkbox => {
    // Verifica se a caixa de seleção não está marcada
    if (!checkbox.checked) {
      allChecked = false;
    }
  });

  // Atualiza a mensagem de texto do elemento 'messageElement'
  if (allChecked) {
    messageElement.textContent = 'Parabéns, você concluiu tudo!';
  } else {
    messageElement.textContent = '';
  }
}

// Adiciona um event listener 'change' a cada elemento 'checkbox' da lista 'checkboxes'
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', checkAllCheckboxes);
});