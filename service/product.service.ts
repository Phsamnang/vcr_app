import {http} from "@/utils/http";

const ServiceId = {
    PRODUCT: '/product',
}

const createProduct=async (requestBody:any)=>{
    const res=await http.post(ServiceId.PRODUCT,requestBody);
    return res.status;
}

export const productService={
    createProduct
}