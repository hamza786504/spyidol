import React from 'react';
import PageMain from './components/pageMain';
import BottomBar from './components/bottomBar';
import Head from 'next/head';
import RecoverPassForm from './components/recoverPassForm';


export default function RecoverPass() {
  return (
    <>
    <div className="page_container">
                <Head>
                    <title>Spyidol | Recover Password</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <PageMain FormComponent={<RecoverPassForm />} />
                <BottomBar />
            </div >
    </>
  )
}
