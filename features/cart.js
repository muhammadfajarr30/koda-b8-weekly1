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
    throw new Error("Cart is empty!");
  }

  cart.forEach((item, index) => {
    console.log(
      `${index + 1} ${item.name} x ${item.amount} ${item.subtotal} `
    );
  });
}

function showCart() {
  console.log("\n=== CART ===");

  if (isCartEmpty()) {
    throw new Error("Cart is empty!");
  }

  printCart();

  console.log(`Total: ${calculateTotal()}`);
}

export {
  cart,
  showCart,
  addToCart,
  calculateTotal,
  printCart,
  isCartEmpty,
};
