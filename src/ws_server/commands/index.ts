import { drawCircle } from './drawCircle';
import { mouseMove } from './mouseMove';
import { drawRectangle } from './drawRectangle';
import { printScreen } from './printScreen';
import { Commands, CommandsEnum } from '../models';
import { getMousePosition } from './getMousePosition';

export const commands: Commands = {
  [CommandsEnum.MouseLeft]: (offset: string) => mouseMove(-offset, 0),
  [CommandsEnum.MouseRight]: (offset: string) => mouseMove(+offset, 0),
  [CommandsEnum.MouseUp]: (offset: string) => mouseMove(0, -offset),
  [CommandsEnum.MouseDown]: (offset: string) => mouseMove(0, +offset),
  [CommandsEnum.MousePosition]: getMousePosition,
  [CommandsEnum.DrawCircle]: (radius: string) => drawCircle(+radius),
  [CommandsEnum.DrawRectangle]: (width: string, height: string) => drawRectangle(+width, +height),
  [CommandsEnum.DrawSquare]: (size: string) => drawRectangle(+size, +size),
  [CommandsEnum.PrntScrn]: printScreen,
}
