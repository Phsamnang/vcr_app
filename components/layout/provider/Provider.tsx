'use client'
import {PropsWithChildren, useState} from "react";
import {QueryClient} from "@tanstack/query-core";
import {fastRefreshReducer} from "next/dist/client/components/router-reducer/reducers/fast-refresh-reducer";
import {QueryClientProvider} from "@tanstack/react-query";
const Provider = ({children}: PropsWithChildren) => {
    const [useQueryClient] = useState(new QueryClient(
        {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        }
    ))
    return <QueryClientProvider client={useQueryClient}>
        {children}
    </QueryClientProvider>

}

export default Provider