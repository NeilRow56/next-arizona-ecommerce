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

export default function Register() {
	const router = useRouter();
	const { redirect } = router.query;
	const { state, dispatch } = useContext(Store);
	const { userInfo } = state;
	useEffect(() => {
		if (userInfo) {
			router.push('/');
		}
	}, []);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const { data } = await axios.post('/api/users/register', {
				name,
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
		<Layout title="Register">
			<Flex align="center" margin="auto" justifyContent="center">
				<Box p={2} mt={20}>
					<Box textAlign="center" maxWidth="500px">
						<Heading>Register</Heading>
					</Box>
					<Box my={4} textAlign="left">
						<form onSubmit={submitHandler}>
							<FormControl id="name">
								<FormLabel>Name</FormLabel>
								<Input
									id="name"
									type="text"
									placeholder="Name"
									onChange={(e) => setName(e.target.value)}
								/>
							</FormControl>
							<FormControl id="email">
								<FormLabel>Email</FormLabel>
								<Input
									id="email"
									type="email"
									placeholder="example@example.com"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormControl>
							<FormControl mt={6} id="password">
								<FormLabel>Password</FormLabel>
								<Input
									id="password"
									type="password"
									placeholder="*******"
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</FormControl>
							<FormControl mt={6} id="confirmPassword">
								<FormLabel>Confirm Password</FormLabel>
								<Input
									id="confirmPassword"
									type="password"
									placeholder="Confirm Password"
									onChange={(e) =>
										setConfirmPassword(e.target.value)
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
								Register
							</Button>
							<List>
								<ListItem>
									Already have an account? &nbsp;
									<NextLink
										href={`/login?redirect=${
											redirect || '/'
										}`}
										passHref
									>
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
