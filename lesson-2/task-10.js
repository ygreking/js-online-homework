const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]

// number of swaps per iteration:
let swaps;
// iterations counter:
let num = 0;

// let's
do {
    // a reverse bubble sort!
    num++;
    swaps = 0;
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i - 1] > arr[i]) {
            swaps++;
            // swapping elements without temp var:
            arr[i] += arr[i - 1];
            arr[i - 1] = arr[i] - arr[i - 1];
            arr[i] -= arr[i - 1];
        }
    }
    console.log('pass:', num, arr, 'swaps:', swaps);
} while (swaps > 1);

console.log('sorted:', arr);
