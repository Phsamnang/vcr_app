import {http} from "@/utils/http";


const getOrderByTable = async (id: any) => {
    const res = await http.get("/sale/table/" + id)
    return res.data.data;
}
const createSale=async (id:any)=>{
    const res = await http.post("/sale" ,{
        "tableId":id
    })
    return res.status
}
export  const saleService={
    getOrderByTable,
    createSale
}