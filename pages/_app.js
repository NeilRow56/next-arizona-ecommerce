import '../styles/globals.css';
import '@fontsource/raleway/400.css';
import '@fontsource/roboto/400.css';
import '@fontsource/open-sans/700.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import myNewTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={myNewTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
export default MyApp;
