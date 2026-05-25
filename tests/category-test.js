import { close } from "../utils/input.js"
import { describe, it, after } from "node:test";
import assert from "node:assert";
import { showItems } from "../features/category.js";
after(()=>{
    close();
})
describe("showItems", () => {
  const menu = [
    {
      name: "Mie Gacoan",
      price: 10000,
    },
    {
      name: "Es Teh",
      price: 5000,
    },
  ];

  it("should exist", () => {
    assert.strictEqual(typeof showItems, "function");
  });

  it("should throw no error when menu provided", async () => {
    try {
      await Promise.race([
        showItems(menu, "FOOD"),
        new Promise(resolve => setTimeout(resolve, 100)),
      ]);

      assert.ok(true);
    } catch {
      assert.fail("Function throws error");
    }
  });

});