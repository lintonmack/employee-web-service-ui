import {EmployeeModel} from "../../models/EmployeeModel";
import React from "react";
import {EmployeeTableRow} from "../EmployeeTableRow/EmployeeTableRow";

export const EmployeeTableBody: React.FC<{employees: EmployeeModel[]}> = (props) => {
    return (
        <tbody role="tbody" className="divide-y divide-gray-200">
        {
            props.employees.map((employee, index) => (
                <EmployeeTableRow key={index} employee={employee} />
            ))
        }
        </tbody>
    )
}