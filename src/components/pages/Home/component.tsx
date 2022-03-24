import Head from "next/head";
import {NextPage} from "next";

import {MainTemplate} from "components/templates/MainTemplate";
import {Header} from "components/organisms/Header";
import {Navigation} from "components/organisms/Navigation";
import {SortBlock} from "components/organisms/SortBlock";
import {Box} from "@mui/system";
import {useMediaQuery} from "@mui/material";
import {PizzaCard} from "components/organisms/PizzaCard";
import {mockProps} from "components/pages/Home/props.mock";

export const HomePage: NextPage = () => {
    const matches = useMediaQuery('(max-width: 400px)')
    return (
        <>
            <Head>
                <title>React Pizza Shop</title>
            </Head>
            <body>
            <MainTemplate>
                <Header/>
                <Box display='flex' component='div' flexWrap={'wrap'} pt={3} alignItems={'center'}
                     justifyContent={matches ? 'center' : 'space-between'}>
                    <Navigation/>
                    <SortBlock/>
                    <Box display='flex' pt={2} flexWrap='wrap' justifyContent='space-around'>
                        {mockProps.map(data => <PizzaCard pizzas={data} key={data.id}/>)}
                    </Box>

                </Box>
            </MainTemplate>
            </body>
        </>
    );
};
