export enum CommandsEnum {
  MouseLeft = 'mouse_left',
  MouseRight = 'mouse_right',
  MouseUp = 'mouse_up',
  MouseDown = 'mouse_down',
  MousePosition = 'mouse_position',
  DrawCircle = 'draw_circle',
  DrawRectangle = 'draw_rectangle',
  DrawSquare = 'draw_square',
  PrntScrn = 'prnt_scrn',
}

export type Commands = {
  [key in CommandsEnum]: Function;
};