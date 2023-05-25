import React, {useState} from "react";
import {JSX} from "react";
import {EmployeeTable} from "../EmployeeTable/EmployeeTable";
import {IEmployeeModel} from "../../models/EmployeeModel";
import {getAllEmployees} from "../../services/EmployeeApiService";

export const EmployeeTableWrapper: React.FC<{}> = (props): JSX.Element => {

    const [employees, setEmployees] = useState<IEmployeeModel[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [httpError, setHttpError] = useState(null);

    React.useEffect((): void => {

        //getAllEmployees(setEmployees).catch(console.error);


        getAllEmployees()
            .then((response: IEmployeeModel[]): void => {
                console.log(response)
                setEmployees(response)
            })
            .catch((error: any) => {
                //setHttpError(error);
        });
       // setIsLoading(false);

    }, [])

    return (
        <EmployeeTable employees={employees}/>
    )
}