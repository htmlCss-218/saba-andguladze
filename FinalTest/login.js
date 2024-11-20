document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    // If validation passes, redirect to 1.html
    window.location.href = '1.html';
  });
  
  // Function to validate email format
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  