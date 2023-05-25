
export interface IEmployeeModel {
    name: string;
    gender: string;
    address: string;
    postcode: string;
    employeeNumber: number;
    department: string;
    salary: number;
    email: string;
}

export class EmployeeModel implements IEmployeeModel {
    private _name: string;
    private _gender: string;
    private _address: string;
    private _postcode: string;
    private _employeeNumber: number;
    private _department: string;
    private _salary: number;
    private _email: string;

    constructor(employeeModel?: IEmployeeModel) {
        this._name = employeeModel?.name ?? "";
        this._gender = employeeModel?.gender ?? "";
        this._address = employeeModel?.address ?? "";
        this._postcode = employeeModel?.postcode ?? "";
        this._employeeNumber = employeeModel?.employeeNumber ?? 0;
        this._department = employeeModel?.department ?? "";
        this._salary = employeeModel?.salary ?? 0;
        this._email = employeeModel?.email ?? "";
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