import { cartManager } from '../cart/cart-manager';
import { NavButton } from '../common/NavButton';

export function Cart() {
  const section = document.createElement('section');

  section.innerHTML = `
    <h2>Koszyk 🛒</h2>
    <p>Przeglądaj zawartość koszyka:</p>
    <table class="table"></table>
    `;

  const tableHead = document.createElement('tr');
  tableHead.innerHTML = `
    <th>Nazwa</th>
    <th>Ilość</th>
    <th>Cena</th>
    <th></th>
    `;

  const tableRows = cartManager.getAllItems().map((item) => {
    const tr = document.createElement('tr');

    const removeItem = NavButton(
      'Usuń 🗑️',
      () => {
        cartManager.removeItem(item);
        return Cart();
      },
      ['btn']
    );

    tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price.toFixed(2)} PLN</td>
        <td></td>`;

    tr.lastElementChild.append(removeItem);

    return tr;
  });

  const tableFooter = document.createElement('tr');

  tableFooter.innerHTML = `
  <td></td>
  <td></td>
  <td><strong>Total: ${cartManager.getTotalPrice()} PLN</strong></td>`;

  section.querySelector('table').append(tableHead, ...tableRows, tableFooter);

  return section;
}
