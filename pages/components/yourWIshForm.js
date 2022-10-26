import React, { useState } from 'react'
import { Typography, Form, Radio, Row, Col } from 'antd';
import Image from 'next/image';

export default function YourWishForm() {
    const [form] = Form.useForm();
    const { Title } = Typography;
    const [value, setValue] = useState(1);





    const onChange = (e) => {
        setValue(e.target.value);
    };


    return (
        <>
            <div className="form_body">
                <Title level={2} className="form_heading">
                    Você deseja ser?
                </Title>
                <Form
                    form={form}
                    name="submitYourWish"
                    layout="vertical"
                    onSubmitCapture={(e) => { submitYourWish(e) }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Radio.Group value={value} onChange={onChange} name="wish" className='selectWish'>
                        <Row gutter={[20, 8]}>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12} style={{ textAlign: "center" }}>
                                <div className={value == 1 ? `wish_card active` : "wish_card"}>
                                    <div className="wish_radio_box">
                                        <Title level={5} style={{ fontSize: "16px", color: "white", fontWeight: "400", marginBottom: "0" }}>Assinante</Title>
                                        <Radio value={1}></Radio>
                                    </div>
                                    <div className="wish_card_image" onClick={() => { setValue(1) }}>
                                        <Image src="/images/wishCardImageAssinante.png" alt='your wish' width="250" height="130" objectFit='fill' />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} span={12} style={{ textAlign: "center" }}>
                                <div className={value == 2 ? `wish_card active` : "wish_card"}>
                                    <div className="wish_radio_box">
                                        <Title level={5} style={{ fontSize: "16px", color: "white", fontWeight: "400", marginBottom: "0" }}>Produtor(A)</Title>
                                        <Radio value={2}></Radio>
                                    </div>
                                    <div className="wish_card_image" onClick={() => { setValue(2) }}>
                                        <Image src="/images/wishCardImageProdutor.png" alt='your wish' width="250" height="130" objectFit='fill' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Radio.Group>
                </Form>
            </div>
        </>
    )
}
