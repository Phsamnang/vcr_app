import {http} from "@/utils/http";


const getOrderByTable = async (id: any) => {
    const res = await http.get("/sale/table/" + id)
    return res.data.data;
}
const getFoodsOrder = async () => {
    const res = await http.get("/sale/chef")
    return res.data.data;
}
const createSale = async (id: any) => {
    const res = await http.post("/sale", {
        "tableId": id
    })
    return res.status
}
const removeItem = async (id: any) => {
    const res = await http.delete("sale/table/item/" + id)
    return res.status
}
const createOrder = async (obj: any) => {
    const res = await http.post("/order", obj);
    return res.status
}
const payment = async (id: any,money:number) => {
    const res = await http.put(`/sale/${id}?money=`+money);
    return res.status
}
const finishOrder = async (name:any) => {
    const res = await http.patch(`/table/${name}`);
    return res.status
}
export const saleService = {
    getOrderByTable,
    createSale,
    removeItem,
    createOrder,
    payment,
    finishOrder,
    getFoodsOrder
}