console.log(this);

var user = {
    firstnName : "Jaya",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 7", this);
        function sayHello(){
            console.log("hello");
            console.log("line 10", this);
        }
        sayHello();
    },
};

user.getCourseCount();