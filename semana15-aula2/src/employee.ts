export abstract class Employee {
    public name: string;
    public payment: number;
    static employees: number;

    constructor(name: string, payment: number, employees: number){
        this.name = name;
        this.payment = payment;
        Employee.employees = employees;
    }

    public abstract sayJob(): void;

}