import {CategoryProduct} from "@/libs/types/CategoryProduct";
import { http } from "@/utils/http";
import {MessageFormat} from "@/utils/message-format";

const ServiceId = {
       CATEGORY:'/category',
        CATEGORY_ID:'/category/{0}',
    }

const getCategoryById=async (id:number):Promise<CategoryProduct>=>{
    const response=await http.get(MessageFormat.format(ServiceId.CATEGORY_ID,id))
    return response?.data
}

export const categoryService={
getCategoryById
}
