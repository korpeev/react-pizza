import React from "react";
import { MainTemplate } from "components/templates/MainTemplate";
import { Header } from "components/organisms/Header";
import { Box, Button, Typography } from "@mui/material";
import { PizzaCard } from "components/organisms/PizzaCard";
import { mockProps } from "components/pages/Home/props.mock";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export const Cart = () => {
  return (
    <React.Fragment>
      <MainTemplate>
        <Header isCartPage />
        <Box
          sx={{
            maxWidth: "820px",
            margin: "60px auto",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              Корзина
            </Typography>
            <Typography
              gutterBottom={false}
              paragraph
              sx={{ cursor: "pointer" }}
            >
              очистить корзину
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }} display="flex" flexDirection="column">
            {mockProps.map((p) => (
              <PizzaCard isCartPage pizzas={p} />
            ))}
          </Box>
          <Box pt={5} display="flex" justifyContent="space-between">
            <Typography>Всего пицц: 5</Typography>
            <Typography>
              Общая сумаа:{" "}
              <Typography
                component="span"
                sx={{ fontWeight: "bold" }}
                color="primary"
              >
                5000
              </Typography>{" "}
              KZT
            </Typography>
          </Box>
          <Box pt={5} display="flex" justifyContent="space-between">
            <Button
              sx={{
                borderRadius: "30px",
              }}
              variant="outlined"
            >
              <ChevronLeftIcon /> Вернуться Назад
            </Button>
            <Button
              variant={"contained"}
              sx={{
                borderRadius: "30px",
              }}
            >
              Оформить заказ
            </Button>
          </Box>
        </Box>
      </MainTemplate>
    </React.Fragment>
  );
};
