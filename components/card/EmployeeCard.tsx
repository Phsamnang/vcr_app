import classes from './employee.module.css'
import {Employee} from "@/libs/types/Employee";
const EmployeeCard = ({data}:Employee) => {
    return <>
        <div className="col-md-3">
            <div className={`${classes.panel} text-center card`}>
                <div className={classes.panelBody}>
                  {/*  <img
                        alt="Avatar"
                        className="img-md img-circle img-border mar-btm"
                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    />*/}
                    <h4 className={classes.marNo}>{data?.name}</h4>
                    <p>Project manager</p>

                    <div className={classes.padBtm}>
                        <button className="btn btn-primary">មក</button>
                        <button className="btn btn-danger">អត់មក</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default EmployeeCard