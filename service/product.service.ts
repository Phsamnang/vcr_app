import {http} from "@/utils/http";

const ServiceId = {
    PRODUCT: '/product',
    PRODUCTS:'/products',
    STOCK:'/stock'
}

const createProduct=async (requestBody:any)=>{
    const res=await http.post(ServiceId.PRODUCT,requestBody);
    return res.status;
}
const getAllProducts=async ()=>{
    const res=await http.get(ServiceId.PRODUCTS);
    return res.data;
}

const addStock  =async(requestBody:any)=>{
    const res=await http.post(ServiceId.STOCK,requestBody);
    return res.status;
}
export const productService={
    createProduct,
    getAllProducts,
    addStock
}