// // print only the positive numbers of array.

// function printPositives(arr) {
//     return arr.forEach(function(number) {
//         if (number > 0) {
//             console.log(number);
//         }
//     });
// }

// console.log(printPositives([-2,1,-3,4]));

// // filter method to return a new array with only the positive numbers.

// function printPositives(arr) {
//   return arr.filter(function(number) {
//         if (number > 0) {
//             return number;
//         }
//     });
// }

// console.log(printPositives([-2,1,-3,4]));

// Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. 
// Your code will look something like: return arr.filter(...).forEach(...).

function printPositives(arr) {
    var filteredArray = arr.filter(function(num) {
        if (num > 0) {
            return num;
        }
    }).forEach(function(positiveNum) {
        if (positiveNum) {
        console.log(positiveNum);
        }
    });
}


// Write a function called filterArray that takes a callback function and an array as arguments. 
//Your filterArray function should return a new array that contains only the elements where 
//the callback function returns true.


function filterArray(arr) {
    return arr.filter(function(num) {
        if (num > 0) {
            return num}
        
    });
}


// Write a function called longestWord that takes a string as argument, and returns the longest word in the string.
//You should use Array.prototype.reduce to do your work. Hint: You can use String.prototype.split to split 
//the string into an array of words.

function longestWord(str) {
    var arrayOfWords = str.split(' ');
    return arrayOfWords.reduce(function(prev, next) {
        if (next.length > prev.length) {
            return next;
        } else {
            return prev;
        }
    }, "")

}

//console.log(longestWord("hi everyone how are iruegnreognroet you"));

//Write a function called countVowels that takes a string and returns the number of vowels in the string. 
//You should use Array.prototype.reduce to do your work. For the string "The quick brown fox", 
//the output should be 5 because there is one e, one u, one i and two os. Hint: You can use String.prototype.split
//again. There is a way to use it to split a string by character. Try to Google it :)
//Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current 
//letter is a vowel.

function countVowels(str) {
    var arrayOfCharacters = str.toLowerCase().split("");
    return arrayOfCharacters.reduce(function(acc, cur) {
       // next stores counter of vowels
       if (cur === "a" || cur === "e" || cur === "i" || cur === "o" || cur === "u") {
           return acc + 1;
       } else {
           return acc + 0;
       }
    }, 0);
    return acc;
}

//console.log(countVowels("The quick brown foxae"));

// Write a function called highLow that takes an array of numbers, and returns an object with a property 
// highest containing the highest number, and a property lowest containing the lowest number, using
// Array.prototype.reduce. For example, starting with [1, -10, 20, 40, 5], your function should return
// {highest: 40, lowest: -10}. Hint: Javascript has a special value called Infinity, which is higher than
// any other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)



function highLow(arr) {
        return arr.reduce(function(obj,number){
        if (number > obj.highest) {
         obj.highest = number
        } 
        if (number < obj.lowest) {
            obj.lowest = number;
        }
        return obj;
    }, {highest: -Infinity,
        lowest: Infinity
    });
}

// Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, and returns
//the highest, second highest, lowest, and second lowest numbers.
//For example, starting with [1, -10, 20, 40, 5], your function should return:

/*
1. write a function called highLowTwo that takes an array of numbers
2. implement reduce on array of numbers
3. reduce will take a callback whose parameters are prev/accumul and number to inspect
4. set second argument of highl2 func . Initialize object with infinity keys
5. if numtoinspect > obj.highest
*/
function highLowTwo(arr){
    return arr.reduce(function(objOfNumbers, numberToInspect) {
        if (numberToInspect > objOfNumbers.highest) {
            objOfNumbers.secondHighest = objOfNumbers.highest;
            objOfNumbers.highest = numberToInspect;
        } else if (numberToInspect > objOfNumbers.secondHighest) {
           objOfNumbers.secondHighest = numberToInspect; 
        }

        if (numberToInspect < objOfNumbers.lowest) {
            objOfNumbers.secondLowest = objOfNumbers.lowest;
            objOfNumbers.lowest = numberToInspect;
        } else if (numberToInspect < objOfNumbers.secondLowest) {
            objOfNumbers.secondLowest = numberToInspect;
        }
        return objOfNumbers
    }, {highest: -Infinity, secondHighest: -Infinity, lowest: Infinity, secondLowest: Infinity });
}

console.log(highLowTwo([1,2,3,4]));














    

