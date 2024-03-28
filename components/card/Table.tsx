import React from 'react';
import {Card} from 'antd';

const Table = ({data, setTable}: any) => {

    //  alert(`តើអ្នកជ្រើសរើសតុ ${t.name} មែនទេ?`)}>{t.name}
    return (
        <div>
            <Card title="ជ្រើសរើសតុ">
                {
                    data.map((t:any) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Card.Grid style={{
                                width: '20%',
                                textAlign: 'center',
                                background: t.status == 'available' ? '#d9f7be' : t.status == 'unavailable' ? '#ff7875' : '#ffe7ba'
                            }} onClick={() => setTable(t.id)} key={t.id}>{t.name}</Card.Grid>
                        );
                    })
                }

            </Card>
        </div>
    );
};

export default Table;