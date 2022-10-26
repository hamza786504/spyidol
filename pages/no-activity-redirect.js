import React from 'react'
import Head from 'next/head';
import PageMain from './components/pageMain';
import BottomBar from './components/bottomBar';
import NoActivity from './components/noActivity';
import 'antd/dist/antd.css';

export default function NoActivityRedirect() {
    return (
        <>
        <div className="page_container">
                <Head>
                    <title>Spyidol | Not Available</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <PageMain FormComponent={<NoActivity />} />
                <BottomBar />
            </div >
            
        </>
    )
}