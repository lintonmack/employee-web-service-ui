import React, {useState} from "react";
import {JSX} from "react";
import {EmployeeTable} from "../EmployeeTable/EmployeeTable";
import {IEmployeeModel} from "../../models/EmployeeModel";
import {getAllEmployees, getEmployeeById} from "../../services/EmployeeApiService";
import {EmployeeSearch} from "../EmployeeSearch/EmployeeSearch";
import {filter} from "domutils";

export const EmployeeTableWrapper: React.FC<{}> = (props): JSX.Element => {

    const [employees, setEmployees] = useState<IEmployeeModel[]>([]);
    const [employeeIdFilter, setEmployeeIdFilter] = useState<string>("");
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [httpError, setHttpError] = useState(null);

    React.useEffect((): void => {

        getAllEmployees()
            .then((response: IEmployeeModel[]): void => {
                setEmployees(response)
            })
            .catch((error: any) => {
                //setHttpError(error);
            });
        // setIsLoading(false);

    }, [])

    const performSearch = async(e): Promise<void> => {
        e.preventDefault();
        const filteredEmployees: IEmployeeModel = await getEmployeeById(employeeIdFilter);
        setEmployees([filteredEmployees]);
    }

    return (
        <div>
            <EmployeeSearch performSearch={performSearch} setEmployeeIdFilter={setEmployeeIdFilter}/>
            <EmployeeTable employees={employees}/>
        </div>
    )
}