"use strict";

const fsP = require('fs/promises');

/** cat: read file with path and print contents of file
 *
 * - Input: filepath
 * - Output: logs to console
 * - on Error: returns error message and exits process
*/
async function cat(path) {
  let content;

  try {
    content = await fsP.readFile(path, "utf8");
  }
  catch (error) {
    console.error(`
    Error reading ${path}: ${error}`);
    process.exit(1);
  }

  console.log(content);
}

cat(process.argv[2])
