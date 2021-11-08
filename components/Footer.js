import { Flex, Center, Icon, Spacer, Divider, Link } from '@chakra-ui/react';

function Footer() {
	return (
		<Flex
			backgroundColor="primary"
			width="100%"
			color="white"
			height="60px"
			padding="10px"
			justify="center"
			position="fixed"
			left="0"
			bottom="0"
		>
			<Center>Copyright &copy; 2021 Accountancy Coding </Center>
		</Flex>
	);
}

export default Footer;
