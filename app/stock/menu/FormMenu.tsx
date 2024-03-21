"use client"
import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload
} from 'antd';
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";




type SizeType = Parameters<typeof Form>[0]['size'];

const normFile = (e: any) => {
    /* if (Array.isArray(e)) {
         return e;
     }*/
    return e?.fileList;
};
const FormMenu = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const {data, isLoading} = useFetchAllCategories()
    const onFormLayoutChange = ({size}: { size: SizeType }) => {
        setComponentSize(size);
    };
    const [size, setSize] = useState<SizeType>('large')
const [form]=Form.useForm()
    const onFinish = (values:any) => {
        console.log('Form values:', values);

     form.resetFields()
        // Here you have access to all input values
    };
    return (
        <div>
            <Form onFinish={onFinish} form={form}
                  labelCol={{span: 4}}
                //   wrapperCol={{span: 14}} layout="horizontal"
                  initialValues={{size: componentSize}}
                //onValuesChange={onFormLayoutChange}
                  size={componentSize as SizeType}
                // style={{maxWidth: 600}}
            >
                <Form.Item label="Select" name="categoryId">
                    <Select defaultValue="Select Category"
                        options={

                            data?.map(i => (
                                {value: i.categoryId, label: i.categoryName}
                            ))
                        }

                    />
                </Form.Item>
                <Form.Item label="ឈ្មោះ" name="name">
                    <Input/>
                </Form.Item>
                <Form.Item label="តម្លៃ" name="price">
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size={size}>
                        Primary
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default FormMenu;