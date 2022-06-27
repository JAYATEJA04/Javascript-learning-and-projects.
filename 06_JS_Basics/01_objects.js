var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getCourseCount = function(){
        console.log(`${firstName}'s course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`Your firstname is: ${this.firstName}`);
}

var jaya = new User("jaya", 4);
// console.log(jaya);
jaya.getCourseCount();
if(jaya.hasOwnProperty("firstNamee")){
    jaya.getFirstName();
}

var sonu = new User("sonu", 6);
// console.log(sonu);
sonu.getCourseCount();
sonu.getFirstName();