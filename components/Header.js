import {
	Box,
	Stack,
	Heading,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	Portal,
	Badge,
	Circle,
	Link,
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
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

const Header = (props) => {
	const router = useRouter();
	const handleToggle = () => (isOpen ? onClose() : onOpen());
	const [display, changeDisplay] = useState('none');
	const { state, dispatch } = useContext(Store);

	const { cart, userInfo } = state;
	const [anchorEl, setAnchorEl] = useState(null);
	const loginClickHandler = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const loginMenuCloseHandler = () => {
		setAnchorEl(null);
	};
	const logoutClickHandler = () => {
		setAnchorEl(null);
		dispatch({ type: 'USER_LOGOUT' });
		Cookies.remove('userInfo');
		Cookies.remove('cartItems');
		router.push('/');
	};

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
			overflow="auto"
			position="sticky"
			left="0"
			top="-100"
		>
			<Flex align="center" mr={5}>
				<Heading as="h1" size="lg" letterSpacing={'tighter'}>
					<NextLink href="/" passHref>
						<Link>Amazona</Link>
					</NextLink>
				</Heading>
			</Flex>
			<Spacer />

			{cart.cartItems.length > 0 ? (
				<Circle color="white" bgColor="teal" width="35px" heigth="35px">
					{' '}
					{cart.cartItems.length}
				</Circle>
			) : (
				[]
			)}
			<Flex display={['none', 'none', 'flex', 'flex']}>
				<NextLink href="/cart" passHref>
					<Button
						as="a"
						color="prime.100"
						variant="primary"
						aria-label="Cart"
						mr={1}
						w="100%"
					>
						Cart
					</Button>
				</NextLink>
				{userInfo ? (
					<Menu anchorEl={anchorEl}>
						<MenuButton
							color="prime.100"
							onClick={loginClickHandler}
						>
							{userInfo.name}
						</MenuButton>
						<Portal>
							<MenuList>
								<MenuItem
									MenuItem
									onClick={loginMenuCloseHandler}
								>
									Profile
								</MenuItem>
								<MenuItem
									MenuItem
									onClick={loginMenuCloseHandler}
								>
									My account
								</MenuItem>
								<MenuItem MenuItem onClick={logoutClickHandler}>
									Logout
								</MenuItem>
							</MenuList>
						</Portal>
					</Menu>
				) : (
					<NextLink href="/login" passHref>
						<Button
							as="a"
							variant="primary"
							aria-label="Login"
							my={1}
							w="100%"
						>
							Login
						</Button>
					</NextLink>
				)}
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
				position="fixed"
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
					<NextLink href="/cart" passHref>
						<Button
							as="a"
							variant="primary"
							aria-label="Cart"
							my={1}
							w="100%"
						>
							Cart2
						</Button>
					</NextLink>
					<NextLink href="/login" passHref>
						<Button
							as="a"
							variant="primary"
							aria-label="Login"
							my={1}
							w="100%"
						>
							Login2
						</Button>
					</NextLink>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
