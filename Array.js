const friend1 = "Ali";
const friend2 = "Raza";
const friend3 = "Rehan";
// This is called the variable declaration and the intialization.

// Now the array declaration and the intialization.

// Syntex of the array
const friends = ["Ali", "Raza", "Rehan"];
// console.log(friends);
// Syntex of the Array
const years = new Array(1999, 2002, 2019, 2022);
// console.log(years);

// How to get data from the array
// console.log(friends[1]);

// how to find the lenght of the array
// console.log(`This is the lenght of the array = ${friends.length}`);

// how to find the index of the array

// console.log(`This is the index of the Array = ${friends.length - 1}`);

// How to get the last element from the Array
// console.log(friends[friends.length - 1]);

// How to replace or change the element in the array.
friends[2] = "Hamid Ali";
// console.log(friends);
// The Below Statement is not Allowed
// friends = ["lie", "paa"]

// Array inside Array or the differents types of data.
const firstName = "Hamid Ali";
const Hamid = [firstName, "", 2021 - 1999, "Student", "BSIT", friends];
// console.log(Hamid);
// console.log(years + 10);

const caluAverage = function (Brithyear) {
    return 2037 - Brithyear;
}
// This will provide us the error NaN
// console.log(caluAverage(years));
console.log(caluAverage(years[3]));

// we can not provide or apply the minus or the addition operation on the array.

