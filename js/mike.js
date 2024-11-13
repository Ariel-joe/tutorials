const arr =[9,8,4,6,7,2,1,5];
  function mergeSort(arr){
    if(arr.length <= 1){
      return arr;
    }
     const mid = Math.floor(arr.length / 2);
     const left = arr.slice (0,mid);
     const right = arr.slice (mid);
  

     return merge(mergeSort(left), mergeSort(right));
  }

    
    function merge(left,right){
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while(leftIndex < left.length && rightIndex < right.length){

        if(left[leftIndex] < right[rightIndex]){
          result.push (left[leftIndex]);
          leftIndex++;
        }else{
          result.push (right[rightIndex]);
          rightIndex++;
        }
      }
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

const sortedArr = (mergeSort(arr));
console.log(sortedArr)

  function binarySearch(sortedArr, target){
    let left = 0;
    let right = sortedArr.length - 1;

    while(left <= right){
      let middle = Math.floor((left + right ) / 2);
    
    if(sortedArr[middle] === target){
      return middle;
    }
    if(sortedArr[middle] < target){
      left = middle + 1;
    }
    else{right = middle - 1;
    }}
    return -1;
  }

  const target = 9;
  const result = binarySearch(sortedArr,target)

  if(result !== -1){
    console.log(`Element found at index: ${result}`)
  }
  else{
    console.log("Element not found");
}