import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import {useState} from "react";
import Link from "next/link";


export const NavBarMenu = () => {
    const allCategories = useFetchAllCategories()
    return <>
        <ul className="nav nav-tabs">
            {
                allCategories.data?.map((c) => (
                    <li className="nav-item" key={c.categoryId}>
                        <a className="nav-link" aria-current="page">
                            {
                                c.categoryName
                            }
                        </a>

                        {/*<Link className="nav-link active" aria-current="page" href={`/${c.categoryId}`} >{c.categoryName}</Link>*/}
                    </li>

                ))
            }

        </ul>

    </>
}