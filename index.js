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


