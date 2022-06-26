import robot from 'robotjs';
import internal from 'stream';

export const up = (offset: number, ws: internal.Duplex): void => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x, currentPosition.y - offset);
    ws.write(`mouse_up`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const down = (offset: number, ws: internal.Duplex): void => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x, currentPosition.y + offset);
    ws.write(`mouse_down`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const left = (offset: number, ws: internal.Duplex): void => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x - offset, currentPosition.y);
    ws.write(`mouse_left`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const right = (offset: number, ws: internal.Duplex): void => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x + offset, currentPosition.y);
    ws.write(`mouse_right`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const position = (ws: internal.Duplex): void => {
  try {
    const currentPosition = robot.getMousePos();
    ws.write(`mouse_position {${currentPosition.x}},{${currentPosition.y}}`);
  } catch (e) {
    console.log('incorrect param');
  }
};
