import Head from "next/head";
import {NextPage} from "next";

import {MainTemplate} from "components/templates/MainTemplate";
import {Header} from 'components/organisms/Header'

export const HomePage: NextPage = () => {
    return <>
        <Head>
            <title>React Pizza Shop</title>
        </Head>

        <MainTemplate>
            <Header/>
        </MainTemplate>
    </>
}

