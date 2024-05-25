import { readFile } from "fs/promises";
import {
  ERROR_MESSAGE,
  READ_FILE_NAME,
  SRC_FOLDER,
} from "../constants/fs_constants/index.js";
import { getPath } from "../utils/getPath.js";

const READ_FILE_PATH = getPath(import.meta.url, SRC_FOLDER, READ_FILE_NAME);

const read = async () => {
  try {
    const fileData = await readFile(READ_FILE_PATH, { encoding: "utf-8" });
    console.log(fileData);
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
