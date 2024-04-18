import {http} from "@/utils/http";


const getTable = async () => {
    const res = await http.get("/table");
    return res.data.data
}
const getTableId = async (id:any) => {
    const res = await http.get("/table/"+id);
    return res.data.data
}

export const tableService = {
    getTable,
    getTableId

}