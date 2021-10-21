/* Task1 */
let admin, name;
name = "Джон";
admin = name;
console.log(admin);

/* Task2 */
/* 2.1 */
let userNumber = prompt("Ведите число меньше 10", 0);
console.log(userNumber);
if (userNumber < 10) {
    alert("верно");
} else {
    alert("неверно");
}
/* 2.2 */
let message, login;

switch (login) {
    case  'Сотрудник' :
        message = 'Привет';
        console.log(message);
        break;
    case 'Директор' :
        message = 'Здравствуйте';
        console.log(message);
        break;
    default :
        message = 'Нет логина';
        console.log(message);
        break;
}
/* 2.3 */
let age;
age =45;
if (age >= 14 && age <= 90) {
    console.log ("верно");
} else {
    console.log ("неверно");
}