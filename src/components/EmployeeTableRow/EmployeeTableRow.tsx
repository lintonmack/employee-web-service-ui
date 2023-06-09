import React from "react";
import {IEmployeeModel} from "../../models/EmployeeModel";
import {EmployeeTableData} from "../EmployeeTableData/EmployeeTableData";

export const EmployeeTableRow: React.FC<{employee: IEmployeeModel}> = (props) => {
    return (
        <tr key={props.employee.employeeNumber} data-testid="employee-record">
            <EmployeeTableData employeeAttribute={props.employee.employeeNumber.toString()} />
            <EmployeeTableData employeeAttribute={props.employee.name} />
            <EmployeeTableData employeeAttribute={props.employee.email} />
            <EmployeeTableData employeeAttribute={props.employee.department} />
            <EmployeeTableData employeeAttribute={props.employee.salary.toString()} />
            <EmployeeTableData employeeAttribute={props.employee.gender} />
            <EmployeeTableData employeeAttribute={props.employee.address} />
            <EmployeeTableData employeeAttribute={props.employee.postcode} />
        </tr>
    )
}