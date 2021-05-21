// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

let submitButton = document.getElementById('formButton');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let nameInput = document.getElementById('name_input');
    let emailInput = document.getElementById('email_input');
    let messageArea = document.getElementById('message_area');

    let nameInputValue = nameInput.value;
    let emailInputValue = emailInput.value;
    let messageAreaValue = messageArea.value;

    alert(`You have a message from: ${nameInputValue} \nWhich says: ${messageAreaValue}. \nMessage them back at: ${emailInputValue}.`)
})

