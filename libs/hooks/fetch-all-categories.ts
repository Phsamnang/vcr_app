import {useQuery} from "@tanstack/react-query";
import {categoryService} from "@/service/category.service";

 const useFetchAllCategories=()=>{
    const query=useQuery({
        queryKey: ['categories'],
        queryFn:()=>categoryService.getAllCategories()
    })
    return {
        isLoading:query?.isLoading,
        isError:query?.isError,
        data:query?.data
    }
}
export default useFetchAllCategories