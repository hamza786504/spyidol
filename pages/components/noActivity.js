import React from 'react'
import Image from 'next/image';
import { Button, Typography, Form, Col, Row } from 'antd';

export default function NoActivity() {
    const { Text, Link } = Typography;
    return (
        <>
            <div className="form_body" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image src="/images/dummy-image.png" alt='dummy-image' width="270" height="260" objectFit='fill' />
                <Text style={{ maxWidth: "600px", width: "90%", fontWeight: "400", fontSize: "16px", lineHeight: "25px", marginTop: "40px" }}>
                    <Link href="#" className="link_underline">Atenção: </Link>
                    A SpyIdol ainda não está disponível para criadores de
                    conteúdo em seu país de residência fiscal, porém não se preocupe,
                    muito em breve estaremos iniciando nossas atividades em sua região.
                </Text>
                <Form.Item style={{ marginTop: "30px", width: "100%" }}>
                    <Link href='/'><Button style={{ width: "100%" }} size="large" htmlType='button' className="form_submit_btn" type="primary">Ir Para Pagina Inicial</Button></Link>
                </Form.Item>
            </div>
        </>
    )
}
