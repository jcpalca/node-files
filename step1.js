"use strict";

const fsP = require('fs/promises');

/** cat: read file with path and print contents of file
 *
 * - Input: filepath
 * - Output: logs to console
 * - on Error: returns error message and exits process
*/
async function cat(path) {
  try {
    const content = await fsP.readFile(path, "utf8");
    console.log(content);
  }
  catch (error) {
    console.error(`
      Error reading ${path}: ${error}`);
    process.exit(1);
  }
}

cat(process.argv[2])


