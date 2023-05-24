export class EmployeeModel {
    private _name: string;
    private _gender: string;
    private _address: string;
    private _postcode: string;
    private _employeeNumber: number;
    private _department: string;
    private _salary: number;
    private _email: string;

    constructor(name: string, gender: string, address: string, postcode: string, employeeNumber: number, department: string, salary: number, email: string) {
        this._name = name;
        this._gender = gender;
        this._address = address;
        this._postcode = postcode;
        this._employeeNumber = employeeNumber;
        this._department = department;
        this._salary = salary;
        this._email = email;
    }


    get name(): string {
        return this._name;
    }

    get gender(): string {
        return this._gender;
    }

    get address(): string {
        return this._address;
    }

    get postcode(): string {
        return this._postcode;
    }

    get employeeNumber(): number {
        return this._employeeNumber;
    }

    get department(): string {
        return this._department;
    }

    get salary(): number {
        return this._salary;
    }

    get email(): string {
        return this._email;
    }
}