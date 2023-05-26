import React, {useState} from "react";
import {IEmployeeModel} from "../../models/EmployeeModel";
import {getEmployeeById ,getQueryStringParam} from "../../services/EmployeeApiService";
import {EmployeeView} from "../EmployeeView/EmployeeView";


export const EmployeeWrapper: React.FC<{}> = (props) => {

    const [employee, setEmployee] = useState<IEmployeeModel>({
        name: "",
        gender: "",
        address: "",
        postcode: "",
        department: "",
        salary: 0,
        email: "",
        employeeNumber: 0
    });

    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [httpError, setHttpError] = useState(null);

    // ToDo redirect if query string is not valid

    React.useEffect((): void => {

        const id = getQueryStringParam();

        getEmployeeById(id)
            .then((response: IEmployeeModel): void => {
                console.log(response)
                setEmployee(response)
            })
            .catch((error: any) => {
                //setHttpError(error);
            });
        // setIsLoading(false);

    }, [])

    return (
        <div>
            <EmployeeView employee={employee} editMode={false}/>
        </div>
    )

}