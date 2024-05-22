const loginInput = document.querySelector('.login-form input');
const loginBtn = document.querySelector('.login-form button');
const loginForm = document.querySelector('.login-form');

const greeting = document.querySelector('.greeting');
const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greetingDisplayFunc(username);
}
function greetingDisplayFunc(usernameDis) {
  greeting.innerText = `Hello ${usernameDis}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  greetingDisplayFunc(savedUsername);
}
