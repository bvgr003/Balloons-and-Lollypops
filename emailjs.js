// Initialize EmailJS
emailjs.init('mtlcgof4UjWYDiUEw'); // Replace 'your_user_id' with your actual EmailJS user ID

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_847yuf8', 'template_iciv0kp', {
        from_name: name,    // Must match variable in your template
        from_email: email,  // Must match variable in your template
        message: message,   // Must match variable in your template
    })
    .then(function (response) {
        alert('Message sent successfully!'); // Success message
        console.log('SUCCESS!', response.status, response.text); // Debug log
    })
    .catch(function (error) {
        alert('Failed to send message. Please try again.'); // Error message
        console.log('FAILED...', error); // Debug log
    });

    // Optional: Reset the form after submission
    event.target.reset();
});
