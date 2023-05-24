import React from "react";

export const EmployeeTableData: React.FC<{employeeAttribute: string}> = (props) => {
    return (
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{props.employeeAttribute}</td>
    )
}