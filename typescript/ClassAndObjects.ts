export class Employee{
    public employeeName: string;
    public employeeAge:number;
    public employeeSalary: number;
    public static isEmployed:boolean;


    static{
        this.isEmployed=true;
    }
    constructor(name:string, age:number, salary:number){
        this.employeeName=name;
        this.employeeAge=age;  
        this.employeeSalary=salary;
    }

    public work():void{
        console.log(`${this.employeeName} is working`);
    }

    public static payTaxes(): void{
        console.log("Employee must pay taxes");
    }
}

export function greetings():void{
    console.log("Hello World!");
}