import {Employee} from "@/libs/types/Employee";
import {http} from "@/utils/http";

const ServiceId={
    EMPLOYEE:'/employee'
}

const getAllEmployee=async ():Promise<Employee[]>=>{
    const res=await http.get(ServiceId.EMPLOYEE);
    return res.data.data
}

export const serviceEmployee={
  getAllEmployee
}