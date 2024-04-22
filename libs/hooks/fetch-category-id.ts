'use client'
import {useQuery} from "@tanstack/react-query";
import {categoryService} from "@/service/category.service";

const useFetchCategoryId= (id: string | string[])=>{
    const query=useQuery({
        queryKey: ['category',id],
        queryFn:()=>categoryService.getCategoryById(id)
    })
    return {
        isLoading:query?.isLoading,
        isError:query?.isError,
        data:query?.data
    }
}

export  default  useFetchCategoryId