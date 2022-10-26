import React, { useState } from 'react'
import { Typography, Form, Button, Radio, Row, Col, Input } from 'antd';

export default function RegisterForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [feildsValue, setFeildsValue] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        setValue(e.target.value);
    };


    const onChangeHandler = (e) => {
        setFeildsValue({ ...feildsValue, [e.target.name]: e.target.value });
    }

    const submitRegister = async (e) => {
        e.preventDefault();
        const values = await form.validateFields();
        try {
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
        // if (feildsValue.email || feildsValue.password !== "") {
        // const result = await fetch("api" , {
        //     "Content-Type" : "application/json",
        //     "method" : "POST",
        //     "body" : JSON.stringify(feildsValue)
        // });
        // const res = await result.json();
        // }
    };


    return (
        <>
            <div className="form_body">
                <Title level={2} className="form_heading">
                    Crie sua conta
                </Title>
                <Form
                    form={form}
                    name="submitRegister"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitRegister(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Radio.Group value={value} onChange={onChange} name="registerType" className='selectRegisterType'>
                        <Row gutter={[20, 8]} justify="center">
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12} style={{ textAlign: "end" }}>
                                <div className={value == 1 ? `register_card active` : "register_card"} style={{ margin: "0 0 0 auto" }}>
                                    <div className="register_radio_box" onClick={() => {setValue(1)}}>
                                        <Title level={5} style={{ fontSize: "16px", color: "white", fontWeight: "400", marginBottom: "0" }}>Assinante</Title>
                                        <Radio value={1}></Radio>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                <div className={value == 2 ? `register_card active` : "register_card"} style={{ textAlign: "start" }}>
                                    <div className="register_radio_box" onClick={() => {setValue(2)}}>
                                        <Title level={5} style={{ fontSize: "16px", color: "white", fontWeight: "400", marginBottom: "0" }}>Produtor(A)</Title>
                                        <Radio value={2}></Radio>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Radio.Group>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Nome" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                <Form.Item
                                    initialValue={feildsValue.name}
                                    style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                    name="name"
                                    rules={[{ required: true, message: 'Por favor, digite o nome' }]}>
                                    <Input size="large" name="name" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.name} placeholder="Digite Nome" />
                                </Form.Item>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="E-mail" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                <Form.Item
                                    initialValue={feildsValue.email}
                                    style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                    name="email"
                                    rules={[{ required: true, message: 'Por favor, digite o e-mail' }]}>
                                    <Input size="large" name="email" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.email} placeholder="Digite E-mail" />
                                </Form.Item>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Senha" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                <Form.Item
                                    initialValue={feildsValue.password}
                                    style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                    name="password"
                                    rules={[{ required: true, message: 'Por favor, digite a senha' }]}>
                                    <Input size="large" name="password" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.password} placeholder="Digite Senha" />
                                </Form.Item>
                            </Form.Item>
                        </Col>
                    </Row>


                    <Row>
                        <Col span={24}>
                            <Form.Item style={{ marginTop: "30px" }}>
                                <Button size="large" htmlType='submit' className="form_submit_btn" type="primary">Avancar</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}
