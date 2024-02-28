import {http} from "@/utils/http";

const ServiceId = {
    PRODUCT: '/product',
    PRODUCTS:'/products',
    PRICE:'/product/price'
}

const createProduct=async (requestBody:any)=>{
    const res=await http.post(ServiceId.PRODUCT,requestBody);
    return res.status;
}
const getAllProducts=async ()=>{
    const res=await http.get(ServiceId.PRODUCTS);
    return res.data;
}

const addPrice  =async(requestBody:any)=>{
    const res=await http.put(ServiceId.PRICE,requestBody);
    return res.status;
}
export const productService={
    createProduct,
    getAllProducts,
    addPrice
}