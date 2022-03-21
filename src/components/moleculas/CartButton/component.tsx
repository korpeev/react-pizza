import { FC } from "react";
import { Props } from "./types";
import { Button, Divider } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const CartButton: FC<Props> = ({ countItems = 0, sumItems = 0 }) => {
  return (
    <Button
      variant="contained"
      sx={(props) => ({
        borderRadius: "60px",
        height: "50px",
        fontWeight: "700",
        fontSize: "16px",
      })}
    >
      {sumItems}
      KZT
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{
          margin: "0 10px",
          width: "10px",
        }}
      />
      <ShoppingCartOutlinedIcon sx={{ marginRight: "2px" }} />
      {countItems}
    </Button>
  );
};