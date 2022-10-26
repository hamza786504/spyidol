import React, { useState } from 'react'
import { Typography, Button, Form, Input } from "antd"
import 'antd/dist/antd.css';


export default function RecoverPassForm() {





    const { Title, Link } = Typography;
    const [form] = Form.useForm();
    const [feildsValue, setFeildsValue] = useState({
        email: ""
    });
    const updateFeildValue = (e) => {
        setFeildsValue({ ...feildsValue, [e.target.name]: e.target.value });
    }


    const submitRecoverPassForm = async (e) => {
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
                    Recuperar sua senha
                </Title>

                <Form
                    form={form}
                    className="recoverPassForm"
                    name="recoverPassForm"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitRecoverPassForm(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item label="E-mail" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                        <Form.Item
                            initialValue={feildsValue.email}
                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                            name="email"
                            rules={[{ required: true, message: 'Digite o e-mail para recuperar a senha' }]}>
                            <Input size="large" name="email" onChange={(e) => { updateFeildValue(e) }} value={feildsValue.email} placeholder="Digite E-mail" />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item  style={{ marginTop: "20px" }}>
                        <Button size="large" htmlType='submit' className="form_submit_btn" type="primary">Enviar E-Mail</Button>
                    </Form.Item>

                </Form>





            </div>
        </>
    )
}
