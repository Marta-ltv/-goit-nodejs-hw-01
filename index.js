const contacts = require('./contacts.js');

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'read':
            const contacts = await contacts.listContacts();
            console.log(contacts);
            break;
        case 'get':
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;
        case 'add':
            const newContact = await contacts.addContact({name, email, phone});
            console.log(newContact);
            break;
         case 'remove':
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;
        
        default:
            console.log('Unknown action');
    }
 }


invokeAction({ action: 'listContacts' });

