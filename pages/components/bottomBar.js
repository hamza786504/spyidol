import React , { useState } from 'react';
import Image from 'next/image'
import { Button, Row, Col, Dropdown, Space, Drawer , Menu , Typography } from "antd"
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


export default function BottomBar() {
    const [open, setOpen] = useState(false);
    const { Title, Text, Link } = Typography;
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a href="#">
                            A SpyIdol
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a href="#">
                            Embaixadores
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a href="#">
                            Afiliados
                        </a>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <a href="#">
                            Nossa loja
                        </a>
                    ),
                },
                {
                    key: '5',
                    label: (
                        <a href="#">
                            Suporte
                        </a>
                    ),
                },
                {
                    key: '6',
                    label: (
                        <a href="#">
                            FAQ
                        </a>
                    ),
                },
                {
                    key: '7',
                    label: (
                        <a href="#">
                            Termos & Condições
                        </a>
                    ),
                },
                {
                    key: '8',
                    label: (
                        <a href="#">
                            Privacidade
                        </a>
                    ),
                }
            ]}
        />
    );



    const languages = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a href="#">
                            English
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a href="#">
                            Arabic
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a href="#">
                            German
                        </a>
                    ),
                },
            ]}
        />
    );



    return (
        <>
            <div className="bottom_bar">
                <Row className="footer_menu_row" justify="space-between" align='middle' style={{ width: "100%" }}>
                    <Col>
                        <div className="language">
                            <div className="glob_icon">
                                <Image src='/images/language_icon.png' alt='language' height={20} width={20} />
                            </div>
                            <div className="select_language">
                                <Space>
                                    <Dropdown overlay={languages}>
                                        <Button ghost style={{ color: "white", backgroundColor: "transparent", border: "none" }}>
                                            <Space>
                                                Português
                                                <DownOutlined />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                </Space>
                            </div>
                        </div>
                    </Col>
                    <Col flex="1 0 70%" lg={16} md={0} sm={0} xs={0}>
                        <div className="menu_bar">
                            <Link href="#" className="link_white">A SpyIdol</Link>
                            <Link href="#" className="link_white">Embaixadores</Link>
                            <Link href="#" className="link_white">Afiliados</Link>
                            <Link href="#" className="link_white">Nossa loja</Link>
                            <Link href="#" className="link_white">Suporte</Link>
                            <Link href="#" className="link_white">FAQ</Link>
                            <Link href="#" className="link_white">Termos & Condições</Link>
                            <Link href="#" className="link_white">Privacidade</Link>
                        </div>
                    </Col>
                    <Col>
                        <Text style={{ fontSize: "15px", color: "white" }}>@ 2022 SpyIdol</Text>
                    </Col>
                    <Col lg={0} md={4} xs={1} sm={3}>
                        <nav className="navbar">
                            <Image src="/images/hamburger.png" alt="menu_icon" height="15" width="15"
                                className="menu"
                                onClick={showDrawer}
                            />
                            <Drawer
                                style={{ textAlign: "center", backgroundColor: "transparent" }}
                                placement="left"
                                closable={false}
                                onClose={onClose}
                                open={open}
                                key="left"
                            >
                                <div className="menu_box" style={{ paddingTop: "1rem" }}>
                                    <Image src="/images/spyidol-logo.png" className="image" alt="logo" height="60" width="200" />
                                    {menu}
                                </div>
                                <div className="sidebar_footer">
                                    <Text style={{ fontSize: "15px" }}>@ 2022 SpyIdol</Text>
                                </div>
                            </Drawer>
                        </nav>
                    </Col>
                </Row>
            </div>
        </>
    )
}
