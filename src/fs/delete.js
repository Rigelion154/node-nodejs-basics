import {
  ERROR_MESSAGE,
  REMOVE_FILE_NAME,
  SRC_FOLDER,
} from "../constants/fs_constants/index.js";
import { unlink } from "fs/promises";
import { getPath } from "../utils/getPath.js";

const REMOVE_FILE_NAME_PATH = getPath(
  import.meta.url,
  SRC_FOLDER,
  REMOVE_FILE_NAME
);

const remove = async () => {
  try {
    await unlink(REMOVE_FILE_NAME_PATH);
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
