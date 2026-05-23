import menu from "./menu.json" with { type: "json" };
import { ask, close } from "./utils/input.js";
import { categoryMenu } from "./features/category.js";
import { showCart } from "./features/cart.js";
import { checkout } from "./features/checkout.js";

mainMenu();

async function mainMenu() {
  console.log("\n=== WELCOME TO MIE GACOAN ===");
  console.log("Please Select Your Option");
  console.log("1. Category Menu");
  console.log("2. Cart");
  console.log("3. Checkout");
  console.log("4. Exit");
  console.log("============================");

  const ans = await ask("select Option: ");
  switch (ans) {
    case "1":
      categoryMenu();
      break;
    case "2":
      showCart();
      break;
    case "3":
      checkout();
      break;
    case "4":
      console.log("Thank You, See You Again!");
      close();
      break;
    default:
      console.log("Invalid Option!");
      mainMenu();
  }
}

export { mainMenu };
