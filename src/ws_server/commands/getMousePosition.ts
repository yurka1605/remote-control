import robot from 'robotjs';
import { CommandsEnum } from "../models";

export const getMousePosition = () => {
  const { x, y } = robot.getMousePos();
  return `${x},${y}`;
};