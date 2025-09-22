// N1
let testfunc = (...number) => {
  let num = 0;
  for (let item of number) {
    num += item;
  }
  console.log(num);
};
testfunc(10, 50, 6, 7, 8, 11, 6, 3, 9);

//N2
let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  isloggedin: true,
};

for (let item2 in user) {
  if (user.isloggedin === true) {
    console.log(`${user.firstname} ${user.lastname}`);
  } else {
    console.log(false);
  }
}
//N3
let testfunc2 = (...number2) => {
  console.log(Math.max(...number2));
};

testfunc2(10, 23, 44, 26, 145, 30);
//N4

let testfunc3 = (a) => {
  if (a % 2 === 0) {
    console.log("this number is even");
  } else {
    console.log("this number is odd");
  }
};

testfunc3(23);
