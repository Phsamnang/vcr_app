import axios from "axios";
import {create} from "node:domain";

export const http=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL
})