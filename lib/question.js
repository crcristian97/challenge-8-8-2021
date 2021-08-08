// Command line interface to read terminal input.
// Reference: https://nodejs.org/api/readline.html
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const util = require("util");
const question = util.promisify(rl.question).bind(rl);

module.exports = question;