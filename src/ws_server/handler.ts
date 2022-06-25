import { commands } from './commands';
import { CommandsEnum } from './models';
import { Transform } from 'stream';
import WebSocket from 'ws';

export const transformStream = new Transform({
  decodeStrings: false,
  async transform(chunk: WebSocket.RawData, encoding, callback) {
    const res = await wsMessageHandler(chunk);
    callback(null, res);
  }
});

async function wsMessageHandler(buffer: WebSocket.RawData): Promise<string> {
  const data = buffer.toString();
  console.log('cmd: ', data);
  let [cmd, ...params] = data.split(' ');
  const action = commands[cmd as CommandsEnum];
  if (action) {
    const res = await action(...params);
    return `${cmd} ${res || ''}`;
  } else {
    throw new Error('Command not found on server!');
  }
};