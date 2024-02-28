import {useQuery} from "@tanstack/react-query";
import {productService} from "@/service/product.service";

const useFetchProducts = () => {
    const query = useQuery({
        queryKey: ['products'],
        queryFn: productService.getAllProducts
    })
    return {
        isLoading: query.isLoading,
        isError: query.isError,
        data: query.data,
        error: query.error
    }

}
export default useFetchProducts