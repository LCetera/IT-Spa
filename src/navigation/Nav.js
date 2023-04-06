import { NavButton } from '../common/NavButton';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { TreatmentList } from '../views/TreatmentList';
import { Cart } from '../views/Cart';
import { RegistrationForm } from '../views/RegistrationForm';
import { LoginForm } from '../views/LoginForm';

const navItems = [
  { name: 'Home', component: Home },
  { name: 'Pokoje', component: RoomList },
  { name: 'Zabiegi', component: TreatmentList },
  { name: 'Koszyk 🛒', component: Cart },
  { name: 'Rejestracja', component: RegistrationForm },
  { name: 'Logowanie', component: LoginForm },
];

export function Nav() {
  const nav = document.createElement('nav');

  const navButtons = navItems.map((navItem) => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });

  nav.append(...navButtons);

  return nav;
}
