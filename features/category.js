// // category.js - Sekarang lebih mudah dibaca
// import { ask, askNumeral } from "../utils/input.js";
// import { addToCart } from "./cart.js";
// import { 
//   getCategoryFromInput,
//   isChoiceBack,
//   isValidItemChoice,
//   getItemIndex,
//   isValidAmount,
//   makeCartItem
// } from "./category-logic.js";

// async function categoryMenu() {
//   try {
//     console.log("\n=== SELECT CATEGORY ===");
//     console.log("1. NOODLES");
//     console.log("2. BEVERAGES");
//     console.log("3. SIDE DISH");
//     console.log("4. Back");
//     console.log("=======================");

//     const jawaban = await ask("Select Menu: ");
//     const kategori = getCategoryFromInput(jawaban);

//     // Jika input tidak valid (return null)
//     if (kategori === null) {
//       console.log("Invalid Category");
//       return categoryMenu(); // Ulang lagi
//     }

//     return kategori;
//   } catch (error) {
//     console.error(error);
//     return categoryMenu();
//   }
// }

// async function showItems(menu, categoryName) {
//   try {
//     // Tampilkan menu
//     console.log(`\n====== ${categoryName} ======`);
//     menu.forEach((item, index) => {
//       console.log(`${index + 1}. ${item.name} - Rp.${item.price}`);
//     });
//     console.log(`${menu.length + 1}. Back`);
//     console.log("======================");

//     // Minta pilihan user
//     const pilihan = await askNumeral("Select Menu: ");

//     // Cek apakah pilih tombol BACK
//     if (isChoiceBack(pilihan, menu.length)) {
//       return; // Kembali ke menu sebelumnya
//     }

//     // Cek apakah pilihan item valid
//     if (!isValidItemChoice(pilihan, menu.length)) {
//       console.log("Invalid Item Option");
//       return showItems(menu, categoryName); // Ulang lagi
//     }

//     // Dapatkan item yang dipilih
//     const indexItem = getItemIndex(pilihan);
//     const itemTerpilih = menu[indexItem];

//     // Minta jumlah (amount)
//     const jumlah = await askNumeral("Amount: ");

//     // Cek apakah jumlah valid
//     if (!isValidAmount(jumlah)) {
//       console.log("Amount must be positive number");
//       return showItems(menu, categoryName); // Ulang lagi
//     }

//     // Buat item cart dan tambahkan
//     const cartItem = makeCartItem(itemTerpilih, jumlah);
//     addToCart(cartItem);

//     console.log(`${itemTerpilih.name} x${jumlah} added successfully`);
//   } catch (error) {
//     console.error(error);
//     return showItems(menu, categoryName);
//   }
// }

// export { categoryMenu, showItems };
// category.js
import { ask, askNumeral } from "../utils/input.js";
import { addToCart } from "./cart.js";

import {
  getCategoryFromInput,
  isChoiceBack,
  isValidItemChoice,
  getItemIndex,
  isValidAmount,
  makeCartItem,
} from "./category-logic.js";

async function categoryMenu() {
  try {
    console.log("\n=== SELECT CATEGORY ===");
    console.log("1. NOODLES");
    console.log("2. BEVERAGES");
    console.log("3. SIDE DISH");
    console.log("4. Back");
    console.log("=======================");

    const ans = await ask("Select Menu: ");

    const category = getCategoryFromInput(ans);

    if (category === null) {
      console.log("Invalid Category");
      return categoryMenu();
    }

    return category;
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

    // cek apakah pilih back
    if (isChoiceBack(choice, menu.length)) {
      return;
    }

    // cek apakah pilihan valid
    if (!isValidItemChoice(choice, menu.length)) {
      console.log("Invalid Item Option");
      return showItems(menu, categoryName);
    }

    const itemIndex = getItemIndex(choice);
    const selectedItem = menu[itemIndex];

    const amount = await askNumeral("Amount: ");

    // cek apakah amount valid
    if (!isValidAmount(amount)) {
      console.log("Amount must be greater than 0");
      return showItems(menu, categoryName);
    }

    const cartItem = makeCartItem(selectedItem, amount);

    addToCart(cartItem);

    console.log(`${selectedItem.name} x${amount} added successfully`);
  } catch (error) {
    console.error(error);
    return showItems(menu, categoryName);
  }
}

export { categoryMenu, showItems };

