// script.js
function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const password = document.forms["myForm"]["password"].value;
    const confirmPassword = document.forms["myForm"]["confirmPassword"].value;
  
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (password === "") {
      alert("Password must be filled out");
      return false;
    }
  
    if (confirmPassword === "") {
      alert("Confirm Password must be filled out");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return false;
    }
    else{
        alert('validation successfully completed')
    }
  
    // You can add more validation checks here, e.g., for email format, password strength, etc.
  
    return true; // Form submission will proceed if all validations pass
  }
  