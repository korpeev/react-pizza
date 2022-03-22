import Head from "next/head";
import {NextPage} from "next";

import {MainTemplate} from "components/templates/MainTemplate";
import {Header} from "components/organisms/Header";
import {Navigation} from "components/organisms/Navigation";
import {SortBlock} from "components/organisms/SortBlock";
import {Box} from "@mui/system";
import {useMediaQuery} from "@mui/material";

export const HomePage: NextPage = () => {
    const matches = useMediaQuery('(max-width: 400px)')
    return (
        <>
            <Head>
                <title>React Pizza Shop</title>
            </Head>

            <MainTemplate>
                <Header/>
                <Box display='flex' flexWrap={'wrap'} pt={3} alignItems={'center'}
                     justifyContent={matches ? 'center' : 'space-between'}>
                    <Navigation/>
                    <SortBlock/>
                </Box>
            </MainTemplate>
        </>
    );
};
