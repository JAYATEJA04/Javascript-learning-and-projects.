var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    },
};

var jaya = Object.create(User)
console.log(jaya);
jaya.name = "Jaya"
jaya.getUserName();

//another way of creating objects in which we pass the properties while creating object
var sonu = Object.create(User, {
    name:{value: "Sonu"},
    courseCount: {value: 6},
})

sonu.getUserName();
