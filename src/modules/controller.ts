import { circle, square, rectangle } from './draw.js';
import { up, down, left, right, position } from './mouseControls.js';
import { printScreen } from './printScreen.js';
import internal from 'stream';

export const controller = (ws: internal.Duplex, data: string) => {
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
    case 'draw_circle':
      circle(+param[1], ws);
      break;
    case 'draw_square':
      square(+param[1], ws);
      break;
    case 'draw_rectangle':
      rectangle(+param[1], +param[2], ws);
      break;
    case 'prnt_scrn':
      printScreen(ws);
      break;
    default:
      console.log('incorrect param');
  }
};
