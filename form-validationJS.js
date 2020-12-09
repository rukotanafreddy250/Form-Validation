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

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = ' form-control success';
    const small = formControl.querySelector('small');
    // small.innerText = message;
}
// function Email validator
function emailValidator(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

      
// check all fields
    function checkRequired(inputArr){
        inputArr.forEach(function(input){
            console.log(input);
            console.log(input.id);
            if(input.value.trim() === ""){
                showError(input, ` ${getFieldName(input)} is Required`);
            }else{
                showSuccess(input);
            }
        });
    }    

// getFieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// getLengthForChars
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, ` ${getFieldName(input)} must be at least ${max} characters`);
    }else{
        showSuccess(input);
    }
}


// add event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(username.value);
           
    checkRequired([username, email, password, password2]);
    checkLength(username, 0, 5);
    checkLength(password, 0, 5);
    checkLength(password2, 0, 5);    
    // if(username.value === ''){         
    //     showError(username, 'Username is Required');
    // }else{   
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email, 'Email is Required');
    // }else if(!emailValidator(email.value)){
    //     showError(email, 'Email Is Not Valid');
    // }else{
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password, 'Password is Required');
    // }else{  
    //     showSuccess(password);
    // }
    
    // if(password2.value === ''){
    //     showError(password2, 'Confirmation Password is Required');
    // }else{
    //     showSuccess(password2);
    // }
});

           









