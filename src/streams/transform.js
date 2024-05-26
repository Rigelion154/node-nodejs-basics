import { getReverseString } from "../utils/getReverseString.js";
import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunc, _, callback) {
      callback(null, getReverseString(chunc.toString()));
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
