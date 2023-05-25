import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {EmployeeTable} from "../EmployeeTable";
import {IEmployeeModel} from "../../../models/EmployeeModel";

describe('EmployeeTable', (): void => {

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

    it('should render a table element', (): void => {

        render(
            <EmployeeTable employees={employeesProps} />
        )

        const tableElement: HTMLElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument()

    });

    it('should render a table header element within the table element', function (): void {
        render(
            <EmployeeTable employees={employeesProps} />
        )

        const tableElement: HTMLElement = screen.getByRole("table");
        const tableHeaderElement: HTMLElement = screen.getByRole("thead");
        expect(tableElement).toContainElement(tableHeaderElement);

    });

    it('should render a table body element within the table element', function (): void {
        render(
            <EmployeeTable employees={employeesProps} />
        )

        const tableElement: HTMLElement = screen.getByRole("table");
        const tableBodyElement: HTMLElement = screen.getByRole("tbody");
        expect(tableElement).toContainElement(tableBodyElement);

    });
})
