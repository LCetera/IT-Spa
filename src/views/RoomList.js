import { RoomDetails } from './RoomDetails';
import { RoomReservation } from './RoomReservation';
import { NavButton } from '../common/NavButton';
import { cartManager } from '../cart/cart-manager';

export function RoomList() {
  const section = document.createElement('section');
  const ul = document.createElement('ul');

  section.innerHTML = `
      <h2>Lista dostępnych pokoi</h2>
      <p>Sprawdź ofertę pokoi.</p>
      <p class="loading">Ładuję listę pokoi...</p>
    `;

  // pobieramy liste pokoi z serwera
  fetch('http://localhost:3000/rooms')
    .then((response) => response.json())
    .then((rooms) => {
      const lis = rooms.map((room) => {
        const li = document.createElement('li');

        li.innerHTML = `
              <h4>${room.name}</h4>
              <p>
                <strong>${room.price.toFixed(2)} PLN</strong>
              </p>
              <footer></footer>
            `;

        const reserveButton = NavButton(
          'Reserve',
          () => RoomReservation(room),
          ['btn']
        );

        const detailsButton = NavButton(
          'Więcej...',
          () => RoomDetails(room.id),
          ['btn']
        );

        li.querySelector('footer').append(reserveButton, detailsButton);

        return li;
      });

      ul.append(...lis);

      section.querySelector('.loading').remove();

      section.append(ul);
    });

  return section;
}
