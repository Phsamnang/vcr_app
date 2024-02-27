import {CategoryProduct} from "@/libs/types/CategoryProduct";
import {http} from "@/utils/http";
import {MessageFormat} from "@/utils/message-format";
import {Category} from "@/libs/types/Category";

const ServiceId = {
    CATEGORY: '/category',
    CATEGORY_ID: '/category/{0}',
    CATEGORIES:'/categories'
}

const getAllCategories = async (): Promise<Category[]> => {
    const response = await http.get(ServiceId.CATEGORIES);
    return response?.data
}

const getCategoryById = async (id: any): Promise<CategoryProduct> => {
    const response = await http.get(MessageFormat.format(ServiceId.CATEGORY_ID, id))
    return response?.data
}
const createCategory = async (requestBody: any) => {
    const res= await http.post(ServiceId.CATEGORY, requestBody);
    //console.log("service response ",res.status)
    return res.status
}
export const categoryService = {
    getCategoryById,
    getAllCategories,
    createCategory
}
