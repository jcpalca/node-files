"use strict";

const fsP = require('fs/promises');
const axios = require('axios');

/** cat: read file with path and print contents of file to console.
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
      Error reading ${path}:
        Error: ENOENT: no such file or directory, open '${path}'
    `);
    process.exit(1);
  }
}


/** webcat: reads contents of URL and prints to contents to the console.
 *
 * - Input: URL
 * - Output: logs to console
 * - on Error: returns error message and exits process
 *
*/

async function webCat(url) {

  try {
    const response = await axios.get(url);
    console.log(response.data);
  }
  catch (error) {
    // console.error(error)
    console.error(`Error fetching ${url}:
    Error: ${error}`);
  }
}

/** Handler function for process arguments.
 * If path is URL, calls webCat()
 * Else if filepath, calls cat()
 */
function main(path) {

  if (path.includes('http')) {
    webCat(path);
  } else {
    cat(path);
  }

}

const path = process.argv[2];
main(path);
