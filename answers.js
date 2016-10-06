// print only the positive numbers of array.

function printPositives(arr) {
    return arr.forEach(function(number) {
        if (number > 0) {
            console.log(number);
        }
    });
}

console.log(printPositives([-2,1,-3,4]));

// filter method to return a new array with only the positive numbers.

function printPositives(arr) {
   return arr.filter(function(number) {
        if (number > 0) {
            return number;
        }
    });
}

console.log(printPositives([-2,1,-3,4]));