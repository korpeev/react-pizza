import { Box, useTheme } from "@mui/system";
import Image from "next/image";
import { Typography, useMediaQuery } from "@mui/material";
import { CartButton } from "components/moleculas/CartButton";
import { FC } from "react";

type Props = {
  isCartPage?: boolean;
};

export const Header: FC<Props> = ({ isCartPage }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={matches ? "column" : "row"}
    >
      <Box component="div" display="flex">
        <Image src="/pizzaIcon.svg" alt="pizza icon" width={46} height={46} />
        <Box component="div" display="flex" flexDirection="column" ml={2}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            component="h1"
            variant="h5"
          >
            React Pizza
          </Typography>
          <Typography paragraph color={(props) => props.palette.grey["600"]}>
            самая вкусная пицца во вселенной
          </Typography>
        </Box>
      </Box>
      {!isCartPage && <CartButton countItems={2} sumItems={500} />}
    </Box>
  );
};
