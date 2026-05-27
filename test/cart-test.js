import { describe, it, beforeEach, after } from "node:test";
import assert from "node:assert";

import { close } from "../utils/input.js";

import {
  cart,
  addToCart,
  calculateTotal,
  isCartEmpty,
  printCart,
  showCart,
} from "../features/cart.js";

after(() => {
  close();
});

describe("Cart Feature", () => {
  beforeEach(() => {
    cart.length = 0;
  });

  describe("addToCart()", () => {
    it("should add item to cart", () => {
      addToCart({
        name: "Mie Gacoan",
        amount: 2,
        subtotal: 20000,
      });

      assert.strictEqual(cart.length, 1);

      assert.deepStrictEqual(cart[0], {
        name: "Mie Gacoan",
        amount: 2,
        subtotal: 20000,
      });
    });
  });

  describe("calculateTotal()", () => {
    it("should return 0 when cart empty", () => {
      assert.strictEqual(calculateTotal(), 0);
    });

    it("should calculate total correctly", () => {
      addToCart({
        name: "Mie 1",
        amount: 1,
        subtotal: 10000,
      });

      addToCart({
        name: "Mie 2",
        amount: 2,
        subtotal: 20000,
      });

      assert.strictEqual(calculateTotal(), 30000);
    });
  });

  describe("isCartEmpty()", () => {
    it("should return true when cart empty", () => {
      assert.strictEqual(isCartEmpty(), true);
    });

    it("should return false when cart has item", () => {
      addToCart({
        name: "Mie Gacoan",
        amount: 1,
        subtotal: 10000,
      });

      assert.strictEqual(isCartEmpty(), false);
    });
  });

  describe("showCart()", () => {
  it("should throw error when cart is empty", () => {
    assert.throws(() => {
      showCart();
    }, {
      name: "Error",
      message: "Cart is empty!",
    });
  });

  it("should return undefined when cart has item", () => {
    addToCart({
      name: "Mie Gacoan",
      amount: 1,
      subtotal: 10000,
    });

    assert.strictEqual(showCart(), undefined);
  });
});
});