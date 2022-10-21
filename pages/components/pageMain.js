import React from 'react';
import Image from 'next/image'
import FormFooter from './formFooter';
import { Typography } from "antd"
import 'antd/dist/antd.css';


export default function PageMain({FormComponent , footerText , footerLink }) {
    const { Text , Link} = Typography;
    return (
        <>
            <div className="main">
                <div className="formouter">
                    <div className="formcover">
                        <div className="logo_image">
                            <Image src="/images/spyidol-logo.png" layout='fill' alt='logo' className="image" />
                        </div>
                        {FormComponent}
                        {footerText !== "" && <FormFooter footerText={footerText} footerLink={footerLink} />}
                    </div>
                </div>
            </div>
        </>
    )
}
