import("dotenv/config");
import fs from "fs";
import path from "path";
import { createServer } from "http";

export const runHttpServer = (port: number) => {
  console.log(`Start static http server on the ${port} port!`);
  createServer(function (req, res) {
    const __dirname = path.resolve(path.dirname(""));
    const file_path =
      __dirname + (req.url === "/" ? "/front/index.html" : "/front" + req.url);
    fs.readFile(file_path, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }).listen(port);
};
