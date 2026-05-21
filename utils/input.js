import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

export function close() {
  rl.close();
}
