import {Employee} from "@/libs/types/Employee";
import {http} from "@/utils/http";


const ServiceId = {
    EMPLOYEE: '/employee',
    CHECKIN: '/checkin'
}

const getAllEmployee = async (): Promise<Employee[]> => {
    const res = await http.get(ServiceId.EMPLOYEE);
    return res.data.data
}

const checkIn = async (id: number) => {
    const res = await http.post(ServiceId.CHECKIN + `/${id}`)
}
const getInfo=async (id:number)=>{
 const res= await http.get("/info/"+id);
 return res.data.data;
}
export const serviceEmployee = {
    getAllEmployee,
    checkIn,
    getInfo
}