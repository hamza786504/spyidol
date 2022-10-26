import React, { useState } from 'react'
import { message, Upload, Typography, Form, Row, Col, Button , } from 'antd';
import Image from 'next/image';



const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: false,
    action: '#',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};



export default function DocumentSubmissionFormLast() {
    const [form] = Form.useForm();
    const { Title , Link} = Typography;
    const [value, setValue] = useState(1);





    const onChange = (e) => {
        setValue(e.target.value);
    };


    return (
        <>
            <div className="form_body">
                <Title level={2} className="form_heading">
                    Envio Dos Documentos
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
                    <Row gutter={[20, 8]} justify="center">
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span : 8}} lg={{ span : 8}} span={8} style={{textAlign : "center"}}>
                            <h4 style={{ fontSize : "17px"}}>RG com CPF ou CNH</h4>
                            <Dragger {...props}>
                                <div style={{position : "relative" , height : "100%" , display: "flex" , alignItems : "center" , justifyContent : "center"}}>
                                <Image src="/images/doc_image_2.png" height='60' width='70' objectFit='contain' />
                                <Link style={{position : "absolute" , bottom : "20px" , left: 0 , right : 0 , textDecoration : "underline" , color : "#FE6330" , fontSize : "16px"}}>Foto do RG ou CNH</Link>
                                </div>
                            </Dragger>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span : 8}} lg={{ span : 8}} span={8} style={{textAlign : "center"}}>
                            <h4 style={{ fontSize : "17px"}}>Selfie com o documento</h4>
                            <Dragger {...props}>
                                <div style={{position : "relative" , height : "100%" , display: "flex" , alignItems : "center" , justifyContent : "center"}}>
                                <Image src="/images/doc_image_3.png" height='60' width='70' objectFit='contain' />
                                <Link style={{position : "absolute" , bottom : "20px" , left: 0 , right : 0 , textDecoration : "underline" , color : "#FE6330" , fontSize : "16px"}}>Selfie com documento</Link>
                                </div>
                            </Dragger>
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

