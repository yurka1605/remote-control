import robot from 'robotjs';

export const drawRectangle = (width: number, height: number): void => {
  const { x, y } = robot.getMousePos();
  const offsetX = x > width ? x - width : x + width;
  const offsetY = y > height ? y - height : y + height;
  robot.mouseToggle('down');
  robot.moveMouseSmooth(offsetX, y);
  robot.moveMouseSmooth(offsetX, offsetY);
  robot.moveMouseSmooth(x, offsetY);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
};