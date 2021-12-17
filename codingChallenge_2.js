
const bills = new Array(125, 555, 44);
const bill = bills[1];
const tip1 = (bills[1] / 100) * 20;
const tip2 = (bills[1] / 100) * 15;
const Total_bill1 = tip1 + bill;
const Total_bill2 = tip2 + bill;

function caluTip(bill) {
    if (bill >= 50 && bill <= 300) {
        console.log(`This bills tip is 15% that = ${tip1}$ from bill = ${bill}$ The Total Bill is ${Total_bill1}$`);
    } else {
        console.log(`This bill tip is 20% that = ${tip2}$ from bill = ${bill}$ The Total Bill is ${Total_bill2}$`);
    }
}
caluTip(bills[1]);

// const calutip=function(bill){return bill>=50 && bill<=300?bill*.15:bill*.2}
// const calutip=bill=>bill>=50 && bill<=300?bill*.15:bill*.2
// const bill=[125,555,44]
// const tips=[calutip(bill[0]),calutip(bill[1]),calutip(bill[2])]