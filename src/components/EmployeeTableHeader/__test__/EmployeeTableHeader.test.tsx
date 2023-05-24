import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {EmployeeTableHeader} from "../EmployeeTableHeader";

describe('Employee Table Header', (): void => {

    afterEach(():void => {
        cleanup();
    });

    it('should render a table head element with required column headings', function (): void {
         render(
             <table>
                 <EmployeeTableHeader />
             </table>
         )

         const tableHeaderElement: HTMLElement = screen.getByRole("thead");
         expect(tableHeaderElement).toBeInTheDocument();

    });

    it('should contain all 4 table head values', function (): void {

        render(
            <table>
                <EmployeeTableHeader/>
            </table>
        )

        const tableHeaderElement: HTMLElement = screen.getByRole("row");
        const tableHeaderEmployeeNumberElement: HTMLElement = screen.getByRole('columnheader', { name: /employee number/i });
        const tableHeaderEmployeeNameElement: HTMLElement = screen.getByRole('columnheader', { name: /name/i });
        const tableHeaderEmployeeEmailElement: HTMLElement = screen.getByRole('columnheader', { name: /email/i });
        const tableHeaderEmployeeDepartmentElement: HTMLElement = screen.getByRole('columnheader', { name: /department/i });
        const tableHeaderEmployeeSalaryElement: HTMLElement = screen.getByRole('columnheader', { name: /salary/i });
        const tableHeaderEmployeeGenderElement: HTMLElement = screen.getByRole('columnheader', { name: /gender/i });
        const tableHeaderEmployeeAddressElement: HTMLElement = screen.getByRole('columnheader', { name: /address/i });
        const tableHeaderEmployeePostcodeElement: HTMLElement = screen.getByRole('columnheader', { name: /postcode/i });

        expect(tableHeaderElement).toContainElement(tableHeaderEmployeeNumberElement);
        expect(tableHeaderElement).toContainElement(tableHeaderEmployeeNameElement);
        expect(tableHeaderElement).toContainElement(tableHeaderEmployeeEmailElement);
        expect(tableHeaderElement).toContainElement(tableHeaderEmployeeDepartmentElement);
        expect(tableHeaderElement).toContainElement(tableHeaderEmployeeSalaryElement);
        expect(tableHeaderElement).toContainElement(tableHeaderEmployeeGenderElement);
        expect(tableHeaderElement).toContainElement(tableHeaderEmployeeAddressElement);
        expect(tableHeaderElement).toContainElement(tableHeaderEmployeePostcodeElement);

    });
});