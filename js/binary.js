// algo that uses sorting(quick sort) and searching (binary search).

// let target = 55;


// mergesort

    function mergeSort (arr) {

        if (arr.length <= 1) {
            return arr;
        }
    
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
    
        return merge(mergeSort(left), mergeSort(right));
    }    


    function merge (left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while (leftIndex < left.length && rightIndex < right.length) {
    
            if(left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
    
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }


// sorted Array


const arr = [1, 13, 45, 32, 55, 67, 10, 33, 25, 3, 5];
var SortedArray = (mergeSort(arr));

console.log(SortedArray);


// binarySearch

function binarySearch (SortedArray, target) {

    let left = 0;
    let right = SortedArray.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
    
        if (SortedArray[middle] === target) {
            return middle; 
        }
    
        if (SortedArray[middle] < target) {
            left = middle + 1; 
        } else {
            right = middle - 1; 
        }
    }

    return -1;
}

let target = 25;
const result = binarySearch(SortedArray, target);

if (result !== -1) {
    console.log(`the target is at index: ${result}`) ;
}
else {
    console.log( "the target is not found");
}





