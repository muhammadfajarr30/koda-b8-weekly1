import { mainMenu } from "../index.js";
const cart = [];

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.subtotal, 0);
}

function addToCart(item) {
  cart.push(item);
}

function showCart() {
  console.log("\n=== CART ===");
  if (cart.length == 0) {
    console.log("Cart can't be empty!");
  } else {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      console.log(
        `${i + 1}. ${cart[i].name} x${cart[i].amount} Rp.${cart[i].subtotal}`,
      );
      total += cart[i].subtotal;
      console.log(`Total Order: ${total}`);
    }
  }

  mainMenu();
}

export { showCart, addToCart, cart, calculateTotal };
