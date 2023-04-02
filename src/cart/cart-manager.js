const key = 'it-spa-cart';

export const cartManager = {
  addItem(item) {
    const cart = localStorage.getItem(key);
    let content;

    // jeśli koszyk jest pusty dodaj nowy wpis (klucz: wartość)
    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1, type: 'item' },
      };
    } else {
      content = JSON.parse(cart);

      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1, type: 'item' },
        };

        // dokłada nowy wpis (klucz: wartosc) do obiektu 'content'
        Object.assign(content, newItem);
      }
    }

    const strContent = JSON.stringify(content);
    localStorage.setItem(key, strContent);
  },

  addRoom(item, quantity) {
    const cart = localStorage.getItem(key);
    let content;

    // jeśli koszyk jest pusty dodaj nowy wpis (klucz: wartość)
    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: quantity, type: 'room' },
      };
    } else {
      content = JSON.parse(cart);

      if (item.name in content) {
        content[item.name].quantity += value;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: quantity, type: 'room' },
        };

        // dokłada nowy wpis (klucz: wartosc) do obiektu 'content'
        Object.assign(content, newItem);
      }
    }

    const strContent = JSON.stringify(content);
    localStorage.setItem(key, strContent);
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (
          content[item.name].type != 'room' &&
          content[item.name].quantity > 1
        ) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }

      localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      const content = JSON.parse(cart);

      // entry to jest [KLUCZ, WARTOSC]
      return Object.entries(content).map((entry) => {
        const [itemName, itemDetails] = entry;

        return {
          name: itemName,
          price: itemDetails.price,
          quantity: itemDetails.quantity,
        };
      });
    }
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return '0.00';
    } else {
      const content = JSON.parse(cart);

      return Object.values(content)
        .reduce((totalPrice, item) => {
          return totalPrice + item.price * item.quantity;
        }, 0)
        .toFixed(2);
    }
  },
};
