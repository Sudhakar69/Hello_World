// script.js
document.addEventListener('DOMContentLoaded', function() {
    // This function will run after the document is fully loaded.
    console.log('Document is ready.');

    // Example of event handling
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button was clicked!');
        });
    }
});