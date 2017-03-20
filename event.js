//EXAMPLE ONE:
//set up a function that will be trigger when the event occurs
var alertUser = function() {
  alert('Button has been clicked!');
}
//find element to tie the event to, and save it as a variable
var button = document.querySelector('button');

//set up event handler. when the event (user click happens) the initial (alertUser) function will run
button.addEventListener('click', alertUser);


//EXAMPLE TWO:
//find the email input field
var emailInputField = document.getElementById('email');

//set up a function to run when the event occurs
var checkEmailInput = function() {
  //check to see whether the user has enetered a value to the desired email field
  if (emailInputField.value.length === 0) {
    //if the email field is black, then display a message to the user
    document.getElementById('message').innerText = 'Please enter an email.';
  }
}