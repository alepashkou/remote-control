import robot from 'robotjs';
import Jimp from 'jimp';
import internal from 'stream';

export const printScreen = (ws: internal.Duplex) => {
  const currentPosition = robot.getMousePos();
  const img = robot.screen.capture(
    currentPosition.x - 100,
    currentPosition.y - 100,
    200,
    200
  ).image;
  new Jimp({ data: img, width: 200, height: 200 }, (err: Error, image) => {
    image.getBuffer(Jimp.MIME_PNG, (err: Error, buffer: string) => {
      const buffedImage = Buffer.from(buffer, 'base64');
      ws.write('prnt_scrn ' + buffedImage.toString('base64'));
    });
  });
};
