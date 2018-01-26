const menu = {
 _courses: {
   _appetizers: [],
   _mains: [],
   _desserts: [],

  set appetizers(appetizerIn) {
    this._appetizers = appetizersIn;
   },

  get appetizers() {
    return this._appetizers;
  },

  set mains(mainsIn) {
    this._mains = mainsIn;
   },

  get mains() {
    return this._mains;
  },

  set desserts(dessertsIn) {
     this._desserts = dessertsIn;
   },

  get desserts() {
    return this._desserts;
  },

 },

  get courses() {
   return {
    appetizers: this._courses.appetizers,
    mains: this._courses.mains,
    desserts: this._courses.desserts,
  };
  },

 addDishToCourse (courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice,
};

    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];

    const randomIndex = Math.floor(Math.random() * dishes.length);

return dishes[randomIndex];
  },
 generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, and ${main.name} with ${dessert.name}. The price is N${totalPrice.toFixed(2)}.`;
  }
};

menu.addDishToCourse('appetizers', 'Nkwobi', 300);
menu.addDishToCourse('appetizers', 'Chicken Suya', 500);
menu.addDishToCourse('appetizers', 'Ugba', 200);

menu.addDishToCourse('mains', 'Fried Rice', 700);
menu.addDishToCourse('mains', 'Edikaikong and Pound Yam', 800);
menu.addDishToCourse('mains', 'Beans and Plantain Pottage', 450);

menu.addDishToCourse('desserts', 'Smoothie', 500);
menu.addDishToCourse('desserts', 'Zobo', 100);
menu.addDishToCourse('desserts', 'Coconut Chips', 500);

let meal = menu.generateRandomMeal();

console.log(meal);
