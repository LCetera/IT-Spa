import { cartManager } from '../cart/cart-manager';

export function RoomReservation(room) {
  const section = document.createElement('section');
  const form = document.createElement('form');

  function getValues(event) {
    event.preventDefault();

    let formData = {
      start_date: this.start_date,
      end_date: this.end_date,
    };
    const difference =
      (new Date(formData.end_date.value) -
        new Date(formData.start_date.value)) /
      (1000 * 3600 * 24);

    cartManager.addRoom(room, difference);
  }

  section.innerHTML = `
  <h2>Rezerwacja pokoju</h2>
  <p>Proszę uzupełnić poniższy formularz rezerwacji pokoju ${room.name} </p>
  <hr>`;

  form.name = 'Reservation_form';
  form.id = 'Reservation_form';
  form.method = 'post';

  form.innerHTML = `
  <label for="start_date">Podaj datę przyjazdu: </label>
  <input type="date" name="start_date" id="start_date" required>
  <br>

  <label for="end_date">Podaj datę wyjazdu: </label>
  <input type="date" name="end_date" id="end_date" required>
  <br>

  <button type="submit" name="submit" class="btn">Dodaj do koszyka</button>
  `;

  form.addEventListener('submit', getValues);

  section.append(form);

  return section;
}
