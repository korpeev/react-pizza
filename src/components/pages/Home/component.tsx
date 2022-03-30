import Head from "next/head";
import { NextPage } from "next";

import { MainTemplate } from "components/templates/MainTemplate";
import { Header } from "components/organisms/Header";
import { Navigation } from "components/organisms/Navigation";
import { SortBlock } from "components/organisms/SortBlock";
import { Box } from "@mui/system";
import { Container, useMediaQuery } from "@mui/material";
import { PizzaCard } from "components/organisms/PizzaCard";
import { mockProps } from "components/pages/Home/props.mock";

export const HomePage: NextPage = () => {
  const matches = useMediaQuery("(max-width: 400px)");
  return (
    <>
      <Head>
        <title>React Pizza Shop</title>
      </Head>
      <body
        style={{
          height: "100%",
        }}
      >
        <MainTemplate>
          <Header />
          <Box
            display="flex"
            component="div"
            flexWrap={"wrap"}
            pt={3}
            alignItems={"center"}
            justifyContent={matches ? "center" : "space-between"}
          >
            <Navigation />
            <SortBlock />
            <Container
              sx={{
                margin: "0 auto",
                width: "1200px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {mockProps.map((data) => (
                <PizzaCard pizzas={data} key={data.id} />
              ))}
              {/*<PizzaCard pizzas={mockProps[0]} />*/}
            </Container>
          </Box>
        </MainTemplate>
      </body>
    </>
  );
};
