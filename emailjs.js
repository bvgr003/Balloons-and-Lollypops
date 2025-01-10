emailjs.init('mtlcgof4UjWYDiUEw');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_847yuf8', 'template_iciv0kp', {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then(function (response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch(function (error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });


    event.target.reset();
});