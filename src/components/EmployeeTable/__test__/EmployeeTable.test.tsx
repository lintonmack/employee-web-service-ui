import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {EmployeeTable} from "../EmployeeTable";
import {EmployeeModel} from "../../../models/EmployeeModel";

describe('EmployeeTable', (): void => {

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
