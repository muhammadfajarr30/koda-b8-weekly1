import { ask, close } from "../utils/input.js";
import { total } from "./checkout.js";

async function payment() {
  const inputMoney = await ask("Input Money : ");
  const payment = Number(inputMoney);
  if (isNaN(payment) || payment <= 0) {
    console.log("Payment must be a number");
    return checkout();
  }
  if (payment < total) {
    console.log(`Insufficient money! less Rp. ${total - payment} `);
    return checkout();
  }
  let change = payment - total;
  console.log(`Change: ${change}`);
  console.log("Thank You For Your Order :) !");
  close();
}

export { payment };
