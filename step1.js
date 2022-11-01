"use strict";

const fsP = require('fs/promises');

/** cat: read file with path and print contents of file */

async function cat(path) {
  try {
    const content = await fsP.readFile(path, "utf8");
    console.log(content);
  }
  catch(error) {
    console.error(`
      Error reading ${path}:
        Error: ENOENT: no such file or directory, open '${path}'
    `);
    process.exit(1);
  }
}

cat("./one.txt");
cat("blah");
