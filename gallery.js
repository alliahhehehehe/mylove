document.querySelectorAll('.show-message-btn').forEach(button => {
    button.addEventListener('click', function() {
        const messageDiv = this.nextElementSibling;
        messageDiv.style.display = messageDiv.style.display === 'block' ? 'none' : 'block';
        
        // Smooth scroll after showing message
        window.scrollTo({
            top: messageDiv.offsetTop - 50,
            behavior: 'smooth',
        });
    });

});
