import 'dotenv/config';
// import Jimp from 'jimp';
import { httpServer } from './http_server/index.js';
// import robot from 'robotjs';
// import { WebSocketServer } from 'ws';

const HTTP_PORT: number = +process.env.HTTP_PORT || 3000;
// const WEBSOCKET_PORT: number = +process.env.WEBSOCKET_PORT || 3100;

httpServer.listen(HTTP_PORT, () => {
  console.log(`Start static http server on the ${HTTP_PORT} port!`);
});
