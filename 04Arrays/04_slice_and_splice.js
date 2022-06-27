var users = ["jaya", "teja", "akula", "sonu", "ajt"];
//console.log(users.slice(1,3));
//console.log(users);
console.log(users.slice(users.length - 1, 0));

users.splice(1, 2, 23);
console.log(users);