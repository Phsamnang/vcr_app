import {http} from "@/utils/http";


const ServiceId = {
    MENU: '/menu',
    MENU_SALE: '/menu-sale',

}
const createMenu=async (d:any)=>{
    const  res=await http.post(ServiceId.MENU,d);
    return res.status
}
const getMenu=async (param: string | null)=>{
    const res=await http.get(ServiceId.MENU+`?cate_id=`+param)
    return res.data.data
}
const getMenuSale=async (param: string | null)=>{
    const res=await http.get(ServiceId.MENU_SALE+`?cate_id=`+param)
    return res.data
}
export  const menuService={
    createMenu,
    getMenu,
    getMenuSale
}