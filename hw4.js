//N1 for later
let array1 = [14, 150, "css", null, "javascript", 25];

//N2
let city = prompt("georgias capital city?").toLowerCase;
let cityAnswer = "tbilisi";
if (city === cityAnswer) {
  console.log("სწორია");
} else {
  console.log("error");
}
//N3
let array2 = ["hello1", 14, 24, "hello2"];

function nums(element) {
  return typeof element === "number";
}

let nums1 = array2.filter(nums);
console.log(nums1);
//N4
let languages = ["html", "css", "javascript", "python"];
function func1() {
  let longName = languages.filter((lang) => lang.length > 3);
  console.log(longName);
}
func1();
//N5
let words = ["Madrid", "rome", "Milan", "berlin "];
function func2() {
  let wordsArray = words.filter((wordi) => wordi.includes("M"));
  let wordsArray2 = words.filter((wordi) => wordi.includes("m"));
  console.log(`${wordsArray} ${wordsArray2}`);
}
func2();
//N6
let link = "https://google.com";
if (link.includes("https://")) {
  console.log("it do includes https");
} else {
  console.log("it do not");
}
//N7
let array7 = [5, 4, 3, 2, 1];
let newArray7 = array7.map((item) => item * 4);
console.log(newArray7);
//N8 comeback to this later
let stringNumber = "12345";
//N9
let numbers2 = [33, 422, 56, 53];
function reducer(acumilator, currentvallue) {
  return acumilator + currentvallue;
}

let numbersAnswer = numbers2.reduce(reducer);
console.log(numbersAnswer);
//N10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let arrayConteiner = arr1.concat(arr2).concat(arr3);
console.log(arrayConteiner);
//N11
let arrayMany = [1, 2, 3, 4, 5, 6, 6, 6, 7, 7];
let addStrwbary = arrayMany.splice(-1, 1, "strawberry");
console.log(arrayMany);
//N12
let info = "good day";
let infoSlice = info.slice(4);
console.log(infoSlice);
//N13
function string(element3) {
  let length = element3.length;
  console.log(length);
}
string("hello wolrd");
//N14
let array14 = [5, 25, 89, 120, 36];
array14.push("javascript", "pyton");
array14.unshift("html", "css");
let array14s = array14.slice(0, -1);
console.log(array14.length);
//N15
let array15 = ["banana", "orange", "kiwi"];
array15.push("apple", "pineapple");
array15.unshift("watermelon");
let removed = array15.splice(2, 0, "mango");
array15.shift();
array15.pop;
console.log(array15.length);
//N16
let array16 = [1, 2, 3, 4, 5];
let added = array16.splice(3, 0, "a", "b", "c");
console.log(array16);
//N17
let array17 = [15, 100, 25, 10, 36];
let remover = array17.splice(3, 1);
console.log(array17);
//N18
let array18 = [1, 2, 3, 4, 5];
let addedword = array18.splice(2, 1, "tree");
console.log(array18);
//N19 will be back

//N20
let array20 = [12, 25, 3, 6, 8, 14, 7, 23];
function times3(number20) {
  return number20 * 3;
}
let array20result = array20.map(times3);
console.log(array20result);
//N21
let array21 = ["apple", "orange", "mango", "kiwi"];
let addedFrut = array21.splice(2, 0, "starwberry", "avocado");
console.log(array21);
//N22
let numbers = [12, 56, 18, 35, 10];
function even(numberEven) {
  if (numberEven % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let evenResult = numbers.filter(even);
console.log(evenResult);
//N23
let array23 = [1, 2, 3, 4, 5];
function resultArray(acumilator1, currentvallue1) {
  return acumilator1 * currentvallue1;
}
let array23Result = array23.reduce(resultArray);
console.log(array23Result);
