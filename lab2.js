// Hàm in kết quả ra màn hình
const Output = (question, value) => {
  const outputDiv = document.getElementById("nhap");
  outputDiv.innerHTML += `<div class="display"><span>${question} ${value}</span></div>`;
};

// 27. Hàm loại bỏ các phần tử trùng lặp trong mảng
const removeDuplicates = (arr) => [...new Set(arr)];
Output(27, ". Tạo một hàm sẽ nhận một mảng số làm đối số và trả về một mảng mới với các phần tử riêng biệt:");
const numbers = [1, 2, 2, 3, 4, 4, 5];
Output(" Mảng nhập vào: ", numbers);
const uniqueNumbers = removeDuplicates(numbers);
Output(" Mảng riêng biệt:", uniqueNumbers);

// 28. Tính tổng của 100 số nguyên tố đầu tiên và trả về chúng trong một mảng
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const getFirstNPrimes = (n) => {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
};

const sumOfArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

Output(28, ". Tính tổng của 100 số nguyên tố đầu tiên:");
const numberOfPrimes = 100;
const primes = getFirstNPrimes(numberOfPrimes);
const sum = sumOfArray(primes);
Output("Số nguyên tố:", primes);
Output("Tổng của các số nguyên tố:", sum);

// 29. In khoảng cách giữa 100 số nguyên tố đầu tiên
const getPrimeGaps = (primes) => {
  const gaps = [];
  for (let i = 1; i < primes.length; i++) {
    gaps.push(primes[i] - primes[i - 1]);
  }
  return gaps;
};

Output(29, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
const primeGaps = getPrimeGaps(primes);
Output("Khoảng cách giữa các số nguyên tố:", primeGaps);

// 30. Hàm cộng hai số lớn dưới dạng chuỗi
const addLargeNumbers = (a, b) => {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--], 10);
    if (j >= 0) sum += parseInt(b[j--], 10);
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  return result;
};

Output(30, ". Tổng của 123456789 và 987654321 là:");
Output("ket qua:", addLargeNumbers("123456789", "987654321"));

// 31. Hàm đếm số từ trong một văn bản
const countWords = (text) => text.trim().split(/\s+/).length;
Output(31, ". Số từ trong văn bản là:");
Output("ket qua:", countWords("Hello, how are you?"));

// 32. Viết hoa chữ cái đầu tiên của mỗi từ trong văn bản
const capitalizeWords = (text) => text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
Output(32, ". Chữ cái đầu viết hoa:");
Output("ket qua:", capitalizeWords("hello, how are you?"));

// 33. Tính tổng các số trong chuỗi phân cách bằng dấu phẩy
const sumCSVNumbers = (csv) => csv.split(",").reduce((sum, num) => sum + parseFloat(num), 0);
Output(33, ". Tổng các số trong chuỗi là:");
Output("ket qua:", sumCSVNumbers("1,2,3,4,5"));

// 34. Chuyển đổi văn bản thành mảng các từ
const wordsArray = (text) => text.trim().split(/\s+/);
Output(34, ". Mảng các từ trong văn bản:");
Output("ket qua:", wordsArray("Hello, how are you?"));

// 35. Chuyển đổi CSV thành mảng hai chiều
const csvToArray = (csvText) => csvText.split("\n").map((row) => row.split(","));
Output(35, ". Mảng hai chiều từ CSV:");
Output("ket qua:", csvToArray("a,b\nc,d\n"));

// 36. Chuyển chuỗi thành mảng ký tự
const stringToCharArray = (str) => str.split("");
Output(36, ". Mảng ký tự:");
Output("ket qua:", stringToCharArray("hello"));

// 37. Tạo một hàm sẽ chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự
Output(37, ". Tạo một hàm sẽ chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự:");
const stringToAsciiArray = (str) => str.split("").map((char) => char.charCodeAt(0));
Output("ket qua:", stringToAsciiArray("hello"));

// 38. Tạo một hàm sẽ chuyển đổi mảng chứa mã ASCII thành chuỗi
Output(38, ". Tạo một hàm sẽ chuyển đổi mảng chứa mã ASCII thành chuỗi:");
const asciiArrayToString = (arr) => arr.map((code) => String.fromCharCode(code)).join("");
Output("ket qua:", asciiArrayToString([104, 101, 108, 108, 111]));

// 39. Triển khai mã hóa Caesar
Output(39, ". Triển khai mã hóa Caesar:");
const caesarCipher = (str, shift) => {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  });
};
Output("ket qua:", caesarCipher("Hello World", 3));

// 40. Triển khai thuật toán sắp xếp nổi bọt cho mảng số
Output(40, ". Triển khai thuật toán sắp xếp nổi bọt cho mảng số:");
const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
Output("ket qua:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// 41. Tạo một hàm để tính khoảng cách giữa hai điểm
Output(41, ". Tạo một hàm để tính khoảng cách giữa hai điểm được xác định bởi tọa độ x, y của chúng:");
const distanceBetweenPoints = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
Output("ket qua:", distanceBetweenPoints(1, 1, 2, 2));

// 42. Tạo một hàm sẽ trả về giá trị Boolean cho biết hai vòng tròn có giao nhau không
Output(42, ". Tạo một hàm sẽ trả về giá trị Boolean cho biết hai vòng tròn có giao nhau không:");
const circlesIntersect = (x1, y1, r1, x2, y2, r2) => Math.hypot(x2 - x1, y2 - y1) < r1 + r2;
Output("ket qua:", circlesIntersect(1, 1, 1, 2, 2, 1));

// 43. Tạo một hàm để trích xuất cột được chỉ định bởi số
Output(43, ". Tạo một hàm để trích xuất cột được chỉ định:");
const extractCol = (matrix, col) => matrix.map((row) => row[col]);
Output("ket qua:", extractCol([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1));

// 44. Tạo một hàm để chuyển đổi chuỗi nhị phân thành số
Output(44, ". Tạo một hàm để chuyển đổi chuỗi nhị phân thành số:");
const binaryToNumber = (binary) => parseInt(binary, 2);
Output("ket qua:", binaryToNumber("1101"));

// 45. Tạo một hàm để tính tổng của tất cả các số trong mảng răng cưa
Output(45, ". Tạo một hàm để tính tổng của tất cả các số trong mảng răng cưa:");
const sumNestedArray = (arr) => arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
Output("ket qua:", sumNestedArray([1, [2, [3, [4]]]]));

// 46. Tìm số lớn nhất trong mảng răng cưa
Output(46, ". Tìm số lượng lớn nhất trong mảng răng cưa:");
const maxNestedArray = (arr) => Math.max(...arr.flat(Infinity));
Output("ket qua:", maxNestedArray([1, [2, [3, [4]]]]));

// 47. Sao chép sâu một mảng răng cưa
Output(47, ". Sao chép sâu một mảng răng cưa:");
const deepCopy = (arr) => JSON.parse(JSON.stringify(arr));
Output("ket qua:", deepCopy([1, [2, [3, [4]]]]));

// 48. Tạo một hàm để trả về từ dài nhất trong một chuỗi
Output(48, ". Tạo một hàm để trả về từ dài nhất trong một chuỗi:");
const longestWord = (str) => str.split(" ").reduce((longest, word) => (word.length > longest.length ? word : longest), "");
Output("ket qua:", longestWord("The quick brown fox jumps over the lazy dog"));

// 49. Xáo trộn một mảng các chuỗi
Output(49, ". Xáo trộn một mảng các chuỗi:");
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
Output("ket qua:", shuffleArray(["a", "b", "c", "d"]));

// 50. Tạo một hàm để trả về mảng n số ngẫu nhiên duy nhất từ 1 đến n
Output(50, ". Tạo một hàm sẽ nhận n làm đối số và trả về một mảng n:");
const randomNumbers = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * n) + 1);
Output("ket qua:", randomNumbers(5));

// 51. Tìm tần suất của các chữ cái trong chuỗi
Output(51, ". Tìm tần suất của các chữ cái trong chuỗi:");
const charFrequency = (str) => Object.entries(str.split("").reduce((acc, char) => (acc[char] = acc[char] + 1 || 1, acc), {}));
Output("ket qua:", charFrequency("hello"));

// 52. Tính Fibonacci(500) với độ chính xác cao
Output(52, ". Tính Fibonacci(500) với độ chính xác cao:");
const fibonacci = (n) => {
  let a = 1n, b = 0n, temp;
  while (n >= 0) {
    temp = a;
    a += b;
    b = temp;
    n--;
  }
  return b;
};
Output("ket qua:", fibonacci(500));

// 53. Tính 70! với độ chính xác cao
Output(53, ". Tính 70! với độ chính xác cao:");
const factorial = (n) => {
  let result = BigInt(1);
  for (let i = 1n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
};
Output("ket qua:", factorial(70));
