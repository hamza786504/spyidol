import React, { useState } from 'react'
import { Typography, Form, Button, Row, Col, Input } from 'antd';
import InputMask from 'react-input-mask';
import Schema from 'async-validator';
Schema.warning = function () { };

// function TimeInput({value , onChangeHandler}) {
    // let mask = '__/__/____';
    // let formatChars = {
    //     'Y': '[0-9]',
    //     'd': '[0-3]',
    //     'D': '[0-9]',
    //     'm': '[0-1]',
    //     'M': '[1-9]'
    // };

    // let beforeMaskedValueChange = () => {

    //     let dateParts = value.split('/');
    //     let dayPart = dateParts[0];
    //     let monthPart = dateParts[1];

    //     if (dayPart.startsWith('3'))
    //         formatChars['D'] = '[0-1]';
    //     else if (dayPart.startsWith('0'))
    //         formatChars['D'] = '[1-9]';
    //     else
    //         formatChars['D'] = '[0-9]';


    //     if (monthPart === "" && monthPart.startsWith('1'))
    //         formatChars['M'] = '[0-2]';
    //     else
    //         formatChars['M'] = '[1-9]';

    //     return { value, selection: value.selection };
    // }
//     return (
//         <InputMask
//             name='birthDate'
//             alwaysShowMask={true}
//             mask={mask}
//             maskPlaceholder='DD/MM/YYYY'
//             value={value}
//             onChange={(e) => { onChangeHandler(e) }}
//             formatChars={formatChars}
//             beforeMaskedValueChange={beforeMaskedValueChange}>
//         </InputMask>
//     );
// }


function TimeInput({value , onChange}) {
    return (
        <InputMask
            name='birthDate'
            alwaysShowMask={true}
            mask='99/99/9999'
            maskPlaceholder='__/__/____'
            value={value}
            onChange={(e) => { onChange(e) }}>
        </InputMask>
    );
}
function CPFInput({ value, onChange }) {
    return (
        <InputMask
            name='CPF'
            alwaysShowMask={true}
            mask='999.999.999-99'
            maskPlaceholder='___.___.___-__'
            value={value}
            onChange={(e) => { onChange(e) }}>
        </InputMask>
    );
}
function Cell({ value, onChange }) {
    return (
        <InputMask
            name='cell'
            alwaysShowMask={true}
            mask='+55 (99) 9-9999-99999'
            maskPlaceholder='+55 (__) _-____-_____'
            value={value}
            onChange={(e) => { onChange(e) }}>
        </InputMask>
    );
}
export default function PartnersDetailsForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [feildsValue, setFeildsValue] = useState({
        name: "",
        lastName: "",
        CPF: "",
        birthDate: "",
        cell: ""
    });
    const onChangeHandler = (e) => {
        console.log(e.target.value);
        let changedValue;
        if (e.target.name === "CPF" || e.target.name === "birthDate" || e.target.name === "cell") {
            changedValue = e.target.value.replace(/\D+/g, '');
        } else {
            changedValue = e.target.value;
        }
        setFeildsValue({ ...feildsValue, [e.target.name]: changedValue });
    }
    const submitDetails = async (e) => {
        e.preventDefault();
        // const values = await form.validateFields();
        console.log(feildsValue);
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
                                            <CPFInput
                                                name="CPF"
                                                rules={[{ required: true, message: 'Por favor insira o CPF' }]}
                                                className="ant-input"
                                                value={feildsValue.CPF}
                                                onChange={(e) => { onChangeHandler(e) }}>
                                            </CPFInput>
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12}>
                                    <Form.Item label="Data de nascimento" style={{ marginBottom: "0", marginLeft: "13px", fontFamily: "WorkSans-SemiBold" }}>
                                        <Form.Item
                                            initialValue={feildsValue.birthDate}
                                            style={{ marginLeft: "-13px", fontFamily: "WorkSans-Normal" }}
                                            name="birthDate"
                                            placeholder="DD/MM/YYYY"
                                            rules={[{ required: true, message: 'Por favor, insira a data de nascimento' }]}>
                                            {/* <Input size="large" name="birthDate" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.birthDate} placeholder="DD/MM/YYYY" /> */}
                                            {/* <BirthDate
                                                name="birthDate"
                                                rules={[{ required: true, message: 'Por favor, insira a data de nascimento' }]}
                                                className="ant-input"
                                                value={feildsValue.birthDate}
                                                onChange={(e) => { onChangeHandler(e) }}>
                                            </BirthDate> */}
                                            <TimeInput
                                                name="birthDate"
                                                rules={[{ required: true, message: 'Por favor, insira a data de nascimento' }]}
                                                className="ant-input"
                                                value={feildsValue.birthDate}
                                                onChange={(e) => { onChangeHandler(e) }}>
                                            </TimeInput>
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
                                    {/* <Input size="large" type='tel' name="cell" onChange={(e) => { onChangeHandler(e) }} value={feildsValue.cell} placeholder="+1 123 456 7891" /> */}

                                    <Cell
                                        name="cell"
                                        rules={[{ required: true, message: 'Por favor, digite o número do seu celular' }]}
                                        className="ant-input"
                                        value={feildsValue.cell}
                                        onChange={(e) => { onChangeHandler(e) }}>
                                    </Cell>
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
