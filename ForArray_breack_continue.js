const array1 = [
    "Ali",
    "Hamid ALi",
    ["Ali Raza", "Rehan", "Muzzammil"],
    1999 - 2021,
    "Student",
    true
];

const types = [];
// The new Empty array that stores the data.

for (let i = 0; i < array1.length; i++) {
    // reading data from the array(array1)
    // console.log(`This is index of array was printed ${array1[i]}`);

    // filling the array (types)
    // types[i] = typeof array1[i];
    types.push(typeof array1);
    // here we add the data after geting it from other array.
};
// console.log(types);

// const years = [1999, 2000, 2012, 2020];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//     age.push(2037 - years[i]);
// }
// console.log(age);
console.log(types);

const years = [1999, 2000, 2012, 2020];
const age = [];
console.log("---Only Strings will printed---");

// This will only print the data that is only the string type

for (let i = 0; i < array1.length; i++) {
    if (typeof array1[i] !== "string") continue;
    // age.push(2037 - years[i]);
    console.log(array1[i]);
}
// console.log(age);

// This will break the loop after the first number data type they get.
console.log("---Break with String---");
for (let i = 0; i < array1.length; i++) {
    if (typeof array1[i] === "number") break;
    // age.push(2037 - years[i]);
    console.log(array1[i]);
}
