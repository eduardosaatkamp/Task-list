'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
  
  document.body.classList.toggle('dark-theme');

  var className = document.body.className;
  var icone = document.getElementById("icone");

  if (className == 'dark-theme') {
    icone.style.color = '#fae900';
  } else {
    icone.style.color = '#0400fb';
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
