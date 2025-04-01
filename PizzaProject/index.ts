type pizza = {
  pizzaId: number;
  name: string;
  price: number;
};

type pizzaMenu = Array<pizza>;

type orderStatus = "ordered" | "completed" | "cancelled";
// The orderStatus type can only be one of the three values: ordered, completed, or cancelled

type orderQueuee = Array<order>;

type order = {
  orderId: number;
  pizza: pizza;
  quantity: number;
  status: orderStatus;
};

const pizzaMenu: pizzaMenu = [
  { pizzaId: 1, name: "Margherita", price: 10 },
  { pizzaId: 2, name: "Pepperoni", price: 12 },
  { pizzaId: 3, name: "Vegetarian", price: 11 },
  { pizzaId: 4, name: "Hawaiian", price: 13 },
];

let pizzaId: number = 5; // Start from 5 since we already have 4 pizzas in the menu
let cashInRegisterPizza: number = 1000;
let orderQueue: orderQueuee = [];
let orderId: number = 1;

function addNewPizza(name: string, price: number) {
  const newPizza: pizza = { pizzaId, name, price };
  pizzaId++; // Increment the pizzaId for the next pizza
  // This is a good practice to avoid runtime errors
  pizzaMenu.push(newPizza);
  console.log(`New pizza added: ${name}, Price: $${price}`);
}

function placeOrder(pizzaName: string, quantity: number) {
  const pizzaFound = pizzaMenu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!pizzaFound) {
    console.log("Pizza not found in menu.");
    return;
  }
  const order = {
    orderId: orderId++,
    pizza: pizzaFound,
    quantity: quantity,
    status: "completed" as orderStatus,
  };
  const totalCost = pizzaFound.price * quantity;
  cashInRegisterPizza += totalCost;
  orderQueue.push(order);
  console.log(`Order placed: ${quantity} x ${pizzaFound.name}`);
  return order;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.orderId === orderId);
  // Putting the order in a variable to check if it exists
  // before trying to access its properties
  // This is a good practice to avoid runtime errors
  // when trying to access properties of undefined
  if (!order) {
    console.log("Order not found.");
    return;
  }
  order.status = "completed";
  console.log(`Order completed: ${order.quantity} x ${order.pizza.name}`);
  return order;
}

function getPizzaDetails(iden: number | string) {
  let pizza: pizza | undefined = undefined;
  // Check if iden is a number or string
  // This is a good practice to avoid runtime errors
  if (typeof iden === "number") {
    pizza = pizzaMenu.find((pizza) => pizza.pizzaId === iden);
  } else {
    pizza = pizzaMenu.find((pizza) => pizza.name === iden);
  }
  if (!pizza) {
    console.log("Pizza not found.");
    return;
  }
  console.log(`Pizza details: ${pizza.name}, Price: $${pizza.price}`);
  return pizza;
}

addNewPizza("BBQ Chicken", 14);
addNewPizza("Mushroom", 10);
addNewPizza("Four Cheese", 13);

placeOrder("Margherita", 2);
completeOrder(1);

console.log("Menu:", pizzaMenu);
console.log("Cash in register:", cashInRegisterPizza);
console.log("Order Queue:", orderQueue);

getPizzaDetails(2);
getPizzaDetails("Margherita");