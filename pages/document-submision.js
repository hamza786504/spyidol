import React from 'react'
import Head from 'next/head';
import PageMain from './components/pageMain';
import BottomBar from './components/bottomBar';
import 'antd/dist/antd.css';
import DocumentSubmissionForm from './components/documentSubmissionForm';

export default function DocumentSubmision() {
    return (
        <>
        <div className="page_container">
                <Head>
                    <title>Spyidol | Envio Dos Documentos</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <PageMain FormComponent={<DocumentSubmissionForm />} />
                <BottomBar />
            </div >
            
        </>
    )
}