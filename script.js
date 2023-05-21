        function validateForm(event) {
            event.preventDefault(); // Prevent form submission
            
            // Get form field values
            var fullName = document.getElementById('fullName').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
    
            // Validate fields
            var isValid = true;
    
            if (fullName.length < 5) {
                alert('Full Name must be at least 5 characters');
                isValid = false;
            }
    
            if (!email.includes('@')) {
                alert('Enter a valid Email ID');
                isValid = false;
            }
    
            if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
                alert('Enter a valid 10-digit Phone Number');
                isValid = false;
            }
    
            if (password.length < 8 || password === 'password' || password === fullName) {
                alert('Password must be at least 8 characters and not the word "password" or your name');
                isValid = false;
            }
    
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                isValid = false;
            }
    
            if (isValid) {
                alert('Form submitted successfully!');
                document.getElementById('validationForm').reset();
            }
        }