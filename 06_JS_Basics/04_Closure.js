function doAddition(X){
    return function(Y){
        return X + Y;
    }
}

add4 = doAddition(16);
console.log(add4(4));