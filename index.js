import menu from "./menu.json" with { type: "json" };
import { ask, close } from "./utils/input.js";

const foods = [];
const drinks = [];
const sideDish = [];

foods.push(...menu.foods);
drinks.push(...menu.drinks);
sideDish.push(...menu.sideDish);

let cart = [];

mainMenu();

async function mainMenu() {
  console.log("\n=== MIE GACOAN ===");
  console.log("1. Category Menu");
  console.log("2. Cart");
  console.log("3. Checkout");
  console.log("4. Exit");

  const ans = await ask("select Option: ");
  switch (ans) {
    case "1":
      catergoryMenu();
      break;
    case "2":
      showCart();
      break;
    case "3":
      checkout();
      break;
    case "4":
      console.log("Thank You, See You Again!");
      close();
      break;
    default:
      console.log("Invalid Option!");
      mainMenu();
  }
}

async function catergoryMenu() {
  console.log("\n=== SELECT CATEGORY ===");
  console.log("1. NOODLES");
  console.log("2. BEVERAGES");
  console.log("3. SIDE DISH");
  console.log("4. Back");

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
      mainMenu();
      break;
    default:
      console.log("Invalid Category Option");
      catergoryMenu();
  }
}

async function showItems(menu, categoryName) {
  console.log(`\n=== ${categoryName} ===`);

  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}. ${menu[i].name} - Rp.${menu[i].price}`);
  }

  console.log(`${menu.length + 1}. Back`);

  const input = await ask("Select Menu: ");
  const choice = Number(input);
  switch (choice) {
    case menu.length + 1:
      catergoryMenu();
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

        cart.push({
          name: selectedItem.name,
          price: selectedItem.price,
          amount: amount,
          subtotal: amount * selectedItem.price,
        });
        console.log(`${selectedItem.name} x${amount} added successfully`);
        catergoryMenu();
      } else {
        console.log("Invalid Items Option");
        showItems(menu, categoryName);
      }
  }
}

function showCart() {
  console.log("\n=== CART ===");
  if (cart.length == 0) {
    console.log("Cart can't be empty!");
  } else {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      console.log(
        `${i + 1}. ${cart[i].name} x${cart[i].amount} Rp.${cart[i].subtotal}`,
      );
      total += cart[i].subtotal;
      console.log(`Total Order: ${total}`);
    }
  }
  mainMenu();
}

async function checkout() {
  console.log(`\n=== CHECKOUT ===`);

  if (cart.length === 0) {
    console.log("you have not order yet!");
    return mainMenu();
  }

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    console.log(
      `${i + 1}. ${cart[i].name} x${cart[i].amount} Rp.${cart[i].subtotal}`,
    );
    total += cart[i].subtotal;
  }

  console.log(`Total Price: Rp.${total}`);

  const inputMoney = await ask("Input Money : ");
  const payment = Number(inputMoney);
  if (isNaN(payment) || payment <= 0) {
    console.log("Payment must be a number");
    return checkout();
  }
  if (payment < total) {
    console.log(`Insufficient money! less Rp. ${total - payment} `);
    return checkout();
  }
  let change = payment - total;
  console.log(`Change: ${change}`);
  console.log("Thank You For Your Order :) !");
  close();
}
