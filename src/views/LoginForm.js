export function LoginForm() {
  const section = document.createElement('section');

  section.innerHTML = `
  <form name="LogForm" method="post">
  <h2>Login</h2>
    <p>Please fill in this form to log in to your account.</p>
    <hr>
    <label for="username"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="username" id="username" required>
    <br>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
    <br>

    <button type="submit" class="loginbtn">Login</button>
  </form>`;

  return section;
}
