// import the function sum from the app.js file
const {fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js');

// start your first test
test("One euro should be 1.2 dollars", function(){
    // use the function like its suppoed to be used
    const euro = fromEuroToDollar(3.5);

    // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(euro).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1000 dollars should be aprox 106.5 Yen", function(){
    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(1000);

    // if 1 dollar are (1 / 1.2) * 127.9 Yen, then 1000 dollar should be (1000 / 1.2) * 127.9 en Yen
    const expected = (1000 / 1.2) * 127.9; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 dollar are (1 / 1.2) * 127.9 Yen, then 1000 dollar should be = (1000 / 1.2) * 127.9
})

test("1000 Yen should be aprox 6.25 Pounds", function(){
    // use the function like its suppoed to be used
    const Yen = fromYanToPound(1000);

    // if 1 Yen are (1 / 127.9) * 0.8 Pounds, then 1000 Yen should be (1000 / 127.9) * 0.8
    const expected = (1000 / 127.9) * 0.8; 
    
    // this is the comparison for the unit test
     expect(Yen).toBe(expected); //1 Yen are (1 / 127.9) * 0.8 dolares, then 1000 Yen should be = (1000 / 127.9) * 0.8
})