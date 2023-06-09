import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {EmployeeTableRow} from "../EmployeeTableRow";
import {IEmployeeModel} from "../../../models/EmployeeModel";


// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role
describe("Employee Table Row", (): void => {

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

    afterEach((): void => {
        cleanup();
    });

    it('should render a table row element', function (): void {
        render(
            <table>
                <tbody>
                    <EmployeeTableRow employee={employee} />
                </tbody>
            </table>
        )

        const tableRowElement: HTMLElement = screen.getByRole("row");
        expect(tableRowElement).toBeInTheDocument();
    });

    it('should contain a table data element for each employee atribute', function (): void {
        render(
            <table>
                <tbody>
                <EmployeeTableRow employee={employee} />
                </tbody>
            </table>
        )

        const tableRowElement: HTMLElement = screen.getByRole("row");
        const tableCellElement: HTMLElement[] = screen.getAllByRole("cell");
        expect(tableCellElement.length).toEqual(Object.keys(employee).length);

    });
});