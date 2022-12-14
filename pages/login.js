import React from 'react';
import PageMain from './components/pageMain';
import BottomBar from './components/bottomBar';
import Head from 'next/head';
import LoginForm from './components/loginForm';


function Login() {
    return (
        <>
            <div className="page_container">
                <Head>
                    <title>Spyidol | Login</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <PageMain FormComponent={<LoginForm />} footerText="Eu não tenho conta?" footerLink="Inscrever-se" />
                <BottomBar />
            </div >
        </>
    )
}

export default Login;