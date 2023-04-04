export function LoginForm() {
  const section = document.createElement('section');
  const form = document.createElement('form');

  function message(event) {
    event.preventDefault();

    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        let userFound = false;
        for (let i = 0; i < users.length; i++) {
          if (
            this.username.value == users[i].username &&
            this.psw.value == users[i].password
          )
            userFound = true;
        }
        if (userFound == false) alert('Wrong username or password');
      });
  }

  section.innerHTML = `
  <h2>Login</h2>
    <p>Please fill in this form to log in to your account.</p>
  <hr>`;

  form.name = 'LogForm';
  form.id = 'LogForm';
  form.method = 'post';

  form.innerHTML = `
  <label for="username"><b>Username: </b></label>
  <input type="text" placeholder="Enter Username" name="username" id="username" required>
  <br>

  <label for="psw"><b>Password: </b></label>
  <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
  <br>

  <button type="submit" class="loginbtn">Login</button>
  `;

  form.addEventListener('submit', message);

  section.append(form);

  return section;
}
