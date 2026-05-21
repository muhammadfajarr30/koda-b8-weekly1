import { ask } from "../utils/input.js";
import menu from "../menu.json" with { type: "json" };
import { showItems } from "./showItems.js";
import { mainMenu } from "../index.js";
import { checkout } from "./checkout.js";

const foods = [];
const drinks = [];
const sideDish = [];

foods.push(...menu.foods);
drinks.push(...menu.drinks);
sideDish.push(...menu.sideDish);

async function catergoryMenu() {
  console.log("\n=== SELECT CATEGORY ===");
  console.log("1. NOODLES");
  console.log("2. BEVERAGES");
  console.log("3. SIDE DISH");
  console.log("4. Checkout");
  console.log("5. Back");
  console.log("=======================");

  const ans = await ask("Select Menu: ");
  switch (ans) {
    case "1":
      showItems(foods, "NOODLES");
      break;
    case "2":
      showItems(drinks, "BEVERAGES");
      break;
    case "3":
      showItems(sideDish, "DIMSUM");
      break;
    case "4":
      checkout();
      break;
    case "5":
      mainMenu();
      break;
    default:
      console.log("Invalid Category Option");
      catergoryMenu();
  }
}
export { catergoryMenu };
