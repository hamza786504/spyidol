import React, { useState } from 'react'
import { Cascader , Typography , Form } from 'antd';
const [form] = Form.useForm();

export default function FiscalDocumentForm() {

    const { Title } = Typography;
    const [document , setDocument] = useState("")

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
                    Entre com sua conta
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
                    {/* <Form.Item label="E-mail ou nome de usuário" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                        <Form.Item
                            initialValue={feildsValue.email}
                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                            name="email"
                            rules={[{ required: true, message: 'Por favor, digite o e-mail ou nome de usuário' }]}>
                            <Input size="large" name="email" onChange={(e) => { updateFeildValue(e) }} value={feildsValue.email} placeholder="Digite E-mail ou nome de usuário" />
                        </Form.Item>
                    </Form.Item> */}



                    <Cascader options={options} onChange={onChange} placeholder="Selecionar" />


                    <Form.Item style={{ marginTop: "20px" }}>
                        <Button size="large" htmlType='submit' className="form_submit_btn" type="primary">Avancar</Button>
                    </Form.Item>

                </Form>





            </div>
        </>
    )
}
