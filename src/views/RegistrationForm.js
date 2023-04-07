export function RegistrationForm() {
  const section = document.createElement('section');
  const form = document.createElement('form');

  function message(event) {
    event.preventDefault();

    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        let validationPass = true;

        validationPass = validateUsername(users);

        if (validationPass == true) {
          validationPass = validatePassword();
        }
        if (validationPass == true) {
          registerUser(users);
        }
      });
  }

  function validateUsername(users) {
    for (let i = 0; i < users.length; i++) {
      if (this.username.value == users[i].username) {
        alert(`Nazwa użytkownika ${this.username.value} jest już używana.
        Proszę wprowadzić inną nazwę użytkownika`);
        return false;
      }
    }
    return true;
  }

  function validatePassword() {
    if (this.psw.value !== this.pswRepeat.value) {
      alert('Wprowadzone hasła różnią się.');
      return false;
    }
    return true;
  }

  function registerUser(users) {
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
    alert(`Użytkownik ${this.username.value} został zarejestrowany`);
  }

  section.innerHTML = `
    <h2>Rejestracja</h2>
    <p>By utworzyć konto należy wypełnić poniższy formularz.</p>
    <hr>
    `;

  form.name = 'RegForm';
  form.id = 'RegForm';
  form.method = 'post';

  form.innerHTML = `
    <label for="username"><b>Nazwa użytkownika: </b></label>
    <input type="text" placeholder="Nazwa użytkownika" name="username" id="username" required>
    <br>

    <label for="psw"><b>Hasło: </b></label>
    <input type="password" placeholder="Hasło" name="psw" id="psw" required>
    <br>

    <label for="psw-repeat"><b>Powtórz hasło: </b></label>
    <input type="password" placeholder="Powtórz hasło" name="pswRepeat" id="pswRepeat" required>
    <hr>

    <button type="submit" class="btn">Zarejestruj</button>
    `;

  form.addEventListener('submit', message);
  section.append(form);

  return section;
}
