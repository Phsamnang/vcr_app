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
        <div className="container">
            <div className="col-sm-6 col-md-12 col-lg-12 g-4">

                    <div className="row card-deck">
                        {data?.products?.map((p) => (

                            <ItemCard data={p} key={p?.productId}/>

                        ))}
                    </div>

            </div>
        </div>

    </>
}
export default Item