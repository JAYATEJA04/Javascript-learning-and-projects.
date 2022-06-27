// allow user to access course if he is:
// logged in from email
// logged in from google
// logged in from facebook

var email = true;
var facebook = false;
var google = true;

// if(email){
//     console.log("login sucess from email");
// }
// else if(facebook){
//     console.log("login success from fb.");
// }
// else{
//     console.log("login sucess from google.");
// }

if(email || facebook || google){
    console.log("login success");
}