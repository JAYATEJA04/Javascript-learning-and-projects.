var user = {
    firstName : "jaya",
    secondName : "teja",
    role : "admin",
    loginCount : 31,
    googleLogin : true,

    courseList : [],
    buyCourse : function (courseName){
        //"this" refers to the object user. It is refering to current variable courseList.
        this.courseList.push(courseName);
    },

    getCourseCount : function () {
        return `${this.firstName} ${this.secondName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("ReactJS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());