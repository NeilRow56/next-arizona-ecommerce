import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
	// style object for base or default style
	baseStyle: {},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {
		primary: (props) => ({
			bg: 'primary',
			color: 'white',
			_hover: {
				bg: mode(whiten('primary', 40), darken('primary', 40))(props),
				boxShadow: 'md',
			},
		}),
		secondary: (props) => ({
			bg: 'secondary',
			color: 'white',
			_hover: {
				bg: mode(
					whiten('secondary', 40),
					darken('secondary', 40)
				)(props),
				boxShadow: 'md',
			},
		}),
		danger: (props) => ({
			bg: 'danger',
			color: 'white',
			_hover: {
				bg: mode(
					whiten('secondary', 40),
					darken('secondary', 40)
				)(props),
				boxShadow: 'md',
			},
		}),
		secondaryOutline: (props) => ({
			bg: 'transparent',
			border: '1px solid',
			borderColor: 'secondary',
			color: 'secondary',
			transition: 'all 200ms ease',
			_hover: {
				boxShadow: 'md',
				transform: 'scale(1.02)',
			},
		}),
	},
};
