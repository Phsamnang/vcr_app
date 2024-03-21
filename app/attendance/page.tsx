"use client"
import EmployeeCard from "@/components/card/EmployeeCard";
import useFetchEmployee from "@/libs/hooks/fetch-all-employee";
import {useEffect} from "react";
import {Howl} from 'howler'
export default function Home() {

    const {data, isLoading} = useFetchEmployee()
    if (isLoading) return <></>

    return <>

        <div className="row ">
            {
                data?.map((d) => (

                    <EmployeeCard emp={d}/>

                ))
            }
        </div>


    </>
}