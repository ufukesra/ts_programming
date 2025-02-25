import { Employee,greetings } from "./ClassAndObjects";

let employee1= new Employee("John Smith", 38, 500000);

console.log(employee1);
greetings();

employee1.work();
Employee.payTaxes();