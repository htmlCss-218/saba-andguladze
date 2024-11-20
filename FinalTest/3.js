function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const emailInput = document.getElementById("email-input");
  const emailError = document.getElementById("email-error");
  const emailSuccess = document.getElementById("email-success");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (emailPattern.test(emailInput.value.trim())) {
    emailError.style.display = "none"; 
    emailSuccess.style.display = "block"; 
    emailInput.value = ""; 
  } else {
    emailError.style.display = "block"; 
    emailSuccess.style.display = "none"; 
  }
});

  