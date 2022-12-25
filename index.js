// 1. Remove the duplicate from string
function fun(str) {
  var unique = "";
  for (const iterator of str) {
    if (unique.includes(iterator) === false) {
      unique = unique + iterator;
    }
  }
  return unique;
}

// 2. remove the duplicate from array
let test = [1, 2, 3, 4, 4, 55, 55, 66, 66];
function find(arr) {
  let temp = [];
  for (const key of arr) {
    if (temp.includes(key)) {
      temp.push(key);
    }
  }
  return temp;
}
//console.log(find(arr));

// 3. remove common in
//str.split('').filter((item,index,arr)=> (arr.indexOf(item) == index))

//4. remove common with set

var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
const set = new Set(arr);
//console.log([...set]);

//5. remove comman if data type is differente
var myArray = ["a", 1, "a", 2, "1"];
let ans = myArray.filter(
  (val, index, arr) => arr.indexOf(Number(val)) === index
);

// 6. reverce the string

var scent = "India is my country";
const ans2 = scent.split(" ");
//console.log(ans2.reverse());

//7. split the string by word by word;
var str = "India is my country";
let ans7 = str.split("").reverse().join("").split(" ").reverse().join(" ");

//console.log(ans7);

//8. String reverse without using inbult function

var string8 = "India is my country";
for (let index = string8.length - 1; index > 0; index--) {
  const element = string8[index];
}

//9. Find factorial of user input number

function fact(num) {
  let t = 1;
  for (let i = 1; i <= num; i++) {
    t = t * i;
  }
  console.log(t);
}
//fact(5);

//10. find the  Anagram

function checkStringsAnagram() {
  var a = "Army";
  var b = "Mary";

  let ans1 = a.toLowerCase().split("").sort().join("");
  let ans2 = b.toLowerCase().split("").sort().join("");
  console.log(ans1 === ans2);
}

// 11 swapping the number

let a = 10;
let b = 20;

a = b + a; //30
b = a - b; //10
a = a - b;

// 12. palindrom

let num = "151";
function pandindrom(num) {
  let ans = num.split("").reverse().join("");
  console.log(ans);
}
//pandindrom(num);

// 13. To find longest word from a string

let tera = "yout hight is toooo short";

function longest(params) {
  let ans = params.split(" ");
  let short = 0;
  let word = "";

  for (const key of ans) {
    if (key.length > short) {
      short = key.length;
    }
  }
  // console.log(short); // for number
}
longest(tera);

// for word

function fun(para) {
  let array = para.split(" ");
  let ans = "";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.length > ans.length) {
      ans = element;
    }
  }
  console.log(ans);
}

fun(str);


//Code 17: To find vowels and its count in a given string

let vowels = ["a", "i", "e", "o", "u"];

var str = "aditya";

function voval(params) {
  var count = 0;
  var words =[];

  vowels.forEach((element) => {
    if (str.includes(element)) {
      count = count + 1;
      words.push(element)
    }
  });
  console.log(count,words);
}

voval(str);

//Code 18:To find character occurance fro the string

function characterOccurance(str, letter) {
  let count = 0;

  for (let index = 0; index < str.length-1; index++) {
    if (str.charAt(index) === letter) {
      count++;
    }
  }
  console.log(count);
}
characterOccurance("aditya", "a");
