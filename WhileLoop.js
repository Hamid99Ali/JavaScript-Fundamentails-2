// for (let rep = 1; rep <= 5; rep++) {
//     console.log(`For loop:Weight lifting ${rep} 🤣`)
// }
// let rep1 = 1;
// while (rep1 <= 5) {
//     console.log(`While Loop:Weight lifting ${rep1} 🤣`)
//     rep1++;
// };

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while (dice !== 6) {
    console.log(`You have the dice ${dice} 🎲`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop going to end... 🎲🎲🎲`)
    }
}