
import {Component} from "react";
import classes from './ItemCard.module.css'
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import { Image } from 'antd';
const {Meta} = Card;

export class ItemCard extends Component<{ data: any }> {
    render() {
        let {data} = this.props;

        return <>
            <Card
                style={{width: 200}}
                cover={
                    <Image
                        width={200}
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
        </>

    }
}