import { getPath } from "../utils/getPath.js";
import { mkdir, copyFile, readdir } from "fs/promises";
import {
  ERROR_MESSAGE,
  SRC_FOLDER,
  COPY_DESTINATION_FOLDER,
} from "../constants/fs_constants/index.js";

const SRC_FOLDER_PATH = getPath(import.meta.url, SRC_FOLDER);
const DESTINATION_FOLDER_PATH = getPath(
  import.meta.url,
  COPY_DESTINATION_FOLDER
);

const copy = async () => {
  try {
    const srcFiles = await readdir(SRC_FOLDER_PATH);
    await mkdir(DESTINATION_FOLDER_PATH);
    await Promise.all(
      srcFiles.map((file) =>
        copyFile(
          `${SRC_FOLDER_PATH}/${file}`,
          `${DESTINATION_FOLDER_PATH}/${file}`
        )
      )
    );
  } catch (err) {
    if (err) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await copy();
