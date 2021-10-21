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
/* 2.4 */
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0 : 
    alert('Вы ввели число 0');
    break;
    case 1 :
        alert('Вы ввели число 1');
        break;
        case 2 :
        case 3 :
            alert('Вы ввели число 2, а может и 3');
            break;
        default : 
        alert('Вы ввели другое число');
        break;
}