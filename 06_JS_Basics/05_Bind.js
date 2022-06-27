const Jaya = {
    firstName : "Jaya",
    lastName : "Teja",
    role : "Admin",
    courseCount : 4,
    getInfo : function(){
        console.log(`
        First name is : ${this.firstName}
        last name is : ${this.lastName}
        and the role is : ${this.role}
        and the number of courses enrolled are: ${this.courseCount}
        `);
    }
}

const sonu = {
    firstName : "Jaya Teja",
    lastName : "Akula",
    role : "user",
    courseCount : 5,
}

var value = Jaya.getInfo.bind(sonu);
console.log(value());