const headerBtn = document.getElementById('btn'); // modificado button --> headerBtn
const headerEmail = document.getElementById('emailPlace');
const password = document.getElementById('passwordPlace');
const checkBtn = document.getElementById('agreement');
const subBtn = document.getElementById('submit-btn');
const dispCount = document.querySelector('#counter');
const counterText = document.querySelector('#textarea');
const formBtn = document.getElementById('submit-btn'); // linha adicionada

headerBtn.addEventListener('click', () => { // modificado button --> headerBtn
  if (headerEmail.value === 'tryber@teste.com' && password.value === '123456') {
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

counterText.addEventListener('input', () => {
  let count = counterText.textLength;
  count = 500 - count;
  dispCount.innerText = count;
});

function fetchFormData() {
  const checkedSubjects = document.querySelectorAll('.subject:checked');
  const subjectList = [];
  for (let i = 0; i < checkedSubjects.length; i += 1) {
    subjectList.push(checkedSubjects[i].value);
  }
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const fullName = `Nome: ${name} ${lastname}`;
  const email = `Email: ${document.getElementById('input-email').value}`;
  const house = `Casa: ${document.getElementById('house').value}`;
  const family = `Família: ${document.querySelector('input[name="family"]:checked').value}`;
  const subjects = `Matérias: ${subjectList.join(', ')}`;
  const rate = `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`;
  const obs = `Observações: ${document.getElementById('textarea').value}`;
  const data = [fullName, email, house, family, subjects, rate, obs];
  return data;
}

formBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = fetchFormData();
  const main = document.getElementsByTagName('main')[0];
  main.firstElementChild.style.display = 'none';
  const newForm = document.getElementById('form-data');
  for (let i = 0; i < 7; i += 1) {
    const newTagP = document.createElement('p');
    newTagP.style.margin = '5px 0 0 10px';
    newForm.appendChild(newTagP);
    newTagP.innerText = formData[i];
  }
});
