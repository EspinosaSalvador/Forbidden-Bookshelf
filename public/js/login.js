//We are using the forms and buttons specific to the login page to fetch the login via API
//The below code is to login an existing user

const loginFormHandler = async (event) => {
    event.preventDefault();
  
  
    const email = document.querySelector('#email-address').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert('Login successful!');
      } else {
        alert('Failed to login');
      }
    } else {
      alert('Failed to login');
    }
  };

//We are using the forms and buttons specific to the login page to fetch the login via API
//The below code is to create a new user and do a login
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert('Signed up successfully!')
      } else {
        alert('Failed to sign up');
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  


  
  
