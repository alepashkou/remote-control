import robot from 'robotjs';
import Jimp from 'jimp';
import internal from 'stream';
import { position } from '../types';
export const printScreen = (ws: internal.Duplex): void => {
  const currentPosition: position = robot.getMousePos();
  const img: string = robot.screen.capture(
    currentPosition.x - 100,
    currentPosition.y - 100,
    200,
    200
  ).image;
  new Jimp({ data: img, width: 200, height: 200 }, (err: Error, image) => {
    image.getBuffer(Jimp.MIME_PNG, (err: Error, buffer: string) => {
      const buffedImage: Buffer = Buffer.from(buffer, 'base64');
      ws.write('prnt_scrn ' + buffedImage.toString('base64'));
    });
  });
};
