import {Component} from "react";
import classes from './ItemCard.module.css'
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import {Image} from 'antd';
import {UtilCurrency} from "@/utils/UtilCurency";

const {Meta} = Card;

export class ItemCard extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        /* return <div className="col">
             <Card
                 style={{width: 150}}
                 cover={
                     <Image
                         width={150}
                         height={150}
                         src={data.image}
                     />
                 }
                 actions={[
                     <SettingOutlined key="setting"/>,
                     <EditOutlined key="edit"/>,
                     <EllipsisOutlined key="ellipsis"/>,
                 ]}
             >
                 <Meta
                     title={data.name}

                 />
                 <Meta
                     title={`តម្លៃ ${data.rielPrice}`}
                 />
             </Card>
         </div>*/
        return <>
            <main>



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

                                        {/*<span className="float-start badge rounded-pill bg-primary">
                ASUS Rog
              </span>{" "}*/}
                                        <span
                                            className="float-end price-hp">{UtilCurrency.RielCurrency(data.rielPrice)}</span>{" "}
                                    </div>

                                    <h5 className="card-title">
                                        {data.name}
                                    </h5>
                                    <div className="text-center my-4">

                                        <a href="#" className="btn btn-warning">
                                            Check offer
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>



            </main>

        </>

    }
}