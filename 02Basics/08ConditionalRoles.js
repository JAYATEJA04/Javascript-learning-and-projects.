// create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/ delete courses
// testprep - gets access to create/ delete tests
// user - gets access to consume content

var user = "admin";

switch(user){
    case "admin" :
        console.log("gets full access to the whole website");
        break;
    case "subAdmin":
        console.log("can create/ delete content");
        break;
    case "testPrep":
        console.log("can create/ delete tests.");
        break;
    case "user":
        console.log("gets access to consume content.");
        break;

    default:
        console.log("trial user.");
        break;

}