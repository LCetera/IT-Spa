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
          ) {
            userFound = true;
            alert(`Użytkownik ${users[i].username} został zalogowany`);
          }
        }
        if (userFound == false) alert('Błędna nazwa użytkownika lub hasło');
      });
  }

  section.innerHTML = `
  <h2>Logowanie</h2>
    <p>Aby się zalogować, wypełnij poniższy formularz.</p>
  <hr>`;

  form.name = 'LogForm';
  form.id = 'LogForm';
  form.method = 'post';

  form.innerHTML = `
  <label for="username"><b>Nazwa użytkownika: </b></label>
  <input type="text" placeholder="Nazwa użytkownika" name="username" id="username" required>
  <br>

  <label for="psw"><b>Hasło: </b></label>
  <input type="password" placeholder="Hasło" name="psw" id="psw" required>
  <hr>

  <button type="submit" class="btn">Login</button>
  `;

  form.addEventListener('submit', message);

  section.append(form);

  return section;
}
