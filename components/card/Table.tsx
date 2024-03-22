import React from 'react';
import {Card} from 'antd';


const Table = ({data}: any) => {
    console.log(data)
    const gridStyle: React.CSSProperties = {
        width: '20%',
        textAlign: 'center',
    };
    return (
        <div>
            <Card title="ជ្រើសរើសតុ">
                {
                    data.map(t => (
                        <Card.Grid style={{
                            width: '20%',
                            textAlign: 'center',
                            background: t.status == 'available' ? '#d9f7be' : t.status == 'unavailable' ? '#ff7875' : '#ffe7ba'
                        }}>{t.name}</Card.Grid>
                    ))
                }

            </Card>
        </div>
    );
};

export default Table;