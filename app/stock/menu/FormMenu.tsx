"use client"
import React, {useEffect, useState} from 'react';
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
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {menuService} from "@/service/menu.service";
import {useRouter} from "next/navigation";


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
    const [form] = Form.useForm()
    const route=useRouter()
    const {mutate: createMenu} = useMutation({
        mutationFn: (d: any) => menuService.createMenu(d),
        onSuccess: () => {
            useClient.invalidateQueries({queryKey:['menus']})
            form.resetFields()
        }
    })
    useEffect(() => {
        route.push("?cate_id="+'1')
    }, []);
    const onFinish = (values: any) => {
     createMenu(values)
        alert(`បង្កើតមីនុយថ្មីឈ្មោះ ${values.name} ជោគជ័យ `)
    };
    const useClient=useQueryClient()
    const handleParam=(p:string)=>{
        route.push("?cate_id="+p)
        useClient.invalidateQueries({queryKey:['menus']})
    }
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
                <Form.Item label="ជ្រើសរើស:" name="categoryId">
                    <Select defaultValue="Select Category"
                            onChange={(e)=>handleParam(e)}
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
                        បញ្ចូល
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default FormMenu;