const express = require('express');
const app = express();

const PORT = 8081;

// app.get('/home', (req, res) => {
//     res.sendStatus(200);
// });
app.get('/home', (req, res) => {
    res.send('get request');
});

// app.post('/home', (req, res) => {
//     res.send('post request');
// });

// app.delete('/home', (req, res) => {
//     res.send('delete request');
// });

//For all
app.use(express.json);
app.use(express.urlencoded({extended: true}));
//public directory
app.use(express.static('./public'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.listen(PORT, (err) => {
    if (err) {
        console.log('Error at aserver launch:', err);
    }
    console.log(`Server works at port ${PORT}!`);
});








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

