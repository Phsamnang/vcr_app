import React, {useState} from 'react';
import {Button, Form, Input, InputNumber, Select} from "antd";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import useFetchMenus from "@/libs/hooks/fetch-all-menus";
import useFetchCategoryId from "@/libs/hooks/fetch-category-id";
import {useMutation} from "@tanstack/react-query";
import {http} from "@/utils/http";
import useFetchProductByCategoryId from "@/libs/hooks/fetch-product-categoryId";

type SizeType = Parameters<typeof Form>[0]['size'];

const normFile = (e: any) => {
    /* if (Array.isArray(e)) {
         return e;
     }*/
    return e?.fileList;
};
const FormMenuDetail = () => {
    const [form] = Form.useForm()
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const {data, isLoading} = useFetchAllCategories()
    const [categoryMenu,setCategoryMenu]=useState('')
    const [categoryProduct,setCategoryProduct]=useState('')
    console.log("efjhsadjf ",categoryProduct)
    const onFormLayoutChange = ({size}: { size: SizeType }) => {
        setComponentSize(size);
    };
    const [size, setSize] = useState<SizeType>('large')
    const menu=useFetchMenus(categoryMenu);
    const product=useFetchCategoryId(categoryProduct);
    const {mutate}=useMutation({
        mutationFn:async (obj:any)=>await http.post("menu-detail",obj),
        onSuccess:()=>{
            alert("successfully")
        }
    })
    const onFinish = (values: any) => {
        //console.log(values)
        mutate(values)
    };
    console.log("prodycrt",product.data)
    if (product.isLoading)return <></>

    return (
        <div>
            <Form form={form} onFinish={onFinish}
                  labelCol={{span: 4}}
                //   wrapperCol={{span: 14}} layout="horizontal"
                  initialValues={{size: componentSize}}
                //onValuesChange={onFormLayoutChange}
                  size={componentSize as SizeType}
                // style={{maxWidth: 600}}
            >
                <Form.Item label="ជ្រើសរើស:">
                    <Select defaultValue="Select Category"
                         onChange={(e)=>setCategoryMenu(e)}
                            options={

                                data?.map(i => (
                                    {value: i.categoryId, label: i.categoryName}
                                ))
                            }

                    />
                </Form.Item>
                <Form.Item label="មុីនុយ" name="menuId">
                    <Select defaultValue="Select Category"
                        /* onChange={(e)=>handleParam(e)}*/
                            options={

                               menu?.data?.map((i:any) => (
                                    {value: i.id,label:i.name}
                                ))
                            }

                    />
                </Form.Item>
                <Form.Item label="ជ្រើសរើស:" >
                    <Select defaultValue="Select Category"
                         onChange={(e)=>setCategoryProduct(e)}
                            options={

                                data?.map(i1 => (
                                    {value: i1.categoryId, label: i1.categoryName}
                                ))
                            }

                    />
                </Form.Item>
                <Form.Item label="ទំនិញ" name="productId">
                    <Select defaultValue="Select product"
                        /* onChange={(e)=>handleParam(e)}*/
                            options={

                                product?.data?.products.map((i1:any) => (
                                    {value: i1.productId, label: i1.productName}
                                ))
                            }

                    />
                </Form.Item>
                <Form.Item label="ចំនួន" name="numberMenu">
                    <InputNumber/>
                </Form.Item><Form.Item label="ប្រើប្រាស់" name="useProduct">
                    <InputNumber/>
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

export default FormMenuDetail;