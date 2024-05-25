import { readdir } from "fs/promises";
import { ERROR_MESSAGE, SRC_FOLDER } from "../constants/index.js";
import { getPath } from "../utils/getPath.js";

const FILES_PATH = getPath(import.meta.url, SRC_FOLDER);

const list = async () => {
  try {
    const files = await readdir(FILES_PATH);
    console.log(files);
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
