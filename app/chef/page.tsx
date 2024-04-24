'use client'
import {useQuery} from "@tanstack/react-query";
import {saleService} from "@/service/sale.service";
import {Noto_Sans_Khmer} from "@next/font/google";
import {Button} from "antd";
import {SaleStatus} from "@/libs/types/SaleStatus";

const notoSansKhmer = Noto_Sans_Khmer({subsets: ['khmer']});
export default function Home() {
    const {data, isLoading} = useQuery({
        queryFn: () => saleService.getFoodsOrder(),
        queryKey: ['orderFood']
    })
    return <div className={notoSansKhmer.className}>
        <table className="table table-hover">
            {
                data?.map((f: any) => (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                        <td>{f.name}</td>
                        <td>{f.qty}</td>
                        <td>{f.table}</td>
                        <td>{f.status}</td>
                        <td>
                            <button type="button" className={`btn ${f.status==SaleStatus.WAIT?'btn-warning':f.status==SaleStatus.COOKING?'btn-info':''}`}>{f.status==SaleStatus.WAIT?'ចម្អិន':f.status==SaleStatus.COOKING?'រួចរាល់':''}</button>
                        </td>
                    </tr>
                ))
            }

        </table>
    </div>
}