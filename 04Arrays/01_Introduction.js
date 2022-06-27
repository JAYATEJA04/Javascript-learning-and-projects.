var countries = ["India", "Japan", "Singapore", "Switzerland"];
var indianStates = new Array("Telangana", "Rajasthan", "Karnataka", "Maharashtra");

// console.log(indianStates[0]);
// console.log(indianStates.length);

indianStates[0] = "Tamil Nadu";
// console.log(indianStates);

var user = ["Jaya", "jayateja@dev.co", 3, 34, true];
// console.log(user);

user.pop();
user.pop();

// console.log(user);
user.unshift("hey jaya teja");
// console.log(user);
user.shift();
user.shift();
console.log(user);

console.log(user.indexOf(3));

console.log(Array.from("Jaya"));