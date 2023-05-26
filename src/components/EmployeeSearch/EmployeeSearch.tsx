import React from "react";
import {IEmployeeModel} from "../../models/EmployeeModel";

export const EmployeeSearch: React.FC<{performSearch, setEmployeeIdFilter}> = (props) => {
    return (
        <div className="bg-white py-2 sm:py-2 lg:py-2">
            <div className="grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
                <form className="w-full max-w-md lg:col-span-5 lg:pt-2" onSubmit={props.performSearch}>
                    <div className="flex gap-x-4">
                        <label htmlFor="search" className="sr-only">
                            Search Employees By Employee Number
                        </label>
                        <input
                            onChange={(event) => {props.setEmployeeIdFilter(event.target.value)}}
                            id="search"
                            name="search"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter an employee number"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
