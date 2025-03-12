const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');

inputfield.addEventListener('input', function() {
    console.log(inputfield.value);
    let password = inputfield.value;
    if (password.length < 8) {
        outputfield.innerText = 'Password is too short';
        outputfield.style.color = 'red';
    } else {
        outputfield.innerText = 'Password is long enough';
        outputfield.style.color = 'green';


        if(password.search(/[a-z]/) == -1){
            outputfield.innerText = 'Password is missing a lowercase';
            outputfield.style.color = 'red';
        }
    }
});