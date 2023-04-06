export function RegistrationForm() {
  const section = document.createElement('section');
  const form = document.createElement('form');

  function message(event) {
    event.preventDefault();

    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        let validationFailed = false;
        for (let i = 0; i < users.length; i++) {
          if (this.username.value == users[i].username) {
            alert('This username already exist, please use another one');
            validationFailed = true;
          }
        }
        if (validationFailed == false) {
          if (this.psw.value !== this.pswRepeat.value) {
            alert('Typed passwords are different');
            validationFailed = true;
          }
        }
        if (validationFailed == false) {
          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: users.length + 1,
              username: new String(this.username.value),
              password: new String(this.psw.value),
            }),
          });
        }
      });
  }

  section.innerHTML = `
    <h2>Register</h2>
    <p>Please fill in this form to create an account.</p>
    <hr>
    `;

  form.name = 'RegForm';
  form.id = 'RegForm';
  form.method = 'post';

  form.innerHTML = `
    <label for="username"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="username" id="username" required>
    <br>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
    <br>

    <label for="psw-repeat"><b>Repeat Password: </b></label>
    <input type="password" placeholder="Repeat Password" name="pswRepeat" id="pswRepeat" required>
    <br>

    <button type="submit" class="btn">Register</button>
    `;

  form.addEventListener('submit', message);
  section.append(form);

  return section;
}
