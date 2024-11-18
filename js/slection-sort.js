function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the first unsorted element is the smallest
        let minIndex = i;

        // Check the rest of the array for a smaller element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update the index of the smallest element
            }
        }

        // Swap the smallest element with the first unsorted element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr; // Return the sorted array
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log("Unsorted Array:", numbers);
const sortedArray = selectionSort(numbers);
console.log("Sorted Array:", sortedArray);






let a = 'banana';
let b = 'orange';

[a, b] = [b, a];

console.log(a)
console.log(b)



