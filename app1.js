const firstName = 'John'
const age = 25

const user = {
    firstName, // object property shorthand
    age1: age,
    location: 'Chennai'
};

console.log(user);


//object destructuring --

const prod = {
    id: 100,
    price: 300,
    color: "red"
}

// const price = prod.price;
// console.log(price);

const {id: newid, color, discount = 5} = prod;
console.log(color);
console.log(newid);
console.log(discount);