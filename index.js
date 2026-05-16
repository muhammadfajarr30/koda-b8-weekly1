const { createInterface } = require("node:readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const foods = [
  { name: "Mie Gacoan", price: 10000 },
  { name: "Mie Suit", price: 11000 },
  { name: "Mie Hompimpa", price: 12000 },
];

const drinks = [
  { name: "Air Mineral", price: 6500 },
  { name: "Tea", price: 6500 },
  { name: "Lemon Tea", price: 9500 },
  { name: "Orange", price: 8000 },
];

const sideDish = [
  { name: "Lumpia Udang", price: 14000 },
  { name: "Udang Keju", price: 14000 },
  { name: "Udang Rambutan", price: 14000 },
  { name: "Siomay", price: 14000 },
];

let cart = [];

mainMenu();

function mainMenu() {
  console.log("\n=== MIE GACOAN ===");
  console.log("1. Category Menu");

  rl.question("Select Option: ", function (ans) {
    switch (ans) {
      case "1":
        catergoryMenu();
        break;
      default:
        console.log("Invalid Option!");
        mainMenu();
    }
  });
}

function catergoryMenu() {
  console.log("\n=== SELECT CATEGORY ===");
  console.log("1. NOODLES");
  console.log("2. BEVERAGES");
  console.log("3. SIDE DISH");

  rl.question("Select Category: ", function (ans) {
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
      default:
        console.log("Invalid Category Option");
        catergoryMenu();
    }
  });
}

function showItems(menu, categoryName) {
  console.log(`\n=== ${categoryName} ===`);

  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}. ${menu[i].name} - Rp.${menu[i].price}`);
  }

  console.log(`${menu.length + 1}. Back`);

  rl.question("Select Menu: ", function (ans) {
    let choice = Number(ans);
    switch (choice) {
      case menu.length + 1:
        catergoryMenu();
        break;
      default:
        if (choice >= 1 && choice <= menu.length) {
          const selectedItem = menu[choice - 1];

          rl.question("Amount: ", function (ans) {
            let qty = Number(ans);
            if (isNaN(qty) || qty < 1) {
              console.log("Input Amount and should be a number");
              return showItems(menu, categoryName);
            }

            cart.push({
              name: selectedItem.name,
              price: selectedItem.price,
              amount: qty,
              subtotal: qty * selectedItem.price,
            });
            console.log(`${selectedItem.name} x${qty} added successfully`);
            mainMenu();
          });
        } else {
          console.log("Invalid Items Option");
          showItems(menu, categoryName);
        }
    }
  });
}
