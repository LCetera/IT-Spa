import { NavButton } from '../common/NavButton';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { TreatmentList } from '../views/TreatmentList';
import { Cart } from '../views/Cart';

const navItems = [
  { name: 'Home', component: Home },
  { name: 'Rooms', component: RoomList },
  { name: 'Treatments', component: TreatmentList },
  { name: 'Cart 🛒', component: Cart },
];

export function Nav() {
  const nav = document.createElement('nav');

  const navButtons = navItems.map((navItem) => {
    return NavButton(navItem.name, navItem.component, ['btn']);
    // const button = document.createElement('button');
    // button.setAttribute('type', 'button');
    // button.classList.add('btn', 'btn-primary');
    // button.innerText = navItem.name;

    // button.addEventListener('click', () => {
    //   const navigationEvent = new CustomEvent('navigate', {
    //     detail: navItem.component,
    //   });

    //   document.body.dispatchEvent(navigationEvent);
    // });

    // return button;
  });

  nav.append(...navButtons);

  return nav;
}
