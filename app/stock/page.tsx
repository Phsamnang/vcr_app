'use client'

import {useEffect, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {stockService} from "@/service/stock.service";
import NavBarProduct from "@/components/navbar/NavBarProduct";
import {Button} from "react-bootstrap";
import {http} from "@/utils/http";

import {filterSearch} from "@/libs/types/FilterSearchProps";
import {useRouter, useSearchParams} from "next/navigation";


export default function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const d = selectedDate?.toISOString().slice(0, 10);
    const useClient = useQueryClient();
    const router = useRouter()
    const params = useSearchParams()
    const date = params.get('date')
    console.log(date, "date")

    useEffect(() => {
        router.push("?date=" + d)
        //useClient.invalidateQueries({queryKey: ["stocks"]})
    }, [selectedDate]);

    const queryKey = ["stocks", date];
    const {data, isLoading} = useQuery({
            queryKey,
            queryFn: async () => {
                const re = await http.get("import?date=" + date);
                return re?.data.data
            }

        }
    );
    const {mutate: createImport} = useMutation({
        mutationFn: async () => await http.post("/import"),
        onSuccess: () => {
            useClient.invalidateQueries(['stocks'])
        }
    })
    if (isLoading) return <>Loading....</>
    return <>
        <head>
            <title>Stock</title>
        </head>
        <NavBarProduct/>
        <section className="md-3 row g-3 mt-2">
            <div className="mb-3 col-auto">
                <input className="form-control"
                       value={selectedDate.toISOString().slice(0, 10)}
                       onChange={(e) => setSelectedDate(new Date(e.target.value))}
                       type="date"/>
            </div>
            <div className="col-auto">

                <Button style={{
                    opacity: data ? '0.5' : '1',
                    cursor: data ? 'not-allowed' : '',
                }} onClick={() => createImport()} disabled={data}>{data?'Created':'Create New'}</Button>
            </div>
        </section>

    </>


}