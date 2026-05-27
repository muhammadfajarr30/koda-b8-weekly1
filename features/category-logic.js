function getCategoryFromInput(input) {
  if (input === "1") return "NOODLES";
  if (input === "2") return "BEVERAGES";
  if (input === "3") return "SIDE_DISH";
  if (input === "4") return "BACK";
  return null; 
}

function isChoiceBack(choice, totalMenu) {
  return choice === totalMenu + 1;
}

function isValidItemChoice(choice, totalMenu) {
  return choice >= 1 && choice <= totalMenu;
}

function getItemIndex(choice) {
  return choice - 1;
}

function isValidAmount(amount) {
  return amount > 0 && !isNaN(amount);
}

function makeCartItem(item, amount) {
  return {
    name: item.name,
    price: item.price,
    amount: amount,
    subtotal: amount * item.price
  };
}

export { 
  getCategoryFromInput,
  isChoiceBack,
  isValidItemChoice,
  getItemIndex,
  isValidAmount,
  makeCartItem
};