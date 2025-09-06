// first homework
let number = 100;

for (let i = 5; i <= number; i++) {
  console.log(i);
}

//second homework
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let idex = 0; idex < array1.length; idex++) {
  if (array1[idex] > 0 && array1[idex] < 10) {
    console.log(array1[idex]);
  }
}
// third homework
let array2 = [1, 2, 3, 4, 5];
let finalNumber = 0;

for (let item = 0; item < array2.length; item++) {
  finalNumber = finalNumber + array2[item];
  console.log(finalNumber);
}
// forth homework
let array3 = [1, 2, 3, 4, 5];
let averageNumber = 0;

for (let item2 = 0; item2 < array3.length; item2++) {
  averageNumber = averageNumber + array3[item2];
}
let average = averageNumber / array3.length;
console.log(average);
//5th homework
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);
// 6th homework
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (user.age > 18 && user2.studentstatus == "active") {
  console.log("hello user");
} else if (user2.name == "levani") {
  console.log(" hello levani");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("user active");
} else {
  console.log("error");
}
//7th homework
let array6 = [2, 3, 5, 1, 0, 25, 24, 11, 100, 6, 7, 10];
for (let index = 0; index < array6.length; index++) {
  const even = array6[index];
  if (even % 2 === 0) {
    console.log(even);
  }
}
//8th homework
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
for (let st = 0; st < users.length; st++) {
  if (users[st].status === true) {
    console.log(users[st]);
  }
}

//9th homework
let array7 = [32, 14, null, "40", 50];
for (let u = 0; u < array7.length; u++) {
  const num = array7[u];
  if (typeof num === "number" && num % 5 === 0) {
    console.log(num);
  }
}
//10th homework
let array8 = [
  [2, 3, 5, 11],
  [1, 35, 11],
  [12, 36, 24],
];
for (let w = 0; w < array8.length; w++) {
  for (let e = 0; e < array8[w].length; e++) {
    if (array8[w][e] > 30) {
      console.log(array8[w][e]);
    }
  }
}
