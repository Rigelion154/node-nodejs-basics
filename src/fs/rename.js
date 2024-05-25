import { rename as renameFs } from "fs/promises";
import { getPath } from "../utils/getPath.js";
import {
  CORRECT_FILE_NAME,
  ERROR_MESSAGE,
  SRC_FOLDER,
  WRONG_FILE_NAME,
} from "../constants/index.js";

const WRONG_FILE_NAME_PATH = getPath(
  import.meta.url,
  SRC_FOLDER,
  WRONG_FILE_NAME
);
const CORRECT_FILE_NAME_PATH = getPath(
  import.meta.url,
  SRC_FOLDER,
  CORRECT_FILE_NAME
);

const rename = async () => {
  try {
    await renameFs(WRONG_FILE_NAME_PATH, CORRECT_FILE_NAME_PATH);
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();
