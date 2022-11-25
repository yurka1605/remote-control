import Jimp from 'jimp';
import robot from 'robotjs';

export const printScreen = async (width = 200, height = 200): Promise<string> => {
  const { x, y } = robot.getMousePos();
  const image = revertOriginalColors(robot.screen.capture(x - width / 2, y - height / 2, width, height));
  const base64ImageData = await image.getBase64Async(Jimp.MIME_PNG);
  return base64ImageData.replace(/^data:image\/\w+;base64,/, '');
}

function revertOriginalColors(robotScreen: robot.Bitmap): Jimp {
  const image = new Jimp(robotScreen.width, robotScreen.height);
  let pos = 0;
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x: number, y: number, idx: number) => {
    image.bitmap.data[idx + 2] = robotScreen.image.readUInt8(pos++);
    image.bitmap.data[idx + 1] = robotScreen.image.readUInt8(pos++);
    image.bitmap.data[idx + 0] = robotScreen.image.readUInt8(pos++);
    image.bitmap.data[idx + 3] = robotScreen.image.readUInt8(pos++);
  });
  return image;
}