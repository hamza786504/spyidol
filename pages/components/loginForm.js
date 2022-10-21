import React, { useState } from 'react';
import { Typography, Button, Form, Input } from "antd"
import 'antd/dist/antd.css';



export default function LoginForm() {
    const { Title, Link } = Typography;
    const [form] = Form.useForm();
    const [feildsValue, setFeildsValue] = useState({
        email: "",
        password: ""
    });
    const updateFeildValue = (e) => {
        setFeildsValue({ ...feildsValue, [e.target.name]: e.target.value });
    }


    const submitLoginForm = async (e) => {
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
                    onSubmitCapture={(e) => { submitLoginForm(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item label="E-mail ou nome de usuário" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                        <Form.Item
                            initialValue={feildsValue.email}
                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                            name="email"
                            rules={[{ required: true, message: 'Por favor, digite o e-mail ou nome de usuário' }]}>
                            <Input size="large" name="email" onChange={(e) => { updateFeildValue(e) }} value={feildsValue.email} placeholder="Digite E-mail ou nome de usuário" />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label="Senha" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                        <Form.Item
                            initialValue={feildsValue.password}
                            rules={[{ required: true, message: 'Por favor, digite a senha' }]}
                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                            name="password"
                        >
                            <Input size="large" name="password" placeholder="Digite Senha" onChange={(e) => { updateFeildValue(e) }} value={feildsValue.password} />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item className='fpassword_link' style={{ textAlign: "end" }}>
                        <Link className="forgetPassLink" href="forget_password">Esqueceu sua senha?</Link>
                    </Form.Item>

                    <Form.Item style={{ marginTop: "20px" }}>
                        <Button size="large" htmlType='submit' className="form_submit_btn" type="primary">Entrar</Button>
                    </Form.Item>

                </Form>





            </div>
        </>
    )
}
