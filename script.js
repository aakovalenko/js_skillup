/* Task 1 */

/*
Реализуйте класс Worker (Работник),
 который будет иметь следующие свойства:
 name (имя),
  surname (фамилия),
   rate (ставка за день работы),
    days (количество отработанных дней).
     Также класс должен иметь метод getSalary(),
      который будет выводить зарплату работника.
       Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.
*/

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

