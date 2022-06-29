var myMap = new Map();

myMap.set(1, "okkati");
myMap.set(2, "rendu");
myMap.set(3, "moodu");
myMap.set(4, "naalugu");


for(let key of myMap.keys()){
    console.log(`key is ${key}`);
}

console.log();

for(let value of myMap.values()){
    console.log(`value is ${value}`);
}

console.log();

for(let [key, value] of myMap){
    console.log(`the key is: ${key} and value is: ${value}`);
}

console.log();

myMap.forEach((value, key) => (console.log(`${value} and ${key}`)));