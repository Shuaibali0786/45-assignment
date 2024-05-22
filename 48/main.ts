let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinePrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinePrices);


// let pricesSet1 = [1000, 2000, 3000];
// let pricesSet2 = [4000,  5000, 6000];

// let combinePrices = [...pricesSet1, ...pricesSet2] .sort((a, b) => a - b);

// console.log(combinePrices);