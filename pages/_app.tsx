import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/system";
import {theme} from "MUI";

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
