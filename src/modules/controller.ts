import { WebSocket } from 'ws';
import { up, down, left, right, position } from './mouseControls.js';
export const controller = (ws: WebSocket, data: string) => {
  const param = data.split(' ');
  switch (param[0]) {
    case 'mouse_up':
      up(+param[1], ws);
      break;
    case 'mouse_down':
      down(+param[1], ws);
      break;
    case 'mouse_left':
      left(+param[1], ws);
      break;
    case 'mouse_right':
      right(+param[1], ws);
      break;
    case 'mouse_position':
      position(ws);
      break;
    default:
      console.log('incorrect param');
  }
};
