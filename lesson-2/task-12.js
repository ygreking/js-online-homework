const array = [2, -1, -3, 15, 0, 4];
let sum = 0;

for (const value of array) {
    sum += value > 0 ? value : 0;
}
console.log(sum);
