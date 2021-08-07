const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts:[]
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizersValue){
    this._courses.appetizers = appetizersValue;
  },
    set mains(mainsValue){
    this._courses.mains = mainsValue;
  },
    set desserts(dessertsValue){
    this._courses.desserts = dessertsValue;
  },
 
  get course(){
    return {
      apepetizers: this.appetizersValue,
      mains: this.mainsValue,
      desserts: this.dessertsValue
    };
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return this._courses[courseName].push(dish);
  },

  //Randome dish genetor function
  getRandomDishFromCourse(courseName){
    const dishes = courseName;

    const randomIndex = Math.floor(Math.random() * dishes.length);
    console.log(dishes[randomIndex]);
    return dishes[randomIndex];
  },
  generateRandomMeal(){

    //The code bellow generate random values for the individual properties with a method from getRandomeDish
    const appetizer = this.getRandomDishFromCourse(this._courses.appetizers);
     const main = this.getRandomDishFromCourse(this._courses.mains);
      const dessert = this.getRandomDishFromCourse(this._courses.desserts);
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and your total price is ${totalPrice}`
  }
};

menu.addDishToCourse('appetizers','Vegetable Salad', 11.00);
menu.addDishToCourse('appetizers','Toasted Bread ', 21.00);
menu.addDishToCourse('appetizers','Salad', 9.40);

menu.addDishToCourse('mains','Banku', 21.50);
menu.addDishToCourse('mains','Jollof ', 8.00);
menu.addDishToCourse('mains','Fufu', 14.00);

menu.addDishToCourse('desserts','Rice Balls', 51.00);
menu.addDishToCourse('desserts','Plain Rice', 31.00);
menu.addDishToCourse('desserts','Yam Stew', 51.00);

let meal = menu.generateRandomMeal();
console.log(meal)
