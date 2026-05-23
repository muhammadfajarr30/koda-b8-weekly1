import { ask } from "../utils/input.js";
import { categoryMenu } from "./category.js";
import { mainMenu } from "../index.js";
import { addToCart } from "./cart.js";

// let cart = [];
async function showItems(menu, categoryName) {
  console.log(`\n========= ${categoryName} =========`);

  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}. ${menu[i].name} - Rp.${menu[i].price}`);
  }

  console.log(`${menu.length + 1}. Back`);
  console.log("=============================");

  const input = await ask("Select Menu: ");
  const choice = Number(input);
  switch (choice) {
    case menu.length + 1:
      categoryMenu();
      break;
    default:
      if (choice >= 1 && choice <= menu.length) {
        const selectedItem = menu[choice - 1];

        const inputAmount = await ask("Amount :");
        const amount = Number(inputAmount);
        if (isNaN(amount) || amount < 1) {
          console.log("Input Amount and should be a number");
          return showItems(menu, categoryName);
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
        showItems(menu, categoryName);
      }
  }
}

export { showItems };
