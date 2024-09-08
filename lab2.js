// Helper function to print results to the webpage
function printResult(title, result) {
    const resultsDiv = document.getElementById('results');
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `<h3>${title}</h3><p>${result}</p>`;
    resultsDiv.appendChild(resultElement);
}

// 27. Create a function to return distinct elements from an array
function distinctArray(arr) {
    return [...new Set(arr)];
}
printResult('Distinct Array:', distinctArray([1, 2, 2, 3, 4, 4, 5]));

// 28. Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function first100Primes() {
    let primes = [], num = 2, sum = 0;
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
            sum += num;
        }
        num++;
    }
    return { primes, sum };
}

const { primes: primesArray, sum: primesSum } = first100Primes();
printResult('First 100 Prime Numbers:', primesArray.join(', '));
printResult('Sum of First 100 Prime Numbers:', primesSum);

// 29. Print the distance between the first 100 prime numbers
function primeDistances() {
    const primes = first100Primes().primes;
    let distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }
    return distances;
}
printResult('Distances Between First 100 Primes:', primeDistances().join(', '));

// 30. Add two positive numbers of indefinite size as strings
function addLargeNumbers(num1, num2) {
    let carry = 0, result = [];
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    const maxLength = Math.max(num1.length, num2.length);

    for (let i = 0; i < maxLength || carry; i++) {
        const digit1 = +num1[i] || 0;
        const digit2 = +num2[i] || 0;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    return result.reverse().join('');
}
printResult('Sum of Large Numbers:', addLargeNumbers("123456789", "987654321"));

// 31. Function to return the number of words in a text
function wordCount(text) {
    return text.trim().split(/\s+/).length;
}
printResult('Word Count:', wordCount("This is a sample text with several words."));

// 32. Capitalize the first letter of each word in a text
function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}
printResult('Capitalized Text:', capitalizeWords("capitalize each first letter of this sentence"));

// 33. Calculate the sum of numbers in a comma-delimited string
function sumFromString(str) {
    return str.split(',').reduce((sum, num) => sum + parseFloat(num), 0);
}
printResult('Sum From Comma String:', sumFromString("1.5,2.5,3,4.5"));

// 34. Function that returns an array with words inside a text
function textToWords(text) {
    return text.trim().split(/\s+/);
}
printResult('Text to Words:', textToWords("Split this text into an array of words").join(', '));

// 35. Function to convert CSV text to a bi-dimensional array
function csvToArray(csv) {
    return csv.split('\n').map(row => row.split(','));
}
printResult('CSV to Array:', JSON.stringify(csvToArray("1,2,3\n4,5,6\n7,8,9")));

// 36. Function that converts a string to an array of characters
function stringToArray(str) {
    return str.split('');
}
printResult('String to Array:', stringToArray("hello").join(', '));

// 37. Function that converts a string to an array of ASCII codes
function stringToAsciiArray(str) {
    return str.split('').map(char => char.charCodeAt(0));
}
printResult('String to ASCII Codes:', stringToAsciiArray("hello").join(', '));

// 38. Function that converts an array of ASCII codes to a string
function asciiArrayToString(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}
printResult('ASCII Array to String:', asciiArrayToString([104, 101, 108, 108, 111]));

// 39. Implement the Caesar Cipher
function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, char => {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26) + base);
    });
}
printResult('Caesar Cipher:', caesarCipher("Hello World", 3));

// 40. Implement the bubble sort algorithm for an array of numbers
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
printResult('Bubble Sort:', bubbleSort([5, 3, 8, 4, 2]).join(', '));

// 41. Function to calculate the distance between two points
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
printResult('Distance Between Points:', distanceBetweenPoints(0, 0, 3, 4));

// 42. Function to check if two circles are intersecting
function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distance = distanceBetweenPoints(x1, y1, x2, y2);
    return distance <= r1 + r2;
}
printResult('Circles Intersecting:', areCirclesIntersecting(0, 0, 5, 8, 0, 3));

// 43. Extract a column from a bi-dimensional array
function extractColumn(arr, col) {
    return arr.map(row => row[col]);
}
printResult('Extract Column:', extractColumn([[1, 2], [3, 4], [5, 6]], 1).join(', '));

// 44. Convert a binary string to a number
function binaryToNumber(binaryStr) {
    return parseInt(binaryStr, 2);
}
printResult('Binary to Number:', binaryToNumber('1011'));

// 45. Sum all numbers in a jagged array
function sumJaggedArray(arr) {
    return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
}
printResult('Sum of Jagged Array:', sumJaggedArray([1, [2, [3, 4]], 5]));

// 46. Find the maximum number in a jagged array
function maxJaggedArray(arr) {
    return Math.max(...arr.flat(Infinity));
}
printResult('Max of Jagged Array:', maxJaggedArray([1, [2, [3, 4]], 5]));

// 47. Deep copy a jagged array
function deepCopyJaggedArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
const jaggedArray = [1, [2, [3, 4]], 5];
printResult('Deep Copy of Jagged Array:', JSON.stringify(deepCopyJaggedArray(jaggedArray)));

// 48. Return the longest word in a string
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
printResult('Longest Word:', longestWord("Find the longest word in this sentence"));

// 49. Shuffle an array of strings
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
printResult('Shuffled Array:', shuffleArray(['apple', 'banana', 'cherry', 'date']).join(', '));

// 50. Return n unique random numbers from 1 to n
function uniqueRandomNumbers(n) {
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    return shuffleArray(numbers).slice(0, n);
}
printResult('Unique Random Numbers:', uniqueRandomNumbers(10).join(', '));

// 51. Find the frequency of letters in a string
function letterFrequency(str) {
    const frequency = {};
    str.replace(/[a-z]/gi, char => {
        char = char.toLowerCase();
        frequency[char] = (frequency[char] || 0) + 1;
    });
    return Object.entries(frequency);
}
printResult('Letter Frequency:', JSON.stringify(letterFrequency('aabccddde')));

// 52. Calculate Fibonacci(500) with high precision
function fibonacci(n) {
    let a = BigInt(0), b = BigInt(1);
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
printResult('Fibonacci(500):', fibonacci(500).toString());

// 53. Calculate 70! with high precision
function factorial(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}
printResult('70!:', factorial(70).toString());
