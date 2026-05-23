import { ask } from "../utils/input.js";
import { calculateTotal, cart } from "./cart.js";
import { mainMenu } from "../index.js";
import { categoryMenu } from "./category.js";
import { payment } from "./payment.js";

async function checkout() {
  const total = calculateTotal();

  console.log(`\n======== CHECKOUT ========`);

  if (cart.length === 0) {
    console.log("you have not order yet!");
    return mainMenu();
  }

  for (let i = 0; i < cart.length; i++) {
    console.log(
      `${i + 1}. ${cart[i].name} x${cart[i].amount} Rp.${cart[i].subtotal}`,
    );
  }

  console.log(`Total Price: Rp.${total}`);
  console.log("===========================");
  const askOrderedItem = await ask(
    "Let us know if these are the correct items(y/n):  ",
  );
  switch (askOrderedItem) {
    case "y":
      payment();
      break;
    case "n":
      categoryMenu();
      break;
    default:
      console.log("Invalid Answer!");
      return checkout();
  }
}

export { checkout };
