import { ask, askNumeral } from "../utils/input.js";
import menu from "../menu.json" with { type: "json" };
import { mainMenu } from "../index.js";
import { checkout } from "./checkout.js";
import { addToCart } from "./cart.js";

const foods = [];
const drinks = [];
const sideDish = [];

foods.push(...menu.foods);
drinks.push(...menu.drinks);
sideDish.push(...menu.sideDish);

async function categoryMenu() {
  try {
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
        await showItems(foods, "NOODLES");
        break;
      case "2":
        await showItems(drinks, "BEVERAGES");
        break;
      case "3":
        await showItems(sideDish, "DIMSUM");
        break;
      case "4":
        await checkout();
        break;
      case "5":
        await mainMenu();
        break;
      default:
        console.log("Invalid Category Option");
        return categoryMenu();
    }
  } catch (error) {
    console.error(error);
    return categoryMenu();
  }
}

async function showItems(menu, categoryName) {
  try {
    console.log(`\n========= ${categoryName} =========`);

    menu.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - Rp.${item.price}`);
    });

    console.log(`${menu.length + 1}. Back`);
    console.log("=============================");

    const choice = await askNumeral("Select Menu: ");
    switch (choice) {
      case menu.length + 1:
        categoryMenu();
        break;
      default:
        if (choice >= 1 && choice <= menu.length) {
          const selectedItem = menu[choice - 1];

          const amount = await askNumeral("Amount :");
          if (isNaN(amount) || amount < 1) {
            console.log("Input Amount and should be a number");
            return await showItems(menu, categoryName);
          }

          addToCart({
            name: selectedItem.name,
            price: selectedItem.price,
            amount: amount,
            subtotal: amount * selectedItem.price,
          });
          console.log(`${selectedItem.name} x${amount} added successfully`);
          await categoryMenu();
        } else {
          console.log("Invalid Items Option");
          return showItems(menu, categoryName);
        }
    }
  } catch (error) {
    console.error(error);
    return showItems(menu, categoryName);
  }
}

export { categoryMenu };
