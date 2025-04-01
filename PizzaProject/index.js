const menu = [
  { name: "Margherita", price: 10 },
  { name: "Pepperoni", price: 12 },
  { name: "Vegetarian", price: 11 },
  { name: "Hawaiian", price: 13 },
];

let cashInRegister = 1000;
const orderQueue = [];
let orderId = 1;

const addNewPizza = (name, price) => {
  const newPizza = { name, price };
  menu.push(newPizza);
  console.log(`New pizza added: ${name}, Price: $${price}`);
};

const placeOrder = (pizzaName, quantity) => {
  const pizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  const order = {
    orderId: orderId++,
    pizza: pizza,
    quantity,
    status: "ordered",
  };
  const totalCost = pizza.price * quantity;
  cashInRegister += totalCost;
  orderQueue.push(order);
  console.log(`Order placed: ${quantity} x ${pizza.name}`);
  return order;
};

const completeOrder = (orderId) => {
  const order = orderQueue.find((order) => order.orderId === orderId);
  order.status = "completed";
  console.log(`Order completed: ${order.quantity} x ${order.pizza.name}`);
  return order;
};


addNewPizza("BBQ Chicken", 14);
addNewPizza("Mushroom", 10);
addNewPizza("Four Cheese", 13);

placeOrder("Margherita", 2);
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order Queue:", orderQueue);
