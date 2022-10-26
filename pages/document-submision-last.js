import React from 'react'
import Head from 'next/head';
import PageMain from './components/pageMain';
import BottomBar from './components/bottomBar';
import 'antd/dist/antd.css';
import DocumentSubmissionFormLast from './components/documentSubmissionFormLast';

export default function DocumentSubmisionLast() {
    return (
        <>
        <div className="page_container">
                <Head>
                    <title>Spyidol | Envio Dos Documentos</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <PageMain FormComponent={<DocumentSubmissionFormLast />} />
                <BottomBar />
            </div >
            
        </>
    )
}
