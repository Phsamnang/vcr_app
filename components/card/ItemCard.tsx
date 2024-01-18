
import classes from "./ItemCard.module.css";
export const ItemCard = ({data}) => {

    return <div className="col w-50 h-50">
            <div className="card w-auto">
                <img className="card-img-top w-100 border-bottom" src={data?.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title fs-6">{data?.productName}</h5>
                </div>
                <div className="card-footer">
                    <p className="fs-6 fw-bold">តម្លៃ <span className={classes.price}>{data?.rielPrice}</span></p>
                    <p className="fs-6 fw-bold">USD <span className={classes.price}>{data?.UsdPrice}</span></p>
                </div>
            </div>


    </div>
}