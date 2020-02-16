function submitContactForm(e) {
    var nameInput = document.getElementById('name');
    var errorMessages = document.getElementById('error-messages');

    if (nameInput.value.trim() === '') {
        errorMessages.innerHTML = 'Please enter your name';
        nameInput.focus();
        e.preventDefault();
    }
}