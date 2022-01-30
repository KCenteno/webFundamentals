// var pizza = {
//     crust: ["Thin Crust", "Thick Crust", "Deep Dish"],
//     sauce: ["BBQ", "Marinara", "Alferado", "Traditional"],
//     cheeses: ["Mozzarella", "Provolone", "Cheddar", "Parmesan"],
//     toppings: ["Pepperoni", "Sausage", "Turkey", "Venison"]
// };
//                  Do i need this??? ^^^^^^^^^


function pizzaOven(crust, sauce, cheeses, toppings){
    var pizza = {};
    pizza.crust = crust; 
    pizza.sauce = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("Deep Dish", "Traditional", ["Mozzarella"], ["Pepperoni", "Sausage"]);
var p2 = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella", "Feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("Thick Crust", "Alferado", "Provolone",["Turkey", "Venison"]);
var p4 = pizzaOven("Thin Crust", "BBQ", "Parmesan", ["Sausage", "Turkey"]);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);



// Random Pizzza


// var crust = ["Thin Crust", "Thick Crust", "Deep Dish"];
// var sauce = ["BBQ", "Marinara", "Alferado", "Traditional"];
// var cheeses = ["Mozzarella", "Provolone", "Cheddar", "Parmesan"];
// var toppings = ["Pepperoni", "Sausage", "Turkey", "Venison"];

// function random(arr){
//     var i = Math.floor(arr.length * Math.random())
//     return arr[i];
// }

// function randomPizza(){
//     var pizza = {};
//     pizza.crust = random(crust); 
//     pizza.sauce = random(sauce);
//     pizza.cheeses = random(cheeses);
//     pizza.toppings = random(toppings);
//     return pizza;
// }


// var p5 = randomPizza();

// console.log(p5);
