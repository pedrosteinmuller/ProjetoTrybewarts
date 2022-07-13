const button = document.querySelector('#btn');
const email = document.getElementById('emailPlace');
const password = document.getElementById('passwordPlace');
const checkBtn = document.getElementById('agreement');
const subBtn = document.getElementById('submit-btn');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkBtn.addEventListener('click', () => {
  if (checkBtn.checked === true) {
    subBtn.disabled = false;
  } else {
    subBtn.disabled = true;
  }
});
