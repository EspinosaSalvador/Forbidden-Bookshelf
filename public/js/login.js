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
  
  document.querySelector('#button').addEventListener('submit', loginFormHandler);

  console.log("hello world!")
  
  
