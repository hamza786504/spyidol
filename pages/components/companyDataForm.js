import React, { useState } from 'react'
import { Typography, Form, Button, Row, Col, Input } from 'antd';
import InputMask from 'react-input-mask';

function CNPJInput({ value, onChange }) {
    return (
        <InputMask
            name='CNPJ'
            alwaysShowMask={true}
            mask='99.999.999/9999-99'
            maskPlaceholder='__.___.___/____-__'
            value={value}
            onChange={(e) => { onChange(e) }}>
        </InputMask>
    );
}

function OpeningDataInput({ value, onChange }) {
    return (
        <InputMask
            name='openingData'
            alwaysShowMask={true}
            mask='99/99/9999'
            maskPlaceholder='__/__/____'
            value={value}
            onChange={(e) => { onChange(e) }}>
        </InputMask>
    );
}


export default function CompanyDataForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [feildsValue, setFeildsValue] = useState({
        companyName: "",
        CNPJ: "",
        openingData: "",
    })

    const onChangeHandler = (e) => {
        setFeildsValue({ ...feildsValue, [e.target.name]: e.target.value });
    }

    const submitCompanyData = async (e) => {
        e.preventDefault();
        const values = await form.validateFields();
    };


    return (
        <>
            <div className="form_body">
                <Title level={2} className="form_heading">
                    Dados Da Empresa
                </Title>
                <Form
                    form={form}
                    name="submitCompanyData"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitCompanyData(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Row>
                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Razão Social" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.companyName}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="companyName"
                                            rules={[{ required: true, message: 'Por favor, digite o nome da empresa' }]}>
                                            <Input size="large" name="companyName" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.companyName} placeholder="Digite Razão Social" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="CNPJ" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.CNPJ}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="CNPJ"
                                            rules={[{ required: true, message: 'Insira o CNPJ' }]}>
                                            {/* <Input size="large" name="CNPJ" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.CNPJ} placeholder="__.___.___/____-__" /> */}


                                            <CNPJInput
                                                name="CNPJ"
                                                rules={[{ required: true, message: 'Insira o CNPJ' }]}
                                                className="ant-input"
                                                value={feildsValue.CNPJ}
                                                onChange={(e) => { onChangeHandler(e) }}>
                                            </CNPJInput>
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Data de abertura" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.openingData}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="openingData"
                                            rules={[{ required: true, message: 'Por favor, adicione a data de abertura' }]}>
                                            {/* <Input size="large" name="openingData" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.openingData} placeholder="__/__/____" /> */}
                                            <OpeningDataInput
                                                name="CNPJ"
                                                rules={[{ required: true, message: 'Por favor, adicione a data de abertura' }]}
                                                className="ant-input"
                                                value={feildsValue.CNPJ}
                                                onChange={(e) => { onChangeHandler(e) }}>
                                            </OpeningDataInput>
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
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
