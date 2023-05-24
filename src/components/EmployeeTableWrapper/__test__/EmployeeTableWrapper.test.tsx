import React from 'react';
import {render, screen} from '@testing-library/react';
import {EmployeeTableWrapper} from "../EmployeeTableWrapper";
import {jest} from '@jest/globals';
import {EmployeeModel} from "../../../models/EmployeeModel";


jest.mock('../../../services/EmployeeApiService')
import {getAllEmployees} from "../../../services/EmployeeApiService";

const mockedGetEmployees = getAllEmployees as jest.Mock;

const mockEmployees: EmployeeModel[] = [
    new EmployeeModel(
        "Test_User",
        "Male",
        "3 Fake Street",
        "M1",
        5,
        "Tech",
        23000,
        "test2test.com"
    )
];


describe("EmployeeTableWrapper", () => {
    it("should fetch employee data and update the employees state", async function () {

        // @ts-ignore
        mockedGetEmployees.mockResolvedValue(mockEmployees)

        const {debug} = render(<EmployeeTableWrapper/>);

        expect(getAllEmployees).toBeCalledTimes(1);

        const name = await screen.findByRole('cell', {name: /Test_User/i});
        const gender = await screen.findByRole('cell', {name: /Male/i});
        const address = await screen.findByRole('cell', {name: /3 Fake Street/i})
        const postcode = await screen.findByRole('cell', {name: /M1/i})
        const employeeNumber = await screen.findByRole('cell', {name: /5/i})
        const department = await screen.findByRole('cell', {name: /Tech/i})
        const salary = await screen.findByRole('cell', {name: /23000/i});
        const email = await screen.findByRole('cell', {name: /test2test.com/i})

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
