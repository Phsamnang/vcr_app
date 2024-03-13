"use client"
import EmployeeCard from "@/components/card/EmployeeCard";
import useFetchEmployee from "@/libs/hooks/fetch-all-employee";

export default function Home() {
    const {data, isLoading} = useFetchEmployee()
    if (isLoading) return <></>
    console.log(data)
    return <>

        <div className="d-flex flex-row">
            {
                data?.map((d) => (

                    <EmployeeCard data={d}/>


                ))
            }
        </div>


    </>
}