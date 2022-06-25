
import 'dotenv/config';
import { pipeline } from 'stream';
import WebSocket, { createWebSocketStream, WebSocketServer } from 'ws';
import { createHandleStream } from './handler';

export const runWsServer = (host: string, port: number) => {
  console.log(`Start websocket server on the ${port} port!`);
  const websocketServer = new WebSocketServer({ host, port });

  websocketServer
    .on('connection', (ws: WebSocket.WebSocket) => {
      console.log('New connection started!');
      const websocketStream = createWebSocketStream(ws, {
        decodeStrings: false,
        encoding: 'utf8',
      }).on(
        'close', () => console.log('Connection was closed')
      );

      pipeline(
        websocketStream,
        createHandleStream(),
        websocketStream,
        err => {
          if (err) {
            console.log('connection err:', err);
          }
        },
      );
    })
    .on('error', console.log)
    .on('close', () => console.log('Connection was closed!'));
};
