class Dish {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}


class Menu {
  constructor() {
    this.dishes = []; 
  }

  
  addDish(dish) {
    this.dishes.push(dish);
    console.log(`Dish "${dish.name}" has been added to the menu.`);
  }

  
  viewMenu() {
    if (this.dishes.length === 0) {
      console.log("The menu is currently empty.");
      return;
    }
    console.log("Menu:");
    this.dishes.forEach((dish, index) => {
      console.log(
        `${index + 1}. ${dish.name} - ${dish.description} - $${dish.price}`
      );
    });
  }

  
  deleteDish(dishName) {
    const index = this.dishes.findIndex(
      (dish) => dish.name.toLowerCase() === dishName.toLowerCase()
    );
    if (index === -1) {
      console.log("Dish not found.");
      return;
    }
    this.dishes.splice(index, 1);
    console.log(`Dish "${dishName}" has been deleted from the menu.`);
  }
}


const myMenu = new Menu();


const dish1 = new Dish(
  "Spaghetti Bolognese",
  "Classic Italian pasta with rich tomato meat sauce",
  12.99
);
const dish2 = new Dish(
  "Caesar Salad",
  "Crisp romaine lettuce with creamy Caesar dressing and croutons",
  7.99
);
const dish3 = new Dish(
  "Grilled Chicken",
  "Succulent grilled chicken breast with lemon and herbs",
  14.99
);


myMenu.addDish(dish1);
myMenu.addDish(dish2);
myMenu.addDish(dish3);


myMenu.viewMenu();


myMenu.deleteDish();


myMenu.viewMenu();
