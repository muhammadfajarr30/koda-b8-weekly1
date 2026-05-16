const { createInterface } = require("node:readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

mainMenu();

function mainMenu() {
  console.log("\n=== MIE GACOAN ===");
  console.log("1. Category Menu");

  rl.question("Select Option: ", function (ans) {
    switch (ans) {
      case "1":
        catergoryMenu();
        break;
      default:
        console.log("Invalid Option!");
        mainMenu();
    }
  });
}

function catergoryMenu() {
  console.log("\n=== SELECT CATEGORY ===");
}
