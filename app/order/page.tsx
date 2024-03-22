'use client'
import useFetchCategoryId from "@/libs/hooks/fetch-category-id";
import {useParams} from "next/navigation";
import {ItemCard} from "@/components/card/ItemCard";
import {NavBarMenu} from "@/components/navbar/NavBarMenu";
import useFetchMenus from "@/libs/hooks/fetch-all-menus";
import Table from "@/components/card/Table";
import {useQuery} from "@tanstack/react-query";
import {tableService} from "@/service/table.service";

const Item = () => {
    const {id} = useParams()

    const {data, isLoading} = useQuery({
        queryFn: () => tableService.getTable(),
        queryKey: ['table']
    })
    if (isLoading) return <span>សូមរងចាំ...</span>
    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <Table data={data}/>
                </div>

            </div>

            {/*   {
                data?.map(d=>(
                    <ItemCard data={d}/>
                ))
            }*/}


        </div>

    </>
}
export default Item