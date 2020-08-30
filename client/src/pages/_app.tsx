import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import {Provider, createClient} from 'urql'
import theme from "../theme";

const client = createClient({ 
  url: 'http://localhost:5000/graphql',
  fetchOptions: {
    credentials: "include"
  }

})

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
