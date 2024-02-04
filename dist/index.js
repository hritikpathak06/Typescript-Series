"use strict";
// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }
const users = [
    {
        name: "Ritik",
        age: 45,
    },
    {
        name: "Rovky",
        age: 45,
    },
    {
        name: "Levi",
        age: 34,
    },
    {
        name: "Rahul",
        age: 14,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "Rahul");
console.log(filteredPeopleByName);
