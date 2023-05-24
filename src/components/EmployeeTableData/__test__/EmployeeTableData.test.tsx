import {render, screen} from "@testing-library/react";
import {EmployeeTableData} from "../EmployeeTableData";

describe("Employee Table Data", () => {
    it('should render an employee data component with the necessary data', function () {

        render(
            <table>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <EmployeeTableData employeeAttribute={"The test user"} />
                    </tr>
                </tbody>
            </table>
        )

        const employeeName =  screen.getByRole('cell', {name: /the test user/i})
        expect(employeeName).toBeInTheDocument();

    });
})