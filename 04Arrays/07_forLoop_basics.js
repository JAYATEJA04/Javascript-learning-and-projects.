const myStates = [
    "Telangana",
    "Andhra Pradesh",
    "Maharashtra",
    "Karnataka",
    2022,
    "Tamil Nadu",
];

for(let index = 0 ; index < myStates.length ; index++){
    if(typeof myStates[index] !== "string") continue;
    console.log(myStates[index]);
}