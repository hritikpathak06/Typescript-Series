"use strict";
// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }
// FUNCTION WITH OBJECT
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "Apple",
    price: 99999,
    stock: 145,
    photo: "Sample url",
    id: "sklswjdjd",
};
getData(productOne);
const errorHandler = () => {
    throw new Error();
};
const mode = "dark";
// *************************************************************
// CLASSES IN TYPESCRIPT
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.floor(Math.random() * 1000));
    }
    get getMyHeight() {
        return this.height;
    }
    set changeMyHeight(height) {
        this.height = height;
    }
}
const abhi = new Player(100, 150, 23);
console.log("Height", abhi.getMyHeight);
abhi.changeMyHeight = 50;
console.log("Changed Height", abhi.getMyHeight);
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
}
const abhi = new Player2(100, 150, 23, true);
console.log("Weight", abhi.weight);
console.log("Heght", abhi.getMyHeight());
console.log("ID", abhi.id);
;
class Product {
    constructor(name, price, stock, offer, id) {
        this.id = String(Math.floor(Math.random() * 1000));
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = id;
        this.offer = offer;
    }
}
;
const pizza = new Product("I Phone", 49999, 120, true, "jjsjsj");
console.log("ID", pizza.id);
console.log("Name", pizza.name);
console.log("Price", pizza.price);
console.log("Stock", pizza.stock);
// **************************************************************
// TYPE ASSERTION
const btn = document.getElementById("btn");
const img = document.getElementById("img");
const form = document.getElementById("form");
const input = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(input.value);
    const h2 = document.createElement("h2");
    h2.textContent = (value + 20).toString();
    const body = document.querySelector("body");
    body.append(h2);
};
const myObj = {
    name: "Ritik",
    email: "ritik@gmail.com",
};
let key = "name";
myObj[key];
const getName = () => {
    return myObj["name"];
};
const getEmail = () => {
    return myObj["email"];
};
const getData = (key) => {
    return myObj[key];
};
getData("name");
