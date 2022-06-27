var sellingPrice = 199;
var listedPrice = 799;

var discountPrice = ((listedPrice - sellingPrice) / listedPrice) * 100;

console.log("Discount percentage is : " + Math.round(discountPrice));

var result = listedPrice > sellingPrice;

console.log(typeof result)