
import classes from "./ItemCard.module.css";
export const ItemCard = ({data}) => {

    return <>
        <div className="card col" style={{maxWidth:180}}>
            <img src={data?.image} className={`card-img-top w-100 ${classes.img}`} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data?.productName}</h5>
                <p className="card-text">
                    <span>Price {data?.rielPrice}</span>
                </p>

            </div>
        </div>

    </>

}