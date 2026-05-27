import { ask, askNumeral } from "../utils/input.js";
import { addToCart } from "./cart.js";

async function categoryMenu() {
  try {
    console.log("\n=== SELECT CATEGORY ===");
    console.log("1. NOODLES");
    console.log("2. BEVERAGES");
    console.log("3. SIDE DISH");
    console.log("4. Back");
    console.log("=======================");

    const ans = await ask("Select Menu: ");

    switch (ans) {
      case "1":
        return "NOODLES";

      case "2":
        return "BEVERAGES";

      case "3":
        return "SIDE_DISH";

      case "4":
        return "BACK";

      default:
        console.log("Invalid Category");
        return categoryMenu();
    }
  } catch (error) {
    console.error(error);
    return categoryMenu();
  }
}

async function showItems(menu, categoryName) {
  try {
    console.log(`\n====== ${categoryName} ======`);

    menu.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - Rp.${item.price}`);
    });

    console.log(`${menu.length + 1}. Back`);
    console.log("======================");

    const choice = await askNumeral("Select Menu: ");

    if (choice === menu.length + 1) {
      return;
    }

    const selectedItem = menu[choice - 1];

    if (!selectedItem) {
      console.log("Invalid Item Option");

      return showItems(menu, categoryName);
    }

    const amount = await askNumeral("Amount: ");

    addToCart({
      name: selectedItem.name,
      price: selectedItem.price,
      amount,
      subtotal: amount * selectedItem.price,
    });

    console.log(`${selectedItem.name} x${amount} added successfully`);
  } catch (error) {
    console.error(error);

    return showItems(menu, categoryName);
  }
}

export { categoryMenu, showItems };
