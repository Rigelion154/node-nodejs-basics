import path from "path";
import { fileURLToPath } from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { createRequire } from "module";
import "./files/c.js";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const RANDOM_CONDITION = 0.5;
const RANDOM_NUMBER = Math.random();
const RANDOM_FILE =
  RANDOM_NUMBER > RANDOM_CONDITION
    ? require("./files/a.json")
    : require("./files/b.json");

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

console.log(RANDOM_FILE);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { RANDOM_FILE, myServer };
