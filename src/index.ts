import 'dotenv/config';
import { httpServer } from './http_server/index.js';
import { WebSocketServer, createWebSocketStream } from 'ws';
import { WebSocket } from 'ws';
import { controller } from './modules/controller.js';
import internal from 'stream';

//HTTP SERVER
try {
  const HTTP_PORT: number = +process.env.HTTP_PORT || 3000;
  httpServer.listen(HTTP_PORT, () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`);
  });
} catch (e) {
  console.log(`Server http err `, e);
}
//WEBSOCKET SERVER
try {
  const WEBSOCKET_PORT: number = +process.env.WEBSOCKET_PORT || 8080;
  const wss = new WebSocketServer({ port: WEBSOCKET_PORT });
  wss.on('connection', (ws: WebSocket) => {
    const wsStream: internal.Duplex = createWebSocketStream(ws, {
      encoding: 'utf8',
      decodeStrings: false,
    });
    wsStream.on('data', (data) => {
      controller(wsStream, data.toString());
    });
  });
  console.log(`Start webscoket server on the ${WEBSOCKET_PORT} port!`);
} catch (e) {
  console.log(`Server websocket err `, e);
}
