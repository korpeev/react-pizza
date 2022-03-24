import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/system";
import {theme} from "MUI";
import CssBaseline from '@mui/material/CssBaseline';
function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline>

      <Component {...pageProps} />
    </CssBaseline>
  </ThemeProvider>
}

export default MyApp
