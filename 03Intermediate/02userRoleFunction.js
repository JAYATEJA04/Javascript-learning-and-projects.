/*
Define a function that can answer the role of a user
A user can be following roles:
admin - with all access
subadmin - with access to create/ delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role);
*/

var getUserRole = function(name, role){
    switch(role){
        case "admin":
            return `${name} is ${role} with all access.`;
        case "subadmin":
            return `${name} is a ${role} with all access to create/ delete courses.`;
        case "testPrep":
            return `${name} is a ${role} with access to create/ delete tests.`;
        case "user":
            return `${name} is a ${role} to consume content.`;

        default:
            return `${name} is a ${role} user.`;
    }
};

console.log(getUserRole("jaya teja", "user"));
var getRole = getUserRole("sonu", "trial");
console.log(getRole);
