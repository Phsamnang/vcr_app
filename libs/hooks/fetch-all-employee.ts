import {useQuery} from "@tanstack/react-query";
import {serviceEmployee} from "@/service/employee.service";
const useFetchEmployee = () => {
    const query = useQuery({
        queryKey: ['employees'],
        queryFn: () => serviceEmployee.getAllEmployee()
    })
    return {
        data: query.data,
        isLoading: query.isLoading
    }
}

export default useFetchEmployee