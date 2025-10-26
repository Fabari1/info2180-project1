/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    // JavaScript code can be added here if needed in the future
    const newsletterForm = document.querySelector(".newsletter-form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementsByClassName("message")[0] || document.createElement("div");
    
    newsletterForm.addEventListener('submit', function(event){
        event.preventDefault(); // Prevent form submission
        const email = emailInput.value.trim();
        console.log("Submitted email:", email);

        messageDiv.textContent = ''; // Clear previous messages
        messageDiv.style.color = '';

        if (emailInput.value.trim() === '') {
            messageDiv.textContent = 'Please enter your email address.';
            messageDiv.style.color = 'red';
            messageDiv.style.display = 'rgba(255, 0, 0, 0.1)';
            messageDiv.style.padding = '10px';
            messageDiv.style.borderRadius = '5px';
            messageDiv.style.marginTop = '10px';

        } else {
            const successMessage = `Thank you! Your email address ${email} has been added to our mailing list!`;
            
            messageDiv.textContent = successMessage;
            messageDiv.style.color = '#fff'; // White text
            messageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; // Subtle background
            messageDiv.style.padding = '10px';
            messageDiv.style.borderRadius = '5px';
            messageDiv.style.marginTop = '15px';

            // Optional: Clear the input field after successful submission
            emailInput.value = '';
        }

});

});