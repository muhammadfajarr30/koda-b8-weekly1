import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function askNumeral(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      const value = Number(answer);
      if (isNaN(value) || value < 1) {
        reject(new Error("Invalid Input"));
      } else {
        resolve(value);
      }
    });
  });
}
function close() {
  rl.close();
}

export { ask, close, askNumeral };
