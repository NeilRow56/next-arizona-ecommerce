import React from 'react';
import NextLink from 'next/link';
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

export default function Login() {
	return (
		<Layout>
			<Flex align="center" margin="auto" justifyContent="center">
				<Box p={2}>
					<Box textAlign="center" width="600px">
						<Heading>Login</Heading>
					</Box>
					<Box my={4} textAlign="left">
						<form>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input
									type="email"
									id="email"
									placeholder="example@example.com"
								/>
							</FormControl>
							<FormControl mt={6}>
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									id="password"
									placeholder="*******"
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
