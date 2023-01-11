const otherArray = [1, 2, 'green', 1842, 'solid', 91, 32, 111, 'red', 'blue', false, true];

const arrayNumbers = [];

for (let i = otherArray.length -1; i >= 0; i--) {
    arrayNumbers.push(i, otherArray[i]);
    // console.log(otherArray[i]);
}

console.log(arrayNumbers);

// LOOP IN LOOP

for (let lesson = 1; lesson < 4; lesson++) {
    console.log(`Урок ${lesson}`);

    for (let task = 1; task < 6; task++) {
        console.log(`Задача ${task}`);

        for (let subtask = 1; subtask < 11; subtask++) {
            console.log(`Подзадача ${subtask}`);
        }
    }
}