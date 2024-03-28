import {http} from "@/utils/http";


const getTable = async () => {
    const res = await http.get("/table");
    return res.data.data
}

export const tableService = {
    getTable,

}