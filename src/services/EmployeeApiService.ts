import {IEmployeeModel} from "../models/EmployeeModel";

export async function getAllEmployees(): Promise<IEmployeeModel[]> {
    const baseUrl: string = "http://localhost:8080/employees";
    const response: Response = await fetch(baseUrl);
    const responseJson = await response.json();
    const employees: IEmployeeModel[] = [];

    for (let key in responseJson) {

        const employee: IEmployeeModel = {
            name: responseJson[key].name,
            gender: responseJson[key].gender,
            address: responseJson[key].address,
            postcode: responseJson[key].postcode,
            department: responseJson[key].department,
            salary: responseJson[key].salary,
            email: responseJson[key].email,
            employeeNumber: responseJson[key].employeeNumber
        }

        employees.push(employee);
    }
    return employees;
}

export async function getEmployeeById(id): Promise<IEmployeeModel> {
    const baseUrl: string = `http://localhost:8080/employee?id=${id}`;
    console.log(baseUrl)
    const response: Response = await fetch(baseUrl);
    const responseJson = await response.json();

    const employee: IEmployeeModel = {
        name: responseJson.name,
        gender: responseJson.gender,
        address: responseJson.address,
        postcode: responseJson.postcode,
        department: responseJson.department,
        salary: responseJson.salary,
        email: responseJson.email,
        employeeNumber: responseJson.employeeNumber
    }

    return employee;
}

export function getQueryStringParam() {
    const queryParams = new URLSearchParams(window.location.search)
    return queryParams.get("id");
}