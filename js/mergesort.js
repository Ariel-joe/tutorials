// https://www.youtube.com/watch?v=wXZyuJqNk9U

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    // Compare each element of the two halves and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from the left array (if any)
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    // Add remaining elements from the right array (if any)
    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}

// // Example usage:
// const array = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(array));




// function mergeSort (arr) {
//     if (arr.length <= 1){
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge (leftArr, rightArr) {
//     const sortedArr = []

//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return [...sortedArr,...leftArr,...rightArr]
// }

// const arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(arr))

// for (let i = 1; i <= 5; i++){
//     console.log(i)
// }

// for (let i = 1; i <= 5; i++){
// return i;
// }


// function mergeSort(array) {

//     if (array.length <= 1) {
//         return array;
//     }

//     const mid = Math.floor(array.length / 2);
//     const left = array.slice(0, mid);
//     const right = array.slice(mid);

//     return merge(mergeSort(left), mergeSort(right));
// }




// function merge(left, right) {

//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//         result.push(left[leftIndex]);
//         leftIndex++; 
//         }

//         else {
//         result.push(right[rightIndex]);
//         rightIndex++; 
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }












//   // Example usage
//     const array = [38, 27, 43, 3, 9, 82, 10];
//     console.log("Original array:", array);
//     const sortedArray = mergeSort(array);
//     console.log("Sorted array:", sortedArray);





    function linearSearch (arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                return i;
            }
        }

        return -1;
    }
    const arr = [10, 20, 30, 40, 50];
    const target = 30;

    // algo that uses sorting(quick sort) and searching (binary search).
