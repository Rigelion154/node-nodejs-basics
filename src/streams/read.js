import { createReadStream } from "fs";
import { stdout } from "process";
import { getPath } from "../utils/getPath.js";
import { SRC_FOLDER, READ_FILE_NAME } from "../constants/index.js";

const READ_FILE_PATH = getPath(import.meta.url, SRC_FOLDER, READ_FILE_NAME);

const read = async () => {
  const readStream = createReadStream(READ_FILE_PATH);
  readStream.on("data", (data) => stdout.write(data));
};

await read();
