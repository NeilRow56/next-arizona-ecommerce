import React from 'react';
import NextLink from 'next/link';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import {
	FormControl,
	FormHelperText,
	Flex,
	Link,
	List,
	ListItem,
	Box,
	Button,
	FormLabel,
	Heading,
	Input,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';

export default function Login() {
	const router = useRouter();
	const { redirect } = router.query;
	const { state, dispatch } = useContext(Store);
	const { userInfo } = state;
	useEffect(() => {
		if (userInfo) {
			router.push('/');
		}
	}, []);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post('/api/users/login', {
				email,
				password,
			});
			dispatch({ type: 'USER_LOGIN', payload: data });
			Cookies.set('userInfo', JSON.stringify(data));
			router.push(redirect || '/');
		} catch (err) {
			alert(err.response.data ? err.response.data.message : err.message);
		}
	};
	return (
		<Layout>
			<Flex align="center" margin="auto" justifyContent="center">
				<Box p={2} mt={20}>
					<Box textAlign="center" Maxwidth="800px">
						<Heading>Login</Heading>
					</Box>
					<Box my={4} textAlign="left">
						<form onSubmit={submitHandler}>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input
									type="email"
									id="email"
									placeholder="example@example.com"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormControl>
							<FormControl mt={6}>
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									id="password"
									placeholder="*******"
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</FormControl>
							<Button
								width="full"
								mt={4}
								mb={4}
								type="submit"
								bg="prime.100"
							>
								Login
							</Button>
							<List>
								<ListItem>
									Don't have an account? &nbsp;
									<NextLink href="/register" passHref>
										<Link color="prime.100">Register</Link>
									</NextLink>
								</ListItem>
							</List>
						</form>
					</Box>
				</Box>
			</Flex>
		</Layout>
	);
}
