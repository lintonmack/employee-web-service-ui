import React, {useState} from "react";
import {IEmployeeModel} from "../../models/EmployeeModel";
import {getEmployeeById} from "../../services/EmployeeApiService";


export const EmployeeWrapper: React.FC<{}> = (props) => {

    const [employee, setEmployee] = useState<IEmployeeModel>( {
        name: "",
        gender: "",
        address: "",
        postcode: "",
        department: "",
        salary: 0,
        email: "",
        employeeNumber: 0
    });

    const queryParams = new URLSearchParams(window.location.search)
    const id = queryParams.get("id")
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [httpError, setHttpError] = useState(null);

    React.useEffect((): void => {

            getEmployeeById(id)
                .then((response: IEmployeeModel): void => {
                    setEmployee(response)
                })
                .catch((error: any) => {
                    //setHttpError(error);
                });
       // setIsLoading(false);

    }, [])

    if (employee.employeeNumber !== 0) {
        return (
            <div>
                {employee.name}
            </div>
        )
    }

    return (
        <div>
            No Employees
        </div>
    )
}