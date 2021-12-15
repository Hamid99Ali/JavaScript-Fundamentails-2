const caluAverage = (a, b, c) => (a + b + c) / 3;
const dolphines = caluAverage(44, 23, 71);
const koalas = caluAverage(65, 54, 48);
function winner(dolphines, koalas) {
    if (dolphines >= 2 * koalas) {
        console.log(`The team Dolphines win with ${dolphines} from koalas ${koalas}`);
    } else if (koalas >= 2 * dolphines) {
        console.log(`The team Koalas win with ${koalas} from Dolphines ${dolphines}`);
    } else {
        console.log(`The match was draw ${dolphines} from Dolphines and ${koalas} from koalas`);
    };
} winner(200, 999)