import React, { useState } from 'react'
import { Typography, Form, Button, Row, Col, Input } from 'antd';

export default function PartnersDetailsForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [feildsValue, setFeildsValue] = useState({
        name: "",
        lastName: "",
        CPF: "",
        birthDate: "",
        cell: ""
    })



    const onChangeHandler = (e) => {
        setFeildsValue({ ...feildsValue, [e.target.name]: e.target.value });
    }

    const submitDetails = async (e) => {
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




    const [select, setSelect] = useState("");

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
        setSelect(value);
    };




    return (
        <>
            <div className="form_body">
                <Title level={2} className="form_heading">
                    Dados do sócio Administrador
                </Title>

                <Form
                    form={form}
                    name="submitAddress"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitDetails(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Row>
                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Nome" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.name}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="name"
                                            rules={[{ required: true, message: 'Por favor selecione CEP' }]}>
                                            <Input size="large" name="name" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.name} placeholder="Digite Nome" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Sobrenome" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.lastName}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="lastName"
                                            rules={[{ required: true, message: 'Por favor Sobrenome' }]}>
                                            <Input size="large" name="lastName" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.lastName} placeholder="Sobrenome" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="CPF" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.CPF}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="CPF"
                                            rules={[{ required: true, message: 'Por favor insira o CPF' }]}>
                                            <Input size="large" name="CPF" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.CPF} placeholder="___.___.___-__" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Data de nascimento" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.birthDate}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="birthDate"
                                            rules={[{ required: true, message: 'Por favor, insira a data de nascimento' }]}>
                                            <Input size="large" name="birthDate" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.birthDate} placeholder="DD/MM/YYYY" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Celular" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                <Form.Item
                                    initialValue={feildsValue.cell}
                                    style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                    name="cell"
                                    rules={[{ required: true, message: 'Por favor, digite o número do seu celular' }]}>
                                    <Input size="large" type='tel' name="cell" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.cell} placeholder="+1 123 456 7891" />
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
