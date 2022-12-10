function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  if(!username) {
    alert('Empty username');
    return;
  }
  if(!password) {
    alert('Empty password');
    return;
  }
  postRequest('/login', {
    username: username,
    password: password
  })
    .then((response) => {
      console.log(response);
      if(response.success) {
        location.href = '/dashboard';
      } else {
        alert(response.error);
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error.toString());
    });
}

function register() {
  location.href = '/register';
}
