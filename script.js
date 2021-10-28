/**
 * Циклы
 */

/* Task 1 */
let someArr = [1, 2, 3, 4, 5];

for (const oneArr of someArr) {
  console.log(oneArr);
}

for (let i = 0; i < someArr.length; i++) {
  console.log(`Element - ${someArr[i]}`);
}

/* Task 2 */
let startNum = 2;
let lastNUm = 100;

for (startNum; startNum <= lastNUm; startNum++) {
  if (startNum % 2 == 0) console.log(startNum);
}

/* Task 3 */

let num1 = 0;
let num2 = 100;
let result = 0;

for (num1; num1 <= num2; num1++) {
  result += num1;
}
console.log(`RESULT - ${result}`);

/* Task 4 */

const employees = [
  {
    name: "Sam",
    salary: 100,
  },
  {
    name: "John",
    salary: 300,
  },
  {
    name: "Pier",
    salary: 400,
  },
  {
    name: "David",
    salary: 2020,
  },
  {
    name: "Jonathan",
    salary: 400,
  },
  {
    name: "Deny",
    salary: 2200,
  },
  {
    name: "Ken",
    salary: 500,
  },
  {
    name: "Samantha",
    salary: 100,
  },
  {
    name: "Mag",
    salary: 270,
  },
];

for (const employee of employees) {
  console.log(
    `Employee name: ${employee.name} | employee sallary: ${employee.salary}`
  );
}

/* Task 5 */

let start = 0;
let finish = 100;
let resultString = "";

for (start; start <= finish; start++) {
  if (start > 0) resultString += `-${start}`;
}
console.log(typeof resultString);
console.log(resultString);

/**
 * Функции
 */

/* Task 1 */

const cubeFunction = function (x) {
  return Math.pow(x, 3);
};
console.log(cubeFunction(3));

/* Task 2 */

function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isNumberInRange(4));
console.log(isNumberInRange(-4));

/* Task 3 */

const squereFunction = function (num) {
  return (num *= num);
};
console.log(squereFunction(4));

/* Task 4 */

function oneMinusTwoDivisionThree(a, b, c) {
  let result = (a - b) / c;
  return result;
}
console.log(oneMinusTwoDivisionThree(5, 2, 3));

/* Task 5 */

function isEven(someNum) {
  if (someNum % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));
console.log(isEven(5));

/* Task 6 */
function dayOfWeek(n) {
  switch (n) {
    case 1:
      console.log("Понедельник");
      break;
    case 2:
      console.log("Вторник");
      break;
    case 3:
      console.log("Среда");
      break;
    case 4:
      console.log("Четверг");
      break;
    case 5:
      console.log("Пятница");
      break;
    case 6:
      console.log("Суббота");
      break;
      case 7:
        console.log("Воскресенье");
        break;
    default :
    console.log("Неверное число");
  }
}
dayOfWeek(6);
dayOfWeek(2);

/* Task 7 */
let someString = "123456";
let newArrFromStr = [];
let result = '';

newArrFromStr.push(someString[1]);
newArrFromStr.push(someString[0]);
newArrFromStr.push(someString[3]);
newArrFromStr.push(someString[2]);
newArrFromStr.push(someString[5]);
newArrFromStr.push(someString[4]);

result = newArrFromStr.join('');

console.log(`${typeof result} - ${result}`);


