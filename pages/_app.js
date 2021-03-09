import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'
import Head from "next/head";
import "../src/styles/main.scss";

class MyApp extends App {

    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Provider store={reduxStore}>
                <Head>
                    <meta name="robots" content="none"/>
                    {/*<script src="https://api-maps.yandex.ru/2.1/?apikey=06c25219-6500-4d4d-9c76-c6eddd2d0272&lang=ru_RU"*/}
                    {/*        type="text/javascript">*/}
                    {/*</script>*/}
                    <title>dialer card</title>
                </Head>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)
