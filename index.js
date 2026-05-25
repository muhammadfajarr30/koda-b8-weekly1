import { ask, close } from "./utils/input.js";
import { categoryMenu } from "./features/category.js";
import { showCart } from "./features/cart.js";
import { checkout } from "./features/checkout.js";

mainMenu();

async function mainMenu() {
  try {
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
        await categoryMenu();
        break;
      case "2":
        await showCart();
        break;
      case "3":
        await checkout();
        break;
      case "4":
        console.log("Thank You, See You Again!");
        close();
        return;
        break;
      default:
        console.log("Invalid Option!");
        return mainMenu();
    }
  } catch (error) {
    console.error(error);
    return mainMenu();
  }
}

export { mainMenu };
