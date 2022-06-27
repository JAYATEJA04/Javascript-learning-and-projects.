var name = "jaya teja";
console.log(`line no 2, ${name}`);

function sayMyName(){
    var name = "sonu";
    console.log(`line no 7, ${name}`);
    sayMyNameAgain();

    function sayMyNameAgain(){
        var name = "Mr. Jaya Teja";
        console.log(`line no 10, ${name}`);
    }
}
sayMyName();