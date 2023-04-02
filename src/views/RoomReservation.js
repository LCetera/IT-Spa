import { cartManager } from '../cart/cart-manager';

export function RoomReservation(room) {
  const section = document.createElement('section');

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

  const form = document.createElement('form');

  form.name = 'Reservation_form';
  form.method = 'post';

  my_tb = document.createElement('label');
  my_tb.innerHTML = 'Podaj datę przyjazdu: ';
  form.appendChild(my_tb);

  my_tb = document.createElement('input');
  my_tb.type = 'date';
  my_tb.name = 'start_date';
  form.appendChild(my_tb);

  my_tb = document.createElement('br');
  form.appendChild(my_tb);

  my_tb = document.createElement('label');
  my_tb.innerHTML = 'Podaj datę wyjazdu: ';
  form.appendChild(my_tb);

  my_tb = document.createElement('input');
  my_tb.type = 'date';
  my_tb.name = 'end_date';
  form.appendChild(my_tb);

  my_tb = document.createElement('br');
  form.appendChild(my_tb);

  my_tb = document.createElement('button');
  my_tb.type = 'submit';
  my_tb.name = 'submit';
  my_tb.innerText = 'Add to cart';
  my_tb.classList.add('btn');

  form.appendChild(my_tb);
  form.addEventListener('submit', getValues);

  section.append(form);

  return section;
}
