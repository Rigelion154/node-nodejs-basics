import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { getPath } from "../utils/getPath.js";
import { FILE_TO_HASH_NAME, SRC_FOLDER } from "../constants/index.js";

const FILE_TO_HASH_NAME_PATH = getPath(
  import.meta.url,
  SRC_FOLDER,
  FILE_TO_HASH_NAME
);

const calculateHash = async () => {
  try {
    const fileData = await readFile(FILE_TO_HASH_NAME_PATH);
    const dataHash = createHash("sha256").update(fileData).digest("hex");
    console.log(dataHash);
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MESSAGE);
  }
};

await calculateHash();
