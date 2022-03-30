import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Box, styled, StyleFunction, Theme } from "@mui/system";
import { FC, useState } from "react";
import { Props } from "components/organisms/PizzaCard/types";

export type CardButtonProps = {
  active: boolean;
  isAvialable: boolean;
};

const CardButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isAvialable",
})<CardButtonProps>(({ theme, active, isAvialable }) => ({
  backgroundColor:
    active && isAvialable ? "#fff" : theme.palette.cardBtnColor.main,
  color: isAvialable ? theme.palette.cardBtnColor.contrastText : "grey",
  padding: "5px 10px",
  fontSize: "14px",
  textTransform: "lowercase",
  "&:not(:last-child)": {
    marginRight: "5px",
  },
}));

const avialableTypes = ["тонкое", "традиционное"];
const avialableSize = [26, 30, 40];
export const PizzaCard: FC<Props> = ({ pizzas, isCartPage }) => {
  const [activeTypeIndex, setActiveType] = useState(0);
  const [activeSizeIndex, setActiveSize] = useState(0);
  const [pizza, setPizza] = useState({});
  const onClickActiveSize = (index: number, element: number) => () => {
    if (pizzas.sizes.indexOf(element) === -1) {
      return;
    }
    setActiveSize(index);
  };
  const onClickActiveType = (index: number) => () => {
    if (!pizzas.types.includes(index)) {
      return;
    }
    setActiveType(index);
  };

  const onAddCart = () => () => {
    const newPizza = {
      name: pizzas.name,
      category: pizzas.category,
      price: pizzas.price,
      rating: pizzas.rating,
      selectedSize: avialableSize[activeSizeIndex],
      selectedType: pizzas.types[activeTypeIndex],
    };
    setPizza(newPizza);
  };
  return (
    <Card
      sx={{
        width: isCartPage ? "100%" : "280px",
        display: "flex",
        padding: "20px",
        flexDirection: isCartPage ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: isCartPage ? "2rem 0" : "2rem",
      }}
    >
      <CardMedia
        component="img"
        image={pizzas.imageUrl}
        sx={{
          maxWidth: "240px",
          width: isCartPage && "100px",
        }}
      />
      <CardContent
        sx={{
          textAlign: !isCartPage ? "center" : "auto",
          paddingBottom: "2rem",
          width: isCartPage ? "250px" : "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: isCartPage ? "18px" : "auto",
            height: !isCartPage ? "40px" : "auto",
          }}
          variant="h5"
          component="h1"
        >
          {pizzas.name}
        </Typography>
        {isCartPage && <Typography>традиционное, 26 см</Typography>}
      </CardContent>
      {!isCartPage && (
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            backgroundColor: "#f3f3f3",
            padding: "12px",
          }}
        >
          <Box
            display={"flex"}
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {avialableTypes.map((el, index) => (
              <CardButton
                onClick={onClickActiveType(index)}
                isAvialable={pizzas.types.indexOf(index) !== -1}
                active={index === activeTypeIndex}
                key={index}
              >
                {el}
              </CardButton>
            ))}
          </Box>
          <Box display="flex" pt={2}>
            {avialableSize.map((s, index) => (
              <CardButton
                onClick={onClickActiveSize(index, s)}
                isAvialable={pizzas.sizes.some((ps) => ps === s)}
                active={index === activeSizeIndex}
                key={index}
              >
                {s}
              </CardButton>
            ))}
          </Box>
        </Box>
      )}
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
          width: !isCartPage ? "100%" : "auto",
          paddingTop: !isCartPage && "3rem",
        }}
      >
        {isCartPage ? (
          <>
            <Button variant="contained">+</Button>
            <Typography paragraph gutterBottom={false} mb={0} px={2}>
              5
            </Typography>
            <Button variant="contained">-</Button>
          </>
        ) : (
          <>
            <Typography mb={0} paragraph>
              от {pizzas.price}
            </Typography>
            <Button onClick={onAddCart()} variant="contained">
              Добавить
            </Button>
          </>
        )}
      </CardActions>
      {isCartPage && (
        <>
          <CardContent sx={{ justifySelf: "end" }}>
            <Typography component="div">{pizzas.price} KZT</Typography>
          </CardContent>
          <CardActions>
            <IconButton color="primary">
              <HighlightOffOutlinedIcon />
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  );
};
