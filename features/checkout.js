import { ask, askNumeral, close } from "../utils/input.js";
import { calculateTotal, cart, isCartEmpty, printCart } from "./cart.js";
import { categoryMenu } from "./category.js";

async function checkout() {
  try {
    console.log(`\n======== CHECKOUT ========`);

    if (isCartEmpty()) {
      console.log("you have not order yet!");
      return;
    }

    printCart();
    console.log("===========================");

    const total = calculateTotal();
    const payment = await askNumeral("Input Money: ");
    if (payment < total) {
      console.log(`Insufficient money! less Rp. ${total - payment}`);
      return checkout();
    }
    const change = payment - total;
    console.log(`change: ${change}`);
    console.log("Thank You for Your Order!");
    return true;
  } catch (error) {
    console.log(error);
    return checkout();
  }
}

export { checkout };
