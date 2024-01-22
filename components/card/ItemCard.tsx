import Image from "next/image";
import {Component} from "react";
import  classes from './ItemCard.module.css'

export class ItemCard extends Component<{ data: any }> {
    render() {
        let {data} = this.props;

        return <>
            <div className="card col" style={{maxWidth: 180}}>
                <Image src={data?.image} className="card-img-top" width={180} height={140} alt="food"/>
                <div className="card-body">
                    <h5 className="card-title">{data?.productName}</h5>
                    <p className="card-text">
                        <p>តម្លៃ <span className={`${classes.price} food-card_price`}> {data?.rielPrice}</span></p>
                        <p>USD <span className={`${classes.price} food-card_price`}> {data?.UsdPrice}</span></p>

                    </p>

                </div>
            </div>

        </>

    }
}