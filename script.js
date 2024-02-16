var writeMessageBtn = document.getElementById('write_message_btn');
        var contactForm = document.getElementById('contact_form');

        writeMessageBtn.addEventListener('click', function () {
            if (contactForm.style.display === 'none' || contactForm.style.display === '') {
                contactForm.style.display = 'block';
                writeMessageBtn.textContent = 'Close';
            } else {
                contactForm.style.display = 'none';
                writeMessageBtn.textContent = 'Write Message';
            }
        });