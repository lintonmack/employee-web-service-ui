import {EmployeeModel} from "../models/EmployeeModel";

export async function getAllEmployees(): Promise<EmployeeModel[]> {
    const baseUrl: string = "http://localhost:8080/employees";
    const response: Response = await fetch(baseUrl);
    const responseJson = await response.json();
    const employees: EmployeeModel[] = [];

    for (let key in responseJson) {

        const emp: EmployeeModel = new EmployeeModel(
            responseJson[key].name,
            responseJson[key].gender,
            responseJson[key].address,
            responseJson[key].postcode,
            responseJson[key].department,
            responseJson[key].salary,
            responseJson[key].email,
            responseJson[key].employeeNumber
        );

        employees.push(emp);
    }
    return employees;
}
