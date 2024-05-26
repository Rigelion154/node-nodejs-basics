import { createWriteStream } from "fs";
import { getPath } from "../utils/getPath.js";
import { SRC_FOLDER, FILE_TO_WRITE_NAME } from "../constants/index.js";

const READ_FILE_PATH = getPath(import.meta.url, SRC_FOLDER, FILE_TO_WRITE_NAME);

const write = async () => {
  const writeStream = createWriteStream(READ_FILE_PATH);
  process.stdin.on("data", (data) => writeStream.write(data));
  console.log("Type text:");
};

await write();
