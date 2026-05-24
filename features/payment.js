import { ask, askNumeral, close } from "../utils/input.js";
import { calculateTotal } from "./cart.js";
import { checkout } from "./checkout.js";

async function payment() {
  try {
    const total = calculateTotal();
    const payment = await askNumeral("Input Money : ");

    if (payment < total) {
      console.log(`Insufficient money! less Rp. ${total - payment} `);
      return checkout();
    }
    let change = payment - total;
    console.log(`Change: ${change}`);
    console.log("Thank You For Your Order :) !");
    close();
  } catch (error) {
    console.error(`${error}, Please Input Money Correctly`);
    return payment();
  }
}

export { payment };
