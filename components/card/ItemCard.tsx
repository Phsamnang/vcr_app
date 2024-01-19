
import classes from "./ItemCard.module.css";
import Image from "next/image";
export const ItemCard = ({data}) => {

    return <>
        <div className="card col" style={{maxWidth:180}}>
            <Image src={data?.image} className="card-img-top" width={180} height={140} />
            <div className="card-body">
                <h5 className="card-title">{data?.productName}</h5>
                <p className="card-text">
                    <span>Price {data?.rielPrice}</span>
                </p>

            </div>
        </div>

    </>

}