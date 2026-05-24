import { ask } from "../utils/input.js";
import { cart, printCartAndTotal } from "./cart.js";
import { mainMenu } from "../index.js";
import { categoryMenu } from "./category.js";
import { payment } from "./payment.js";

async function checkout() {
  try {
    console.log(`\n======== CHECKOUT ========`);

    if (cart.length === 0) {
      console.log("you have not order yet!");
      return mainMenu();
    }

    printCartAndTotal();
    console.log("===========================");
    const askOrderedItem = await ask(
      "Let us know if these are the correct items(y/n):  ",
    );
    switch (askOrderedItem) {
      case "y":
        return payment();
        break;
      case "n":
        return categoryMenu();
        break;
      default:
        console.log("Invalid Answer!");
        return checkout();
    }
  } catch (error) {
    console.log(error);
    return checkout();
  }
}

export { checkout };
