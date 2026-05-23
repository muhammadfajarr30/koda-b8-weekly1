import { mainMenu } from "../index.js";
const cart = [];

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.subtotal, 0);
}

function addToCart(item) {
  cart.push(item);
}

function printCartAndTotal() {
  const total = calculateTotal();
  cart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} x${item.amount} Rp.${item.subtotal}`,
    );
  });
  console.log(`Total Order: ${total}`);
}

function showCart() {
  console.log("\n=== CART ===");
  if (cart.length == 0) {
    console.log("Cart can't be empty!");
  } else {
    printCartAndTotal();
  }

  mainMenu();
}

export { showCart, addToCart, cart, calculateTotal, printCartAndTotal };
