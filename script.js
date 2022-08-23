const form = document.querySelector('form');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const errorMessage = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  if (password.value !== passwordConfirm.value) {
    password.classList.add('invalid');
    passwordConfirm.classList.add('invalid');
    errorMessage.removeAttribute('hidden');
  } else {
    password.classList.remove('invalid');
    passwordConfirm.classList.remove('invalid');
    errorMessage.setAttribute('hidden', true);
  }
  e.preventDefault();
});
