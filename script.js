document.getElementById('heart').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    
    // Show the message with a fade-in effect
    messageElement.classList.add('show');
    messageElement.style.display = 'block'; // Ensure it's displayed

    // Hide the message after a short delay (optional)
    setTimeout(() => {
        messageElement.classList.remove('show');
        setTimeout(() => {
            messageElement.style.display = 'none'; // Hide after transition
        }, 500); // Match this duration with the CSS transition duration
    }, 10000); // Show the message for 10 seconds (adjust as needed)
});