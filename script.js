/* Task 1 */

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Ben','Sherman', 350,20);
const worker2 = new Worker('Fred','Oneil', 375,22);

let SumOfSalary2Worker = worker1.getSalary() + worker2.getSalary();

 console.log(`Sum of salary worker - ${SumOfSalary2Worker}`);

/* Task 2 */

class MyString {

    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str) {
        if (!str) return str; 

        let newTempStrArray = str.split(' ');
        let newStr = [];

        for (let i of newTempStrArray) {
            newStr.push(this.ucFirst(i))
        } 

        return newStr.join(' ');
    }
}

let my_string = new MyString();

console.log(my_string.reverse("Hello World"));

console.log(my_string.ucFirst("kokonut"));

console.log(my_string.ucWords("kokonut bibonat serede pepepe"));


/* Task 3 */

class Validator {
    isEmail(email) {
        let regExp = /\S+@\S+\.\S+/;
        return regExp.test(email);
    }

    isDomain(domain) {
        let regExp = /([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+/;
        return regExp.test(domain);
    }

    isDate(date) {
        let regExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        return regExp.test(date);
    }

    isPhone(phone) {
        let regExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        return regExp.test(phone);
    }
}

const validator = new Validator();

let emailValidate = validator.isEmail('fuf@fuf.fu');
console.log(emailValidate);
let emailValidate2 = validator.isEmail('fuffuf.fu');
console.log(emailValidate2);

let domainValidate = validator.isDomain('www.domain.com');
console.log(domainValidate);

let dateValidate = validator.isDate('12.12.2020');
console.log(dateValidate);
let dateValidate2 = validator.isDate('12/12/2020');
console.log(dateValidate2);

let phoneValidate = validator.isPhone(0993456578);
console.log(phoneValidate);

let phoneValidate2 = validator.isPhone("+380993456578");
console.log(phoneValidate2);