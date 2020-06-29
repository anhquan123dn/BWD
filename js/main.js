const signUpButton = document.getElementById('to-sign-up');
const signInButton = document.getElementById('to-sign-in');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));


