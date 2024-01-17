import {Product} from "@/libs/types/Product";

export interface CategoryProduct {
    categoryId: number,
    categoryName: string,
    products: Product[]
}