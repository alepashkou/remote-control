import robot from 'robotjs';
import { WebSocket } from 'ws';
export const up = (offset: number, ws: WebSocket) => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x, currentPosition.y - offset);
    ws.send(`mouse_up`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const down = (offset: number, ws: WebSocket) => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x, currentPosition.y + offset);
    ws.send(`mouse_down`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const left = (offset: number, ws: WebSocket) => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x - offset, currentPosition.y);
    ws.send(`mouse_left`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const right = (offset: number, ws: WebSocket) => {
  try {
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x + offset, currentPosition.y);
    ws.send(`mouse_right`);
  } catch (e) {
    console.log('incorrect param');
  }
};
export const position = (ws: WebSocket) => {
  try {
    const currentPosition = robot.getMousePos();
    ws.send(`mouse_position {${currentPosition.x}},{${currentPosition.y}}`);
  } catch (e) {
    console.log('incorrect param');
  }
};
