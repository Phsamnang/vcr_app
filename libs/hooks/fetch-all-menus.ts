import {useQuery} from "@tanstack/react-query";
import {menuService} from "@/service/menu.service";

const useFetchMenus=(id:string|null)=>{
    if (id==null){
        id='1'
    }
    const query = useQuery({
        queryKey: ['menus',id],
        queryFn: () => menuService.getMenu(id)
    })
    return{
        data:query.data,
        isLoading:query.isLoading
    }
}
export default useFetchMenus