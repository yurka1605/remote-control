
import 'dotenv/config';
import { Duplex, pipeline } from 'stream';
import WebSocket, { WebSocketServer } from 'ws';
import { transformStream } from './handler';

export const runWsServer = (host: string, port: number) => {
  console.log(`Start websocket server on the ${port} port!`);
  const wsServer = new WebSocketServer({ host, port })

  wsServer.on('connection', (ws: WebSocket.WebSocket) => {
    console.log('New connection started!');
    const dispatcher = new Duplex({
      read: () => { },
      write: (chunk, encoding, next) => {
        console.log(chunk);
        if (Buffer.isBuffer(chunk)) {
          chunk = chunk.toString();
        }
        ws.send(chunk);
        next();
      },
    });

    pipeline(
      dispatcher,
      transformStream,
      dispatcher,
      err => {
        if (err) {
          console.log('connection err:', err);
          ws.send(err.message);
        }
      },
    )

    ws.on('message', (data: WebSocket.RawData) => dispatcher.push(data));
  });
};
