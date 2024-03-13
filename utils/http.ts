
import axios from "axios";
import {create} from "node:domain";
import {getSession, useSession} from "next-auth/react";
import {config} from "react-transition-group";

export const http=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL,
})

http.interceptors.request.use(
    async (config)=>{
        const session=await getSession();
        if (session){
            config.headers.Authorization=`Bearer ${session.user.token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)