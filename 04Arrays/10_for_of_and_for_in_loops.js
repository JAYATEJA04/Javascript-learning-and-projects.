const names = ["Twitter", "LinkedIn", "Dev Community", "LCO"];

// for (const iterator of names) {
//     console.table(iterator);
// }


const symbols = {
    tw : "Twitter",
    ln : "LinkedIn",
    D : "DEV",
    LCO : "Learn Code Online",
};

for (const key in symbols) {
    // if (Object.hasOwnProperty.call(symbols, tw)) {
    //     const element = symbols[tw];
    // }

    console.log(`Key is ${key} and value is: ${symbols[key]}`);
}