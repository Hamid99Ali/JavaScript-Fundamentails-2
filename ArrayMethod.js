// Add Elements in the array.
const friends = ["Ali", "Raza", "Rehan"];

// To add the Element in the end we use the push function.
friends.push("Hamid Ali");//add it the last of the array.
// console.log(friends);

//TO add the Element at the first of the array we the unshift()function.
friends.unshift("Ghulam Nabi");//at the first of the array.
// console.log(friends);


// The Remove Function.

// there is no need to provide the arguments in the pop function.
const popped = friends.pop();//first elemnts was removed.
// the pop function also return the element that was removed by the pop itself.
// console.log(popped);
// console.log(friends);

friends.shift();//remove first
// console.log(friends);

// TO find the index of the element use the we use the indexOf("value i.e Ali") function.
// If the element is present in the Array so the it return the index number of the element that is in the array.
const indexOf1 = friends.indexOf("Ali");

//If the Element is not present in array it by default represent the value of the array. 
const indexOf2 = friends.indexOf("ALi");
console.log(indexOf1, indexOf2);

friends.push(23);
const includes1 = friends.includes("Ali");
// if the element is present it return the true value as boolean.
const includes3 = friends.includes("23");
// we also add the add as the number but when we like to get it. it return the false becasue they use the by default strict mood of the javascript means that we enter the 23 as number when welike to get as string they return the false becasue they have diffrents data types. 

const includes2 = friends.includes("ALi");
const includes4 = friends.includes(23);
// if the elements is not present in the array so it return the false.
console.log(includes1, includes2, includes3, includes4);
if (friends.includes("Ali")) {
    console.log("The Good Friend is Ali :D");
}