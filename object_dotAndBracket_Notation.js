const object = {
    firstName: "Ghulam Nabi",
    lastName: "Hamid Ali",
    Age: `${2021 - 1999}`,
    Job: "Student",
    Friends: ["Ali Raza", "Rehan", "Muzzammil"]
}
// This is Called the dot Notation Method to get the data.
// console.log(object.Friends);
// This is called the bracket notatiion and we can replace teh job string with any expersion.
// console.log(object["Job"]);

// const NameKeys = "Name";
// console.log(object["first" + NameKeys]);
// console.log(object["last" + NameKeys]);

// This will not work
// console.log(object."last" + NameKeys);

// const interestedIn = prompt("choose something between firstName,lastName,Age,Job and Friends");
// if (object[interestedIn]) {
//     console.log(object[interestedIn]);
// } else {
//     console.log(`The Wrong Request choose something between firstName,lastName,Age,Job and Friends`)
// }

// adding the New Values to the Objects.

//Adding with the help of dot Notation.
object.location = "pakistan";
//Adding with the help of dot Notation.
object["facebook"] = "Facebook";
console.log(object);
console.log(`${object.lastName} has ${object.Friends.length/*object.Friends now is array then we can find the lenght by .lenght */} friends and, his best friend is called ${object.Friends[2]}`);

