const express = require('express')
const app = express()
const server = require('http').createServer(app);
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
  console.log('A new client Connected!')
  ws.send('Welcome new Client');
  ws.on('message', function message(message) {
    console.log('received: %s', message);
    ws.send('Got ur msg its' + message)
  });


});

app.get('/', (req, res) => res.send('Hello World!'))

server.listen(3000, () => console.log(`Lisening on port :3000`))