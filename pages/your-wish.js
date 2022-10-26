import React from 'react'
import Head from 'next/head';
import PageMain from './components/pageMain';
import BottomBar from './components/bottomBar';
import YourWishForm from './components/yourWIshForm';
import 'antd/dist/antd.css';

export default function YourWish() {
    return (
        <>
        <div className="page_container">
                <Head>
                    <title>Spyidol | Seu desejo</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <PageMain FormComponent={<YourWishForm />}  footerText="Já possui conta?" footerLink="Entrar"/>
                <BottomBar />
            </div >
            
        </>
    )
}
