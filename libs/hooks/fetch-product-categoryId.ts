import {useQuery} from "@tanstack/react-query";
import {productService} from "@/service/product.service";

const useFetchProductByCategoryId = (id:any|null) => {
    if (id==null){
        id=1
    }
    const query = useQuery({
        queryKey: ['product',id],
        queryFn:()=> productService.getProductByCategoryId(id)
    })

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        data: query.data,
        error: query.error
    }

}
export default useFetchProductByCategoryId