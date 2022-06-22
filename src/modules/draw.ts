import robot from 'robotjs';
import { WebSocket } from 'ws';

export const circle = (offset: number, ws: WebSocket) => {
  try {
    const points = 100;
    const currentPosition = robot.getMousePos();
    const center = {
      x: currentPosition.x,
      y: currentPosition.y,
    };
    const output_points = [];
    for (let i = 0; i <= points; i++) {
      const pointX = center.x + offset * Math.cos((2 * Math.PI * i) / points);
      const pointY = center.y + offset * Math.sin((2 * Math.PI * i) / points);
      output_points.push({ x: pointX, y: pointY });
    }
    output_points.forEach((el, index) => {
      robot.moveMouse(el.x, el.y);
      if (index === 0) robot.mouseToggle('down');
      if (index === output_points.length - 1) robot.mouseToggle('up');
    });
    ws.send('draw_circle');
  } catch (e) {
    console.log('incorrect param');
  }
};
export const square = (offset: number, ws: WebSocket) => {
  try {
    const currentPosition = robot.getMousePos();
    const firstPoint = {
      x: currentPosition.x - offset / 2,
      y: currentPosition.y - offset / 2,
    };
    const secondPoint = {
      x: firstPoint.x,
      y: firstPoint.y + offset,
    };
    const thirdPoint = {
      x: secondPoint.x + offset,
      y: secondPoint.y,
    };
    const fourPoint = {
      x: thirdPoint.x,
      y: thirdPoint.y - offset,
    };
    robot.setMouseDelay(50);
    robot.moveMouse(firstPoint.x, firstPoint.y);
    robot.mouseToggle('down');
    robot.moveMouse(secondPoint.x, secondPoint.y);
    robot.moveMouse(thirdPoint.x, thirdPoint.y);
    robot.moveMouse(fourPoint.x, fourPoint.y);
    robot.moveMouse(firstPoint.x, firstPoint.y);
    robot.mouseToggle('up');
    ws.send('draw_square');
  } catch (e) {
    console.log('incorrect param');
  }
};

export const rectangle = (width: number, height: number, ws: WebSocket) => {
  try {
    const currentPosition = robot.getMousePos();
    const firstPoint = {
      x: currentPosition.x - width / 2,
      y: currentPosition.y - height / 2,
    };
    const secondPoint = {
      x: firstPoint.x,
      y: firstPoint.y + height,
    };
    const thirdPoint = {
      x: secondPoint.x + width,
      y: secondPoint.y,
    };
    const fourPoint = {
      x: thirdPoint.x,
      y: thirdPoint.y - height,
    };
    robot.setMouseDelay(50);
    robot.moveMouse(firstPoint.x, firstPoint.y);
    robot.mouseToggle('down');
    robot.moveMouse(secondPoint.x, secondPoint.y);
    robot.moveMouse(thirdPoint.x, thirdPoint.y);
    robot.moveMouse(fourPoint.x, fourPoint.y);
    robot.moveMouse(firstPoint.x, firstPoint.y);
    robot.mouseToggle('up');
    ws.send('draw_square');
  } catch (e) {
    console.log('incorrect param');
  }
};
