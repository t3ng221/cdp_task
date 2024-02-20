    var writeMessageBtn = document.getElementById('write_message_btn');
    var contactForm = document.getElementById('contact_form');
    var submitBtn = document.getElementById('submit_btn');

        writeMessageBtn.addEventListener('click', function () {
            if (contactForm.style.display === 'none' || contactForm.style.display === '') {
                contactForm.style.display = 'block';
                writeMessageBtn.textContent = 'Close';
            } 
            else {
                contactForm.style.display = 'none';
                writeMessageBtn.textContent = 'Write Message';
            }
            
        });
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevents the form from submitting and reloading the page
            alert('Message Sent'); // Display an alert message
        });


     /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "180px";
    document.getElementById("main").style.marginLeft = "220px";
    document.getElementById("wholePage").style.marginLeft="200px"
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
        
