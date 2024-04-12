import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select} from "antd";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {categoryService} from "@/service/category.service";
import {http} from "@/utils/http";

type SizeType = Parameters<typeof Form>[0]['size'];
const FormAddStock = ({imp}: any) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const {data, isLoading} = useFetchAllCategories()
    const [categoryId, setCategoryId] = useState('')


    const onFormLayoutChange = ({size}: { size: SizeType }) => {
        setComponentSize(size);
    };
    const [size, setSize] = useState<SizeType>('large')
    const [form] = Form.useForm()
    const useClient = useQueryClient()
    const {mutate: getProduct, data: productData} = useMutation({
        mutationFn: () => categoryService.getCategoryById(categoryId),
        onSuccess: (d) => {


        }
    })
    useEffect(() => {
        getProduct()

    }, [categoryId])

    const importData=useMutation({
        mutationFn:async (obj)=> await http.post("/import/detail",obj),
        onSuccess:()=>{
            useClient.invalidateQueries({queryKey:['stocks']})
        }
    })
    const onFinis = (obj: any) => {
        const {productId, importQty, importPrice} = obj
        const data:any = {
            "productId": productId,
            "importQty": importQty,
            "importPrice": importPrice,
            "importId": imp.importId

        }
        importData.mutate(data)
    }

    return (
        <div>
            <Form form={form} onFinish={onFinis}
                  labelCol={{span: 4}}
                //   wrapperCol={{span: 14}} layout="horizontal"
                  initialValues={{size: componentSize}}
                //onValuesChange={onFormLayoutChange}
                  size={componentSize as SizeType}
                // style={{maxWidth: 600}}
            >
                <Form.Item label="ជ្រើសរើស:" name="categoryId">
                    <Select defaultValue="Select Category"
                            onChange={(e) => setCategoryId(e)}
                            options={

                                data?.map(i => (
                                    {value: i.categoryId, label: i.categoryName}
                                ))
                            }

                    />
                </Form.Item>
                <Form.Item label="ទំនិញ" name="productId">
                    <Select
                        // onChange={(e)=>setCategoryId(e)}
                        options={
                            productData?.products?.map(i => (
                                {value: i.productId, label: i.productName}
                            ))
                        }

                    />
                </Form.Item>
                <Form.Item label="ចំនួន" name="importQty">
                    <Input/>
                </Form.Item>
                <Form.Item label="តម្លៃ" name="importPrice">
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

export default FormAddStock;