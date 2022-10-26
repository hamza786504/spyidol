import React, { useState } from 'react'
import { Typography, Form, Button, Row, Col, Input, Cascader } from 'antd';

export default function BankDataForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [feildsValue, setFeildsValue] = useState({
        bank: "",
        select: "",
        agency: "",
        account: "",
    })



    const onChangeHandler = (e) => {
        setFeildsValue({ ...feildsValue, [e.target.name]: e.target.value });
    }

    const submitBankData = async (e) => {
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
                    Dados Bancarios
                </Title>

                <Form
                    form={form}
                    name="submitBankData"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitBankData(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Row>
                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Banco" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.bank}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="bank"
                                            rules={[{ required: true, message: 'Por favor, digite seu banco' }]}>
                                            <Input size="large" name="bank" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.bank} placeholder="Digite Banco" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Tipo de conta" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="select"
                                            className="company_address_form"
                                            rules={[{ required: true, message: 'Por favor selecione' }]}>
                                            <Cascader options={options} onChange={onChange} placeholder="Selecionar" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Agência" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.agency}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="agency"
                                            rules={[{ required: true, message: 'Por favor, insira a agência' }]}>
                                            <Input size="large" name="agency" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.agency} placeholder="Digite Agência" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Conta" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.account}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="account"
                                            rules={[{ required: true, message: 'Por favor, digite a conta' }]}>
                                            <Input size="large" name="account" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.account} placeholder="Digite Conta" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row gutter={[20, 8]}>
                        <Col span={12}>
                            <Form.Item style={{ marginTop: "30px" }}>
                                <Button size="large" htmlType='submit' className="outline-dark-btn" type="primary" block>Voltar</Button>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
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
