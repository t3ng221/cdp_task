    var writeMessageBtn = document.getElementById('write_message_btn');
    var contactForm = document.getElementById('contact_form');
    var submitBtn = document.getElementById('submit_btn');

        writeMessageBtn.addEventListener('click', function () {
            if (contactForm.style.display === 'none' || contactForm.style.display === '') {
                contactForm.style.display = 'block';
                writeMessageBtn.textContent = 'Close';
            } else {
                contactForm.style.display = 'none';
                writeMessageBtn.textContent = 'Write Message';
            }
            
        });
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevents the form from submitting and reloading the page
            alert('Message Sent'); // Display an alert message
        });