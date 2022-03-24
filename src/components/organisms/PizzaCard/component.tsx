import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import {Box, styled, useTheme} from "@mui/system";
import {FC, useState} from "react";
import {Props} from "components/organisms/PizzaCard/types";


const CardButton = styled(Button, {
    shouldForwardProp: props => props.active !== 'primary' && props.isAvialable !== 'primary'
})(({theme, active, isAvialable}) => ({
    backgroundColor: active && isAvialable ? '#fff' : theme.palette.cardBtnColor.main,
    color: isAvialable ? theme.palette.cardBtnColor.contrastText : 'grey',
    padding: '5px 10px',
    fontSize: '14px',
    textTransform: 'lowercase',
    '&:not(:last-child)': {
        marginRight: '5px'
    }
}))

const avialableTypes = ['тонкое', 'традиционное']
const avialableSize = [26, 30, 40]
export const PizzaCard: FC<Props> = ({pizzas}) => {
    const [activeTypeIndex, setActiveType] = useState(0)
    const [activeSizeIndex, setActiveSize] = useState(0)
    const [pizza, setPizza] = useState({})
    const onClickActiveSize = (index: number, element: number) => () => {
        if(pizzas.sizes.indexOf(element) === -1) {
            return
        }
        setActiveSize(index)
    }
    const onClickActiveType = (index: number) => () => {
        if (!pizzas.types.includes(index)) {
            return
        }
        setActiveType(index)
    }

    const onAddCart = () => () => {
        const newPizza = {
            name: pizzas.name,
            category: pizzas.category,
            price: pizzas.price,
            rating: pizzas.rating,
            selectedSize: avialableSize[activeSizeIndex],
            selectedType: pizzas.types[activeTypeIndex]
        }
        setPizza(newPizza)
    }
    console.log(pizza)
    return <Card sx={{width: '280px', display: 'flex', padding: '20px', flexDirection: 'column', alignItems: 'center'}}>
        <CardMedia
            component='img'
            image={'/chizz-pizza.png'}
            sx={{
                maxWidth: '240px'
            }}
        />
        <CardContent>
            <Typography variant='h5' component='h1'>{pizzas.name}</Typography>
        </CardContent>
        <Box display='flex' flexDirection='column' sx={{
            backgroundColor: '#f3f3f3',
            padding: '12px'
        }}>
            <Box display={'flex'} justifyContent='space-between' sx={{width: '100%'}}>
                {avialableTypes.map((el, index) => <CardButton onClick={onClickActiveType(index)}
                                                               isAvialable={pizzas.types.indexOf(index) !== -1}
                                                               active={index === activeTypeIndex}
                                                               key={index}>{el}</CardButton>)}
            </Box>
            <Box display='flex' pt={2}>
                {avialableSize.map((s, index) => <CardButton onClick={onClickActiveSize(index, s)}
                                                             isAvialable={pizzas.sizes.some(ps => ps === s)}
                                                             active={index === activeSizeIndex}
                                                             key={index}>{s}</CardButton>)}
            </Box>
        </Box>
        <CardActions sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Typography mb={0} paragraph>от {pizzas.price}</Typography>
            <Button onClick={onAddCart()} variant='contained'>Добавить</Button>
        </CardActions>
    </Card>

}