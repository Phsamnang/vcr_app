import {useQuery} from "@tanstack/react-query";
import {serviceEmployee} from "@/service/employee.service";

const useFetchInfoById=(id:number)=>{

    const query = useQuery({
        queryFn: () => serviceEmployee.getInfo(id),
        queryKey: ['attendance',id]
    })
    return {
        data:query.data,
        isLoading:query.isLoading,
        isError:query.error
    }
}

export default useFetchInfoById