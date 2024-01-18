'use client'
import useFetchCategoryId from "@/libs/hooks/fetch-category-id";
import {useParams} from "next/navigation";
import {ItemCard} from "@/components/card/ItemCard";
import {NavBarMenu} from "@/components/navbar/NavBarMenu";

const Item = () => {
    const {id} = useParams()
    const {data} = useFetchCategoryId(id);

    return <>
        <NavBarMenu/>
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 g-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data?.products?.map((p) => (
                        <ItemCard data={p} key={p?.productId}/>
                    ))}
                </div>

            </div>
        </div>
    </>
}
export default Item