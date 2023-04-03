export function RegistrationForm() {
  const section = document.createElement('section');

  section.innerHTML = `
  <form name="RegForm" method="post">
  <h2>Register</h2>
    <p>Please fill in this form to create an account.</p>
    <hr>
    <label for="username"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="username" id="username" required>
    <br>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
    <br>

    <label for="psw-repeat"><b>Repeat Password: </b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
    <br>

    <button type="submit" class="registerbtn">Register</button>
  </form>`;

  return section;
}
