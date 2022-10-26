import React, { useState } from 'react'
import { Cascader, Typography, Form, Button } from 'antd';


export default function EntityForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [document, setDocument] = useState("");

    const options = [
        {
            value: 'EN',
            label: 'EN',
        },
        {
            value: 'CA',
            label: 'CA',
        },
        {
            value: 'UR',
            label: 'UR',
        },
        {
            value: 'FR',
            label: 'FR',
        },
    ];

    const onChange = (value) => {
        setDocument(value);
    };



    const submitDocument = async (e) => {
        e.preventDefault();
        const values = await form.validateFields();
        try {
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
        if (feildsValue.email || feildsValue.password !== "") {
            // const result = await fetch("api" , {
            //     "Content-Type" : "application/json",
            //     "method" : "POST",
            //     "body" : JSON.stringify(feildsValue)
            // });
            // const res = await result.json();
        }
    };


    return (
        <>
            <div className="form_body">
                <Title level={2} className="form_heading">
                Pessoa física ou pessoa jurídica?
                </Title>

                <Form
                    form={form}
                    className="login_form"
                    name="login_form"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitDocument(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >

                    <Form.Item label="Tipo de documento" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                        <Form.Item
                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                            name="email"
                            rules={[{ required: true, message: 'Selecione Pessoa física ou jurídica?' }]}>
                            <Cascader options={options} onChange={onChange} placeholder="Selecionar" />
                        </Form.Item>
                    </Form.Item>


                    <Form.Item style={{ marginTop: "30px" }}>
                        <Button size="large" htmlType='submit' className="form_submit_btn" type="primary">Avancar</Button>
                    </Form.Item>
                </Form>





            </div>
        </>
    )
}
