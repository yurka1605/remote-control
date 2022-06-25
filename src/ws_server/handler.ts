import { commands } from './commands';
import { CommandsEnum } from './models';
import { Transform } from 'stream';

export const createHandleStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: 'utf8',
    async transform(chunk: string, _, callback) {
      console.log(`\x1b[34mcommand: ${chunk} \x1b[0m`);
      const res = await wsMessageHandler(chunk);
      callback(null, res + ' \0');
    }
  });
};

export async function wsMessageHandler(data: string): Promise<string> {
  let [cmd, ...params] = data.split(' ');
  const action = commands[cmd as CommandsEnum];
  if (action) {
    const res = await action(...params);
    return `${cmd} ${res || ''}`;
  } else {
    return 'Command not found on server!';
  }
};