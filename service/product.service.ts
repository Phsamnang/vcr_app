import {http} from "@/utils/http";

const ServiceId = {
    PRODUCT: '/product',
    PRODUCTS:'/products'}

const createProduct=async (requestBody:any)=>{
    const res=await http.post(ServiceId.PRODUCT,requestBody);
    return res.status;
}
const getAllProducts=async ()=>{
    const res=await http.get(ServiceId.PRODUCTS);
    return res.data;
}

export const productService={
    createProduct,
    getAllProducts
}