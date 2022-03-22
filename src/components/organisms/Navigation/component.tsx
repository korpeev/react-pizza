import {Box, useTheme} from "@mui/system";
import {Drawer, ListItem, List, ListItemText, Button, useMediaQuery, Typography, Divider} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {navigationList} from "components/organisms/Navigation/props.mock";
import {FC, useCallback, useState} from "react";
import {Props} from "./types";

export const Navigation: FC<Props> = ({list}) => {
    const [activeElementId, setActiveElementId] = useState(1)
    const [isOpen, setOpen] = useState(false)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const onChangeActiveClass = useCallback((id: number) => {
        return () => setActiveElementId(id)
    }, [])
    const getActiveClass = useCallback((id: number) => activeElementId === id ? 'btnColorActive' : 'btnColor', [activeElementId])

    const toggleMenu = () => {
        setOpen(!isOpen)
    }
    const onCloseMenu = () => {
        setOpen(false)
    }
    return (
        <Box display='flex' component="nav" alignItems='center'>
            {matches && <Button onClick={toggleMenu}><MenuIcon/></Button>}
            <Drawer anchor='left' open={isOpen} onClose={onCloseMenu}>

                <Box sx={{width: '300px'}} display='flex' p={2} alignItems='center' justifyContent='space-between'>
                    <Typography>Menu</Typography>
                    <Button onClick={onCloseMenu} color='error'>
                        <CloseIcon/>
                    </Button>
                </Box>
                <Divider/>
                <Box display='flex' justifyContent='center'>
                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        {list?.map(l => (
                            <ListItem key={l.id}>
                                <Button
                                    // @ts-ignore next-line
                                    color={getActiveClass(l.id)}
                                    onClick={onChangeActiveClass(l.id)}
                                    variant="contained"
                                    sx={{
                                        borderRadius: "30px",
                                        boxShadow: 'none'
                                    }}
                                >
                                    <ListItemText sx={{
                                        textTransform: 'capitalize'
                                    }}>{l.title}</ListItemText>
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <List sx={{
                display: matches ? 'none' : 'flex',

            }}>
                {list?.map(l => (
                    <ListItem key={l.id} sx={{width: '100%'}}>
                        <Button
                            // @ts-ignore next-line
                            color={getActiveClass(l.id)}
                            onClick={onChangeActiveClass(l.id)}
                            variant="contained"
                            sx={{
                                borderRadius: "30px",
                                boxShadow: 'none'
                            }}
                        >
                            <ListItemText sx={{
                                textTransform: 'capitalize'
                            }}>{l.title}</ListItemText>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

Navigation.defaultProps = {
    list: navigationList
}