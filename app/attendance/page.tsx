"use client"
import EmployeeCard from "@/components/card/EmployeeCard";
import useFetchEmployee from "@/libs/hooks/fetch-all-employee";
import React from "react";
import {Noto_Sans_Khmer} from '@next/font/google';
const notoSansKhmer = Noto_Sans_Khmer({subsets: ['khmer']});
export default function Home() {

    const {data, isLoading} = useFetchEmployee()
    if (isLoading) return <></>

    return <div className={notoSansKhmer.className}>

        <div className="row ">
            {
                data?.map((d) => (

                    <EmployeeCard emp={d}/>

                ))
            }
        </div>


    </div>
}