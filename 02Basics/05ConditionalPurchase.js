//user is only allowed to make a purchase when he/she is:
// logged in
// email verified
// card info - valid
// if anyone is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged In sucess");
//     if(isEmailVerified){
//         console.log("email is verified.");
//         if(cardInfo){
//             console.log("you can make a purchase.");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("start learning.");
}
else{
    console.log("kindly buy the course to proceed further.");
}