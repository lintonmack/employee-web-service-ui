import React, {JSX} from "react";
import { useForm, Resolver } from 'react-hook-form';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import {IEmployeeModel} from "../../models/EmployeeModel";
import {EmployeeViewInput} from "../EmployeeViewInput/EmployeeViewInput";


export const EmployeeView: React.FC<{employee: IEmployeeModel, editMode: boolean}> = (props) => {

// ToDO add a resolver when submit is to be done
    const { register, handleSubmit, formState: { errors } } = useForm<IEmployeeModel>();


    return (

        <form>
            <div className="space-y-12 sm:space-y-16">
                <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                       Contains all information for the employee
                    </p>

                    <div
                        className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"employeeNumber"}
                            name={"Employee Number"}
                            register={register}
                            value={props.employee.employeeNumber} />
                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"name"}
                            name={"Name"}
                            register={register}
                            value={props.employee.name} />
                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"email"}
                            name={"Email"}
                            register={register}
                            value={props.employee.email} />
                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"department"}
                            name={"Department"}
                            register={register}
                            value={props.employee.department} />
                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"address"}
                            name={"Address"}
                            register={register}
                            value={props.employee.address} />

                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"postcode"}
                            name={"Postcode"}
                            register={register}
                            value={props.employee.postcode} />

                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"salary"}
                            name={"Salary"}
                            register={register}
                            value={props.employee.salary} />

                        <EmployeeViewInput
                            editMode={props.editMode}
                            attribute={"gender"}
                            name={"Gender"}
                            register={register}
                            value={props.employee.gender} />

                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}