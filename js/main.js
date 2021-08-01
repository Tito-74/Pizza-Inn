function PizzaOrder(size,type,crust,topping,quantity){
  this.size = size;
  this.pizzaType = type;
  this.crust =crust;
  this.topping=topping;
  this.quantity = quantity;
  }
PizzaOrder.prototype.getCrust = function (){
    if (this.crust === "thin") {
    return 100
    } else if (this.crust === "thick") {
    return 150
    } else if (this.crust === "flatbread") {
    return 200
    }else if (this.crust === "custom") {
    return 300
    }
}
    
PizzaOrder.prototype.getTopping = function (){
    if (this.topping === "tomato") {
    return 180
    } else if (this.topping === "pineapple") {
    return 200
    } else if (this.topping === "redpepper") {
    return 120
    } else if (this.topping === "irish") {
    return 220
    }
    else if (this.topping === "grapes") {
    return 320
    } else if (this.topping === "chicken") {
    return 170
    }
 }
    PizzaOrder.prototype.getSize = function () {
    if (this.pizzaType == "Veggie") {
    if (this.size == "Small") {
    return 10000
    } else if (this.size == "Medium")
    return 800
    else {
    return 1200
    }
    } else if (this.pizzaType == "Cheese") {
    if (this.size == "Small") {
    return 300
    } else if (this.size == "Medium")
    return 800
    else {
    return 2000
    }
    } else if (this.pizzaType == "periperi") {
    if (this.size == "Small") {
    return 500
    } else if (this.size == "Medium")
    return 1000
    else {
    return 1900
    }
    } else if (this.pizzaType == "BBQChicken") {
    if (this.size == "Small") {
    return 600
    } else if (this.size == "Medium")
    return 1500
    else {
    return 1700
    }
    } else if (this.pizzaType == "Margherita") {
    if (this.size == "Small") {
    return 500
    } else if (this.size == "Medium")
    return 950
    else {
    return 1800
    }
    } else if (this.pizzaType == "hawaiian") {
    if (this.size == "Small") {
    return 400
    } else if (this.size == "Medium")
    return 850
    else {
    return 1600
    }
    
  } 
    else {
    return false;
    }
}