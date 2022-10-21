import React from 'react'
import { Typography } from "antd"

export default function FormFooter({ footerLink, footerText }) {
    const { Text, Link } = Typography;
    return (
        <>
            {
                footerText ?
                    <div className="FormFooter">
                        <Text>{footerText} {footerLink ? <Link href="#" className="link_underline">{footerLink}</Link> : ""}
                        </Text>
                    </div>
                    : ""
            }

        </>
    )
}
