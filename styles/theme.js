import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from '../components/buttonStyles';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em',
});

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const myNewTheme = extendTheme({
	colors: {
		primary: '#04250e',
		secondary: '#f01919',
		danger: '#f01919',
		brand: {
			100: '#04250e',
			greyPrimary: '#38383d',
			greySecondary: '#42414d',
		},
	},
	breakpoints,
	config,
	fonts: {
		heading: 'Open Sans',
		body: 'Roboto',
	},

	components: {
		Button,
	},
});
export default myNewTheme;
