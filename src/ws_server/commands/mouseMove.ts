import robot from 'robotjs';

export const mouseMove = (x: number, y: number): void => {
  const mouse = robot.getMousePos();
  robot.moveMouse(mouse.x + x, mouse.y + y);
};