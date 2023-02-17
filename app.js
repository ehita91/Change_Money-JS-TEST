// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar" this function is repeat
/*const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}*/

// those are my functions
function fromDollarToYen(amount) {
    return (amount/1.2) * 127.9; 
}

function fromEuroToDollar (amount) {
    return amount * 1.2;
}

function fromYanToPound (amount) {
    return (amount/127.9) * 0.8;
}

// just a console log for ourselves.
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {fromDollarToYen, fromEuroToDollar, fromYanToPound};

