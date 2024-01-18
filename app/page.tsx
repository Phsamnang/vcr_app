'use client'
import styles from './page.module.css'
import useFetchCategoryId from "@/libs/hooks/fetch-category-id";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import {ItemCard} from "@/components/card/ItemCard";
import {NavBarMenu} from "@/components/navbar/NavBarMenu";
import {Page} from "@/app/[id]/page";
export default function Home() {
    return (
        <main>
            <NavBarMenu/>
        </main>
    )
}
