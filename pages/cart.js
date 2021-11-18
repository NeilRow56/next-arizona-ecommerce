import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
	Box,
	Stack,
	Container,
	Heading,
	Badge,
	Circle,
	Link,
	IconButton,
	Menu,
	MenuItem,
	Select,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	Flex,
	Text,
	Spacer,
	Button,
	List,
	ListItem,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import Layout from '../components/Layout';

function CartScreen() {
	const { state } = useContext(Store);
	const {
		cart: { cartItems },
	} = state;

	return (
		<Layout title="Shopping Cart">
			<Heading component="h1" variant="h1" mb={10}>
				Shopping Cart
			</Heading>
			{cartItems.length === 0 ? (
				<div>
					Cart is empty. <NextLink href="/">Go shopping</NextLink>
				</div>
			) : (
				<Wrap spacing="30px" align="center">
					<WrapItem width="900px">
						<Table size="sm">
							<Thead>
								<Tr>
									<Th>Image</Th>
									<Th>Name</Th>
									<Th align="right">Quantity</Th>
									<Th align="right">Price</Th>
									<Th align="center">
										<Text align="center">Action</Text>
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								{cartItems.map((item) => (
									<Tr key={item._id}>
										<Td>
											<NextLink
												href={`product/${item.slug}`}
												passHref
											>
												<Link>
													<Box>
														<Image
															src={item.image}
															alt={item.name}
															width="60px"
															height="60px"
														/>
													</Box>
												</Link>
											</NextLink>
										</Td>
										<Td>
											<NextLink
												href={`product/${item.slug}`}
												passHref
											>
												<Link>
													<Text color="prime.100">
														{item.name}
													</Text>
												</Link>
											</NextLink>
										</Td>
										<Td align="right">
											<Select
												defaultValue={item.quantity}
											>
												{[
													...Array(
														item.countInStock
													).keys(),
												].map((x) => (
													<option
														key={x + 1}
														value={x + 1}
													>
														{x + 1}
													</option>
												))}
											</Select>
										</Td>
										<Td align="right">£ {item.price}</Td>
										<td align="center">
											<Button
												variant="contained"
												bgColor="secondary"
												color="#fff"
											>
												x
											</Button>
										</td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</WrapItem>

					<WrapItem>
						<Box
							width="300px"
							height="100px"
							border="1px"
							padding="10px"
							borderRadius="10px"
							borderColor="gray.100"
						>
							<List>
								<ListItem>
									<Text>
										Subtotal (
										{cartItems.reduce(
											(a, c) => a + c.quantity,
											0
										)}{' '}
										items) : £
										{cartItems.reduce(
											(a, c) => a + c.quantity * c.price,
											0
										)}
									</Text>
								</ListItem>
								<ListItem>
									<Button
										variant="Contained"
										bg="prime.100"
										isFullWidth
										my={2}
									>
										Check Out
									</Button>
								</ListItem>
							</List>
						</Box>
					</WrapItem>
				</Wrap>
			)}
		</Layout>
	);
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });