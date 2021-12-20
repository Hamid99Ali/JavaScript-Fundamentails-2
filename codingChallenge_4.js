// var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// for (let tip = 0; tip < bills.length - 1; tip++) {
//     let tips = (bills[tip] >= 50 && bills[tip] <= 300) ? (bills[tip] / 100) * 15 : (bills[tip] / 100) * 20;
//     // console.log(tips);
//     console.log(`This is Tip ${Math.trunc(tips) + 1} & This is Bill without Tip ${bills[tip]} and This is Total Bill with Tip ${Math.trunc(tips + bills[tip]) + 1}`);
// };


var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcAverage = function (arr) {
    let sum = 0;
    for (let tip = 0; tip < arr.length; tip++) {
        sum = sum + arr[tip];
        var avg = sum / arr.length
    }
    console.log(sum);
    return avg;
    // return sum / arr.length;
}
console.log(calcAverage(bills));