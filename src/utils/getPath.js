import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const getPath = (url, folder = "", filename = "") => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const pathToFIle = join(__dirname, folder, filename);

  return pathToFIle;
};
