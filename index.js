import { ask, askNumeral, close } from "./utils/input.js";
import { categoryMenu, showItems } from "./features/category.js";
import { showCart } from "./features/cart.js";
import { checkout } from "./features/checkout.js";
import menu from "./menu.json" with { type: "json" };

mainMenu();

async function mainMenu() {
  while (true) {
    try {
      console.log("\n=== WELCOME TO MIE GACOAN ===");
      console.log("1. Category");
      console.log("2. Cart");
      console.log("3. Checkout");
      console.log("4. Exit");
      console.log("===========================");

      const ans = await ask("Select Menu: ");

      switch (ans) {
        case "1":
          await handleCategory();
          break;

        case "2":
          showCart();
          break;

        case "3":
          await checkout();
          break;

        case "4":
          console.log("Thank you, see you again!");
          close();
          return;

        default:
          console.log("Invalid Option");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

async function handleCategory() {
  while (true) {
    const result = await categoryMenu();

    switch (result) {
      case "NOODLES":
        await showItems(menu.foods, "NOODLES");
        break;

      case "BEVERAGES":
        await showItems(menu.drinks, "BEVERAGES");
        break;

      case "SIDE_DISH":
        await showItems(menu.sideDish, "DIMSUM");
        break;

      case "BACK":
        return;
    }
  }
}

export { mainMenu };
