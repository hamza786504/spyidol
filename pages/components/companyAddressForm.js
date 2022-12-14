import React, { useState } from 'react'
import { Typography, Form, Button, Row, Col, Input, Cascader } from 'antd';
import InputMask from 'react-input-mask';

function CEPInput({ value, onChange }) {
    return (
        <InputMask
            name='zipCode'
            alwaysShowMask={true}
            mask='99999-999'
            maskPlaceholder='_____-___'
            value={value}
            onChange={(e) => { onChange(e) }}>
        </InputMask>
    );
}

export default function CompanyAddressForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [feildsValue, setFeildsValue] = useState({
        zipCode: "",
        address: "",
        number: undefined,
        complement: "",
        neighborhood: "",
        country: "",
        state: "",
    })



    const onChangeHandler = (e) => {
        let changedValue;
        if (e.target.name === "zipCode") {
            changedValue = e.target.value.replace(/\D+/g, '');
        } else {
            changedValue = e.target.value;
        }
        setFeildsValue({ ...feildsValue, [e.target.name]: changedValue });
    }

    const submitAdress = async (e) => {
        e.preventDefault();
        console.log(feildsValue);
        // const values = await form.validateFields();
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
                    Endere??o da empresa
                </Title>

                <Form
                    form={form}
                    name="submitAddress"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitAdress(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Row>
                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{ span: 24 }} sm={{ span: 8 }} span={8}>
                                    <Form.Item label="CEP" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.zipCode}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="zipCode"
                                            rules={[{ required: true, message: 'Por favor selecione CEP' }]}>
                                            {/* <Input size="large" name="zipCode" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.zipCode} placeholder="Digite CEP" /> */}
                                            <CEPInput
                                                name="zipCode"
                                                rules={[{ required: true, message: 'Por favor insira o CPF' }]}
                                                className="ant-input"
                                                value={feildsValue.zipCode}
                                                onChange={(e) => { onChangeHandler(e) }}>
                                            </CEPInput>
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 16 }} span={16}>
                                    <Form.Item label="Endere??o" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.address}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="address"
                                            rules={[{ required: true, message: 'Por favor, digite o endere??o' }]}>
                                            <Input size="large" name="address" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.address} placeholder="Digite Endere??o" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>



                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col span={12}>
                                    <Form.Item label="N??mero" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.number}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="number"
                                            rules={[{ required: true, message: 'por favor digite seu n??mero' }]}>
                                            <Input size="large" name="number" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.number} placeholder="Digite N??mero" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Complemento" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.complement}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="complement"
                                            rules={[{ required: true, message: 'Insira o complemento' }]}>
                                            <Input size="large" name="complement" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.complement} placeholder="Digite Complemento" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>




                        <Col span={24}>
                            <Row gutter={[20, 8]}>
                                <Col xs={{span : 12}} sm={{span : 8}} span={8}>
                                    <Form.Item label="Bairro" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.Bairro}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="Bairro"
                                            rules={[{ required: true, message: 'Por favor, insira o Bairro' }]}>
                                            <Input size="large" name="Bairro" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.Bairro} placeholder="Digite Bairro" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{span : 12}} sm={{span : 8}} span={8}>
                                    <Form.Item label="Munic??pio" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.country}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="country"
                                            rules={[{ required: true, message: 'Por favor, adicione o munic??pio' }]}>
                                            <Input size="large" name="country" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.country} placeholder="Digite Munic??pio" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{span : 24}} sm={{span : 8}} span={8}>
                                    <Form.Item label="Estado" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
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

                    </Row>


                    <Row gutter={[20 , 8]}>
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
