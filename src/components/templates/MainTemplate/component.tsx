import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { FC } from "react";

export const MainTemplate: FC = ({ children }) => {
  return (
    <Box
      component="main"
      py={5}
      bgcolor={(props) => props.palette.bgColor.main}
      sx={{
        height: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component="div"
          px={4}
          py={5}
          position="relative"
          bgcolor="white"
          sx={{
            minHeight: "100vh",
            borderRadius: "10px",
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};
