//----------------------------------------------
// async function readFile(contactsPath) {
//     const data = await fs.readFile(contactsPath, "utf8");
//     return data;
// }
 
// async function writeFile(contactsPath, data) {
//     const res = await fs.writeFile(contactsPath, data, "utf8");
//     return res;
// }

// readFile(contactsPath)
//     .then((data) => writeFile("./db/newcontacts.js", data))
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));




//--------------------------------

// const express = require('express');
// const app = express();

// const PORT = 8081;

// app.get('/home', (req, res) => {
//     res.sendStatus(200);
// });
// app.get('/home', (req, res) => {
//     res.send('get request');
// });

// app.post('/home', (req, res) => {
//     res.send('post request');
// });

// app.delete('/home', (req, res) => {
//     res.send('delete request');
// });

//For all
// app.use(express.json);
// app.use(express.urlencoded({ extended: true }));

//public directory
// app.use(express.static('./publicnpm'));

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.originalUrl}`);
//     next();
// });

// app.listen(PORT, (err) => {
//     if (err) {
//         console.log('Error at aserver launch:', err);
//     }
//     console.log(`Server works at port ${PORT}!`);
// });


//-------------------------------------
// const path = require('path');

// const http = require('http');
// const fs = require('fs').promises;

// const PORT = 8081;

// const requestHandler = async (request, response) => {
//     const contactsPath = await fs.readFile('./db/contacts.json', 'utf8');
        
//     response.writeHead(200, {'Content-Type': 'text / json'});
//         response.end(contactsPath);
// }

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//     if (err) {
//         console.log('Error at aserver launch:', err);
//     }
//     console.log(`Server works at port ${PORT}!`);
// });


//--------------------------------
// const path = require('path');

// const fs = require('fs').promises;

// (async () => {
//     try {
//         const contactsPath = await fs.readFile(path.resolve('./db/contacts.json'), 'utf8')
//         console.log(contactsPath);

//         const newContent = `${contactsPath} newContact`
//         await fs.writeFile('./index.js', newContent, 'utf8');

//     } catch (error) {
//         console.error(err)
//     }
// })();


//-------------------------------------------

// const contactsOperations = require("./contacts.js");

// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       const contacts = await contactsOperations.listContacts();
//       console.table(contacts);
//       break;

//     case "get":
//       const contact = await contactsOperations.getContactById(id);
//       console.table(contact);
//       break;

//     case "add":
//       const addedContact = await contactsOperations.addContact(
//         name,
//         email,
//         phone
//       );
//       console.table(addedContact);
//       break;

//     case "remove":
//       const removeContact = await contactsOperations.removeContact(id);
//       console.table(removeContact);
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);









// const path = require('path');

// const http = require('http');
// const fs = require('fs').promises;

// const PORT = 8081;

// const requestHandler = async (request, response) => {
//     const contactsPath = await fs.readFile('./db/contacts.json', 'utf8');
        
//     response.writeHead(200, {'Content-Type': 'text / json'});
//         response.end(contactsPath);
// }

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//     if (err) {
//         console.log('Error at aserver launch:', err);
//     }
//     console.log(`Server works at port ${PORT}!`);
// });


