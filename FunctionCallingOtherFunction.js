function cutFruits(fruits) {
    return fruits * 4;
}
function fruitsProcessor(apples, oranges) {
    const applePieces = cutFruits(apples);/*Calling the and saving the cutFruits Function inside the other function(fruitsProcessor) */
    const orangesPieces = cutFruits(oranges);/*Calling the and saving the cutFruits Function inside the other function(fruitsProcessor) */
    const Juice = (`Juice with ${applePieces} Apples and with ${orangesPieces} Oranges 😜💕😘`);
    return Juice;/*this will return the values */

}
console.log(fruitsProcessor(3, 4));