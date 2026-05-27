import { mainMenu } from "../index.js";
const cart = [];

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.subtotal, 0);
}

function addToCart(item) {
  cart.push(item);
}

function isCartEmpty() {
  return cart.length === 0;
}

function printCart() {
  if (isCartEmpty()) {
    console.log("cart is empty!");
    return;
  }
  cart.forEach((item, index) => {
    console.log(`${index + 1} ${item.name} x ${item.amount} ${item.subtotal} `);
  });
}

function showCart() {
  console.log("\n=== CART ===");
  if (isCartEmpty()) {
    console.log("Cart can't be empty!");
  } else {
    printCart();
    console.log(`Total: ${calculateTotal()}`);
  }
}

export { cart, showCart, addToCart, calculateTotal, printCart, isCartEmpty };
