const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message){
    console.log(message)
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// add event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(username.value);

    if(username.value === ''){
        showError(username, 'Username is Required');
    }else{  
        showError(username);
    }
});
