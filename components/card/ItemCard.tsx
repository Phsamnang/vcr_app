"use client"
import React, {useState} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {saleService} from "@/service/sale.service";
import toast from "react-hot-toast";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {Input} from "antd";
import {UtilCurrency} from "@/utils/UtilCurency";
import {useSearchParams} from "next/navigation";

const ItemCard = ({data, saleId}: any) => {
    const useClient = useQueryClient();
    const [qty, setQty] = useState(0);
    const {mutate: order} = useMutation({
        mutationFn: (obj: any) => saleService.createOrder(obj),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ['allItems']
            })
            useClient.invalidateQueries({
                queryKey: ['menus']
            })
        },
        onError: error => {
            toast.error(error?.response.data.status.message)
            //  console.log()
        }

    })
    const param = useSearchParams();
    const tableId = param.get("table")
   // console.log("table id ",tableId)
    function handleOrder(menuId: any) {
        const obj = {
            'saleId': saleId,
            'menuId': menuId,
            'qty': qty,
            'tableId':tableId
        }
        order(obj)
        useClient.invalidateQueries({
            queryKey: ['allItems']
        })
    }


    return (
        <div>
            <Card sx={{maxWidth: 400, height: 300}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100"
                        image={data.image}
                        alt="....."
                        sx={{
                            img: {
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%'
                            }
                        }}
                    />

                </CardActionArea>
                <CardContent sx={{alignItems: 'center', justifyContent: 'center'}}>
                    <Typography gutterBottom variant="h6" component="div">
                        {data.name}
                    </Typography>
                    <Typography gutterBottom component="div">
                        តម្លៃ: <span className="text-warning">{UtilCurrency.RielCurrency(data.rielPrice)}</span>
                    </Typography>
                    <Input type="number" style={{
                        width: "100px",
                        height: "45px",
                        margin: '0 auto',
                        textAlign: 'center'
                    }} className="m-2" value={qty} onChange={(e) => setQty(e.target.value)}/>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => handleOrder(data.id)}>
                            កម្មង
                        </Button>
                    </CardActions>
                </CardContent>

            </Card>


            {/*  <main>

                <div className="col">

                    <div className="card h-100 shadow-sm">

                        <img
                            src={data.image}
                            className="card-img-top"
                            alt="..."
                            width="100%"
                        />
                        <div className="card-body">

                            <div className="clearfix mb-3">

                                <span className="float-start badge rounded-pill bg-primary">
                ASUS Rog
              </span>{" "}
                                <span
                                    className="float-end price-hp">{UtilCurrency.RielCurrency(data.rielPrice)}</span>{" "}
                            </div>

                            <h5 className="card-title">
                                {data.name}
                            </h5>
                            <div className="text-center my-4">
                                <Input type="number" style={{
                                    width: "125px",
                                    height: "50px"
                                }} className="m-2" value={qty} onChange={(e) => setQty(e.target.value)}/>
                                <button className="btn btn-warning" onClick={() => handleOrder(data.id)}>
                                    កម្មង
                                </button>
                            </div>

                        </div>

                    </div>

                </div>


            </main>*/}
        </div>
    );
};

export default ItemCard;