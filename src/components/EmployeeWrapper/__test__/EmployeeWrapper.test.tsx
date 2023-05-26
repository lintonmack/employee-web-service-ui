import React from 'react';
import {render, screen, act} from '@testing-library/react';
import {jest} from '@jest/globals';
import {IEmployeeModel} from "../../../models/EmployeeModel";

jest.mock('../../../services/EmployeeApiService')
import {getEmployeeById, getQueryStringParam} from "../../../services/EmployeeApiService";
import {EmployeeWrapper} from "../EmployeeWrapper";

const mockGetQueryStringParam = getQueryStringParam as jest.Mock;
const mockGetEmployeeById = getEmployeeById as jest.Mock;

const mockEmployee: IEmployeeModel = {
    name: "Test_User",
    gender: "Male",
    address: "3 Fake Street",
    postcode: "M1",
    department: "Tech",
    salary: 23000,
    email: "test2test.com",
    employeeNumber: 2
};

describe("EmployeeViewWrapper", () => {
    it("should return the correct employee when rendered", async function () {

        // @ts-ignore
        mockGetQueryStringParam.mockResolvedValue("2");
        // @ts-ignore
        mockGetEmployeeById.mockResolvedValue(mockEmployee);

        await act(() => {
            render(<EmployeeWrapper/>)
        })

        const name = await screen.findByDisplayValue(mockEmployee.name);
        const gender = await screen.findByDisplayValue(mockEmployee.gender);
        const address = await screen.findByDisplayValue(mockEmployee.address);
        const postcode = await screen.findByDisplayValue(mockEmployee.postcode);
        const department = await screen.findByDisplayValue(mockEmployee.department);
        const salary = await screen.findByDisplayValue(mockEmployee.salary);
        const email = await screen.findByDisplayValue(mockEmployee.email);
        const employeeNumber = await screen.findByDisplayValue(mockEmployee.employeeNumber);

        expect(name).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
        expect(address).toBeInTheDocument();
        expect(postcode).toBeInTheDocument();
        expect(department).toBeInTheDocument();
        expect(salary).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(employeeNumber).toBeInTheDocument();
    });
});