'use client'
import classes from './employee.module.css'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {serviceEmployee} from "@/service/employee.service";
import moment from 'moment';
import useFetchInfoById from "@/libs/hooks/fetch-info-by-id";
import {useEffect, useState} from "react";
import {width} from "dom-helpers";
import ShowDetail from "@/app/attendance/ShowDetail";
import {Image} from "antd";

const EmployeeCard = ({emp}: any) => {
    const queryCLient = useQueryClient()
    const {mutate: checkIn} = useMutation({
        mutationFn: () => serviceEmployee.checkIn(emp.id),
        onSuccess: () => {
            queryCLient.invalidateQueries({
                queryKey: ['attendance']
            })
        },
    })
    const {data} = useFetchInfoById(emp.id)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return <div className="col-md-3">
        <ShowDetail isShow={show} setIsShow={setShow}/>
        <div className="m-2">
            <div className="card" style={{width: "18rem"}}>
                <div className={`${classes.panel} text-center`}>
                    <div className="card-body" onClick={handleShow}>
                        <div className="view overlay">
                            <Image
                                alt="Avatar"
                                className="card-img-top"
                                src={emp.image}
                               width={200}
                                height={200}
                            />
                        </div>

                        <h4 className={classes.marNo}>{emp?.name}</h4>
                        <p>ម៉ោងចូល:<span
                            className={`${data ? 'text-success' : 'text-danger'}`}> {data ? moment(data?.checkin, 'HH:mm:ss').format('h:mm A') : 'មិនទាន់មកទេ'}</span>
                        </p>

                    </div>
                    <div className={classes.padBtm}>
                        <button className={`btn ${data ? 'btn-success' : 'btn-primary'} m-2`}
                                onClick={() => checkIn()}
                                disabled={data}>{data ? 'បានមក' : 'មក'}</button>
                        <button className="btn btn-danger">អត់មក</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
}

export default EmployeeCard