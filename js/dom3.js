// function finder (element, index, array) {
//     array[index] = element
// }

// function display (element) {
//     console.log(element)
// }


    function power(element, index, array) {
        array[index] = Math.pow(element, 2);
    }

    let list = [1, 2, 3, 4, 5];
    console.log(list.forEach(power));
    console.log(list)
    



function change (arr) {
    return arr.map((element) => {

    if (element.toLowerCase() == 'hello') {
        return 'HELLO';
    }    
    else if (element.toLowerCase().includes('hurry')) {
        return element.split('').reverse('').join('');
    }

    return element;
})
}

let arr = ['hello', 'see', 'hurry up, and come', 'now', 'eat'];

console.log(change(arr))






