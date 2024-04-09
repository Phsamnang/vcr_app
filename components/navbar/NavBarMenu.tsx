'use client'
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import {useMutation} from "@tanstack/react-query";
import {menuService} from "@/service/menu.service";
import ItemCard from "@/components/card/ItemCard";
import {Noto_Sans_Khmer} from '@next/font/google';

const notoSansKhmer = Noto_Sans_Khmer({subsets: ['khmer']});
export const NavBarMenu = ({saleId}:any) => {
    const allCategories = useFetchAllCategories()

    const {data, mutate: getMenu, isPending} = useMutation({
        mutationFn: (id: string) => menuService.getMenuSale(id),
        mutationKey:['menus']
    })


    return <div className={notoSansKhmer.className}>
        <ul className="nav nav-tabs">
            {
                allCategories.data?.map((c) => (
                    <li className="nav-item" key={c.categoryId}>
                        <a className="nav-link" aria-current="page" onClick={() => getMenu(String(c.categoryId))}>
                            {
                                c.categoryName
                            }
                        </a>

                        {/*<Link className="nav-link active" aria-current="page" href={`/${c.categoryId}`} >{c.categoryName}</Link>*/}
                    </li>

                ))
            }
        </ul>
        <div
            className="container-fluid bg-trasparent my-4 p-3"
            style={{position: "relative"}}
        >
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {
                    data?.data?.map((item: any) => (
                        // eslint-disable-next-line react/jsx-key
                      <ItemCard data={item} saleId={saleId}/>

                    ))
                }

            </div>
        </div>


    </div>
}