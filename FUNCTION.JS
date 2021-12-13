"use strict";
function blog() {
    console.log("My Name is Hamid ALi :).");
}
// calling /runing/ invoking function.
blog();
blog();
blog();

function friutProcesser(apples, oranges) {
    console.log(apples, oranges);
    const Juice = (`Juice with ${apples} Apples and with ${oranges} oranges`);
    return Juice;
}
// without return statements.
friutProcesser(5, 2);

// with retrun statement
const juices = friutProcesser(5, 3);
console.log(juices);

