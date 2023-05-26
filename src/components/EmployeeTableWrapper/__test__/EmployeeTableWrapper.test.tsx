import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import {EmployeeTableWrapper} from "../EmployeeTableWrapper";
import {jest} from '@jest/globals';
import {IEmployeeModel} from "../../../models/EmployeeModel";


jest.mock('../../../services/EmployeeApiService')
import {getAllEmployees} from "../../../services/EmployeeApiService";
import {getEmployeeById} from "../../../services/EmployeeApiService";

const mockedGetEmployees = getAllEmployees as jest.Mock;
const mockGetEmployeeById = getEmployeeById as jest.Mock;

const mockEmployees: IEmployeeModel[] = [];
const mockEmployeeOne: IEmployeeModel = {
    name: "Test_User",
    gender: "Male",
    address: "3 Fake Street",
    postcode: "M1",
    department: "Tech",
    salary: 23000,
    email: "test2test.com",
    employeeNumber: 5
};

const mockEmployeeTwo: IEmployeeModel = {
    name: "Test_User2",
    gender: "Female",
    address: "5 Fake Street",
    postcode: "M2",
    department: "PR",
    salary: 27000,
    email: "test3test.com",
    employeeNumber: 3
};

mockEmployees.push(mockEmployeeOne, mockEmployeeTwo);

describe("EmployeeTableWrapper", () => {
    it("should fetch employee data and update the employees state", async function () {

        // @ts-ignore
        mockedGetEmployees.mockResolvedValue(mockEmployees)

        const {debug} = render(<EmployeeTableWrapper/>);

        expect(getAllEmployees).toBeCalledTimes(1);

        // for (let mockEmployee of mockEmployees) {
        //
        // }

        const name = await screen.findByRole('cell', {name: /^Test_User$/i});
        const gender = await screen.findByRole('cell', {name: /^Male$/i});
        const address = await screen.findByRole('cell', {name: /^3 Fake Street$/i})
        const postcode = await screen.findByRole('cell', {name: /^M1$/i})
        const employeeNumber = await screen.findByRole('cell', {name: /^5$/i})
        const department = await screen.findByRole('cell', {name: /^Tech$/i})
        const salary = await screen.findByRole('cell', {name: /^23000$/i});
        const email = await screen.findByRole('cell', {name: /^test2test.com$/i})

        expect(name).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
        expect(address).toBeInTheDocument();
        expect(postcode).toBeInTheDocument();
        expect(employeeNumber).toBeInTheDocument();
        expect(department).toBeInTheDocument();
        expect(salary).toBeInTheDocument();
        expect(email).toBeInTheDocument();

    });

    it('should filter the list of employees and return an employee with a specific id when the user searches', async function () {

        // @ts-ignore
        mockedGetEmployees.mockResolvedValue(mockEmployees);

        // @ts-ignore
        mockGetEmployeeById.mockResolvedValue(mockEmployeeTwo);

        render(<EmployeeTableWrapper/>);

        const numberOfEmployeeRecords = await screen.findAllByTestId("employee-record");

        expect(numberOfEmployeeRecords.length).toBe(2);

        const searchInput = screen.getByRole('textbox', {name: /search employees by employee number/i})
        const searchButton = screen.getByRole('button', {name: /search/i})

        await act(async() => {
            fireEvent.change(searchInput, {target: {value: "3"}});
            fireEvent.click(searchButton);
        })

        const name = await screen.findByRole('cell', {name: /^Test_User2$/i});
        const gender = await screen.findByRole('cell', {name: /^Female$/i});
        const address = await screen.findByRole('cell', {name: /^5 Fake Street$/i})
        const postcode = await screen.findByRole('cell', {name: /^M2$/i})
        const employeeNumber = await screen.findByRole('cell', {name: /^3$/i})
        const department = await screen.findByRole('cell', {name: /^PR$/i})
        const salary = await screen.findByRole('cell', {name: /^27000$/i});
        const email = await screen.findByRole('cell', {name: /^test3test.com$/i})

        const updatedEmployeeRecords = await screen.findAllByTestId("employee-record");
        expect(updatedEmployeeRecords.length).toBe(1);

        expect(name).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
        expect(address).toBeInTheDocument();
        expect(postcode).toBeInTheDocument();
        expect(employeeNumber).toBeInTheDocument();
        expect(department).toBeInTheDocument();
        expect(salary).toBeInTheDocument();
        expect(email).toBeInTheDocument();

    });
});

