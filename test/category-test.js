// tests/category-logic-test.js
import { describe, it } from "node:test";
import assert from "node:assert";
import {
  getCategoryFromInput,
  isChoiceBack,
  isValidItemChoice,
  getItemIndex,
  isValidAmount,
  makeCartItem
} from "../features/category-logic.js";

describe("Category Logic Functions", () => {

  describe("getCategoryFromInput()", () => {
    it("should return 'NOODLES' when input is '1'", () => {
      const result = getCategoryFromInput("1");
      assert.strictEqual(result, "NOODLES");
    });

    it("should return 'BEVERAGES' when input is '2'", () => {
      const result = getCategoryFromInput("2");
      assert.strictEqual(result, "BEVERAGES");
    });

    it("should return 'SIDE_DISH' when input is '3'", () => {
      const result = getCategoryFromInput("3");
      assert.strictEqual(result, "SIDE_DISH");
    });

    it("should return 'BACK' when input is '4'", () => {
      const result = getCategoryFromInput("4");
      assert.strictEqual(result, "BACK");
    });

    it("should return null when input is invalid", () => {
      const result = getCategoryFromInput("99");
      assert.strictEqual(result, null);
    });

    it("should return null when input is string", () => {
      const result = getCategoryFromInput("abc");
      assert.strictEqual(result, null);
    });
  });

  describe("isChoiceBack()", () => {
    it("should return true when choice is BACK", () => {
      const result = isChoiceBack(6, 5);
      assert.strictEqual(result, true);
    });

    it("should return false when choice is not BACK", () => {
      const result = isChoiceBack(3, 5);
      assert.strictEqual(result, false);
    });
  });

  describe("isValidItemChoice()", () => {
    it("should return true when choice 1 is valid", () => {
      const result = isValidItemChoice(1, 5);
      assert.strictEqual(result, true);
    });

    it("should return true when choice 5 is valid", () => {
      const result = isValidItemChoice(5, 5);
      assert.strictEqual(result, true);
    });

    it("should return false when choice is 0", () => {
      const result = isValidItemChoice(0, 5);
      assert.strictEqual(result, false);
    });

    it("should return false when choice is BACK option", () => {
      const result = isValidItemChoice(6, 5);
      assert.strictEqual(result, false);
    });
  });

  describe("getItemIndex()", () => {
    it("should convert choice 1 to index 0", () => {
      const result = getItemIndex(1);
      assert.strictEqual(result, 0);
    });

    it("should convert choice 3 to index 2", () => {
      const result = getItemIndex(3);
      assert.strictEqual(result, 2);
    });
  });

  describe("isValidAmount()", () => {
    it("should return true when amount is 1", () => {
      const result = isValidAmount(1);
      assert.strictEqual(result, true);
    });

    it("should return true when amount is 5", () => {
      const result = isValidAmount(5);
      assert.strictEqual(result, true);
    });

    it("should return false when amount is 0", () => {
      const result = isValidAmount(0);
      assert.strictEqual(result, false);
    });

    it("should return false when amount is negative", () => {
      const result = isValidAmount(-3);
      assert.strictEqual(result, false);
    });

    it("should return false when amount is NaN", () => {
      const result = isValidAmount(NaN);
      assert.strictEqual(result, false);
    });
  });

  describe("makeCartItem()", () => {
    it("should create Mie Gacoan item with amount 2", () => {
      const item = { name: "Mie Gacoan", price: 10000 };
      const result = makeCartItem(item, 2);

      assert.strictEqual(result.name, "Mie Gacoan");
      assert.strictEqual(result.price, 10000);
      assert.strictEqual(result.amount, 2);
      assert.strictEqual(result.subtotal, 20000);
    });

    it("should create Es Teh item with amount 5", () => {
      const item = { name: "Es Teh", price: 5000 };
      const result = makeCartItem(item, 5);

      assert.strictEqual(result.name, "Es Teh");
      assert.strictEqual(result.subtotal, 25000);
    });
  });
});