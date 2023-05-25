import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {EmployeeTableBody} from "../EmployeeTableBody";
import {EmployeeModel, IEmployeeModel} from "../../../models/EmployeeModel";

describe('Employee Table Body', (): void => {

    let employeesProps: IEmployeeModel[] = [];

    beforeEach((): void => {
        const employee: IEmployeeModel = {
            name: "Test_User",
            gender: "M",
            address: "3 Fake Street",
            postcode: "M1",
            department: "Tech",
            salary: 23000.0,
            email: "test2test.com",
            employeeNumber: 5
        }

        employeesProps.push(employee);
    });

    afterEach((): void => {
        cleanup();
    })

    it('should render a table body element ', function () {
        render(
            <table>
                <EmployeeTableBody employees={employeesProps} />
            </table>
        )

        const tableBodyElement: HTMLElement = screen.getByRole("tbody");
        expect(tableBodyElement).toBeInTheDocument();

    });

    it('should contain a table row for each employee in the props', function () {
        render(
            <table>
                <EmployeeTableBody employees={employeesProps} />
            </table>
        )

        const tableBodyElement: HTMLElement = screen.getByRole("tbody");

        const tableRows: HTMLElement[] = screen.getAllByRole("row");
        for (let row of tableRows) {
            expect(tableBodyElement).toContainElement(row);
        }
    });
});