const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container    = document.getElementById('container');
const body    = document.getElementById('myDiv');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active")
    body.classList.add("active")
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active")
    body.classList.remove("active")
});