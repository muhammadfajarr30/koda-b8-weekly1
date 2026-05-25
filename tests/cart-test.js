import { close } from "../utils/input.js"
import { describe, it, after } from "node:test";
import assert from "node:assert";


import {
  cart,
  addToCart,
  calculateTotal,
} from "../features/cart.js";

describe("Cart Feature", () => {
    
  it("should add item to cart", () => {

    addToCart({
      name: "Mie Gacoan",
      price: 10000,
      amount: 2,
      subtotal: 20000,
    });

    assert.strictEqual(cart.length, 1);

  });

  it("should calculate total correctly", () => {

    addToCart({
      name: "Es Teh",
      price: 5000,
      amount: 2,
      subtotal: 10000,
    });

    const total = calculateTotal();

    assert.strictEqual(total, 30000);

  });

  it("cart should store correct item", () => {

    assert.deepStrictEqual(
      cart[0],
      {
        name: "Mie Gacoan",
        price: 10000,
        amount: 2,
        subtotal: 20000,
      },
    );

  });

  after(() => {

    cart.length = 0;

    console.log("Cart test finished");

  });

});

after(()=>{
        close()
    })
