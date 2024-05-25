import { getPath } from "../utils/getPath.js";
import { writeFile } from "fs/promises";

const src = getPath(import.meta.url, "files", "fresh.txt");
const data = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
  try {
    await writeFile(src, data, { flag: "wx" });
  } catch (err) {
    if (err) {
      throw new Error(errorMessage);
    }
  }
};

await create();
