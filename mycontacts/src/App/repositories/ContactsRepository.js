const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Fillipe',
    email: 'fillipe@gmail.com',
    phone: '7070707070',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
