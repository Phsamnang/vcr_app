import {http} from "@/utils/http";

const ServiceId={
    LOGIN:'/auth/login'
}

const login = (data: any) => {
    console.log("hgelllo hunii")
    return http.post(ServiceId.LOGIN, data)
}

export  const authService={login}
