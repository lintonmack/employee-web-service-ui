import React from "react";

export const TableHeading: React.FC<{heading: string}> = (props) => {
    return (
        <th role="table-heading" scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
            {props.heading}
        </th>
    )
}