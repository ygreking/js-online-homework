const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]

// random array for testing:
// const arr = [144, 20, -5, 0, 2, 10, 41, 53, 4, 1, 7, -20, 56, 78];

// sorting flag:
let sorting;
// iterations counter:
let num = 0;

// let's
do {
    // a bubble sort!
    num++;
    sorting = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            sorting = true;
            // swapping elements without temp var:
            arr[i] += arr[i + 1];
            arr[i + 1] = arr[i] - arr[i + 1];
            arr[i] -= arr[i + 1];
        }
    }
    console.log('pass:', num, arr, 'sorting:', sorting);
} while (sorting);

console.log('sorted:', arr);
