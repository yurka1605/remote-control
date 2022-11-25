import { runHttpServer } from './http_server';
import { runWsServer } from './ws_server';

const { HTTP_PORT, WS_PORT, HOST } = process.env;

runHttpServer(Number(<string>HTTP_PORT));
runWsServer(<string>HOST, Number(<string>WS_PORT));