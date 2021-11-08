import React from 'react';
import {
	Box,
	Stack,
	Heading,
	IconButton,
	Flex,
	Text,
	Spacer,
	Button,
} from '@chakra-ui/react';
import TogButton from './TogButton';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Header = (props) => {
	const handleToggle = () => (isOpen ? onClose() : onOpen());
	const [display, changeDisplay] = useState('none');

	return (
		<Flex
			as="nav"
			align="center"
			width="100%"
			justify="space-between"
			wrap="wrap"
			padding={1}
			bg="primary"
			color="white"
			overflow="hidden"
			position="sticky"
			left="0"
			top="-100"
		>
			<Flex align="center" mr={5}>
				<Heading as="h1" size="lg" letterSpacing={'tighter'}>
					Amazona
				</Heading>
			</Flex>
			<Spacer />
			<Flex display={['none', 'none', 'flex', 'flex']}>
				<NextLink href="/" passHref>
					<Button
						as="a"
						variant="primary"
						aria-label="Home"
						my={1}
						w="100%"
					>
						Home
					</Button>
				</NextLink>
				<NextLink href="/" passHref>
					<Button
						as="a"
						variant="primary"
						aria-label="Home1"
						my={1}
						w="100%"
					>
						Home1
					</Button>
				</NextLink>
				<NextLink href="/" passHref>
					<Button
						as="a"
						variant="primary"
						aria-label="Home2"
						my={1}
						w="100%"
					>
						Home2
					</Button>
				</NextLink>
			</Flex>
			<IconButton
				aria-label="Open Menu"
				size="lg"
				backgroundColor="teal"
				mr={2}
				icon={<HamburgerIcon />}
				display={['flex', 'flex', 'none', 'none']}
				onClick={() => changeDisplay('flex')}
			/>
			<TogButton />
			<Flex
				w="100vw"
				bgColor="gray.50"
				zIndex={20}
				h="100vh"
				pos="fixed"
				top="0"
				left="0"
				overflow="auto"
				flexDir="column"
				display={display}
			>
				<Flex justify="flex-end">
					<IconButton
						backgroundColor="primary"
						mt={2}
						mr={2}
						aria-label="Close Menu"
						size="lg"
						icon={<CloseIcon />}
						onClick={() => changeDisplay('none')}
					/>
				</Flex>
				<Flex flexDir="column" align="center">
					<NextLink href="/" passHref>
						<Button
							as="a"
							variant="primary"
							aria-label="Home"
							my={1}
							w="100%"
						>
							Home
						</Button>
					</NextLink>
					<NextLink href="/" passHref>
						<Button
							as="a"
							variant="primary"
							aria-label="Home1"
							my={1}
							w="100%"
						>
							Home1
						</Button>
					</NextLink>
					<NextLink href="/" passHref>
						<Button
							as="a"
							variant="primary"
							aria-label="Home2"
							my={1}
							w="100%"
						>
							Home2
						</Button>
					</NextLink>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
