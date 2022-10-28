class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings  = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  addFooter() {
    console.log("-------------------");
  }
};

let pizza1 = new Pizza('large', 'thin');
console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings);
console.log(pizza1);
pizza1.addFooter();


let pizza2 = new Pizza('small', 'thick');

console.log(pizza2.toppings);
pizza2.addTopping("more cheese");
console.log(pizza2.toppings);
console.log(pizza2);
