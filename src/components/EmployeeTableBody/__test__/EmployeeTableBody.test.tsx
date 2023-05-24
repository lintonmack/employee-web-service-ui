import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {EmployeeTableBody} from "../EmployeeTableBody";
import {EmployeeModel} from "../../../models/EmployeeModel";

describe('Employee Table Body', (): void => {

    let employeesProps: EmployeeModel[] = [];

    beforeEach((): void => {
        const employee: EmployeeModel =
            new EmployeeModel(
                "Test_User",
                "M",
                "3 Fake Street",
                "M1",
                5,
                "Tech",
                23000.0,
                "test2test.com");

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