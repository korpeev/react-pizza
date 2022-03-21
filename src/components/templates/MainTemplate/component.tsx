import {Box} from "@mui/system";
import {Container} from '@mui/material'
import {FC} from "react";

export const MainTemplate:FC = ({children}) => {
    return <Box component='main' p={3} bgcolor={(props) => props.palette.bgColor.main} sx={{
        height: '100vh',
    }}>
        <Container>
            <Box component='div' padding={5} bgcolor='white' sx={{
                borderRadius: '10px',
                height: 'calc(100vh - 80px)'
            }}>
                {children}
            </Box>
        </Container>
    </Box>
}