function bubbleSort (arr) {
    let n = arr.length;

    for (let i = 0; i < n-1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let arr = [2, 9, 4, 8, 8 , 10, 12, 6, 13, 25, 14]

// console.log(arr)
console.log(bubbleSort(arr))

