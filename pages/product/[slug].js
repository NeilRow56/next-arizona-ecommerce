import Layout from '../../components/Layout';
import React, { useContext } from 'react';
import NextLink from 'next/link';
import {
	Text,
	AspectRatio,
	Button,
	Center,
	Spacer,
	Flex,
	Image,
	Container,
	Box,
	Badge,
	Square,
	Link,
	LinkBox,
	LinkOverlay,
	UnorderedList,
	List,
	ListItem,
	Wrap,
	WrapItem,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import db from '../../utils/db';
import Product from '../../models/Product';
import axios from 'axios';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';

export default function ProductScreen(props) {
	const router = useRouter();
	const { state, dispatch } = useContext(Store);
	const { product } = props;

	if (!product) {
		return <div>Product Not Found</div>;
	}
	const addToCartHandler = async () => {
		const existItem = state.cart.cartItems.find(
			(x) => x._id === product._id
		);
		const quantity = existItem ? existItem.quantity + 1 : 1;
		const { data } = await axios.get(`/api/products/${product._id}`);
		if (data.countInStock < quantity) {
			window.alert('Sorry. Product is out of stock');
			return;
		}
		dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
		router.push('/cart');
	};

	return (
		<Layout title={product.name} description={product.description}>
			<Flex>
				<Box flex="1" align="center" mt={10} mb={10}>
					<NextLink href="/" passHref>
						<Link color="prime.100">back to products</Link>
					</NextLink>
				</Box>
			</Flex>
			<Wrap spacing="30px" justify="center">
				<WrapItem>
					<Image
						src={product.image}
						alt={product.name}
						width="600px"
						height="600px"
						borderRadius="10px"
					/>
				</WrapItem>
				<WrapItem>
					<List>
						<ListItem>
							<Text fontWeight="bold" fontSize="3xl">
								{product.name}
							</Text>
						</ListItem>
						<ListItem>
							<Text fontWeight="medium" fontSize="2xl">
								Catergory: {product.category}
							</Text>
						</ListItem>
						<ListItem>
							<Text fontWeight="medium" fontSize="2xl">
								Brand: {product.brand}
							</Text>
						</ListItem>
						<ListItem>
							<Text fontWeight="medium" fontSize="2xl">
								Rating: {product.rating} stars (
								{product.numReviews} reviews)
							</Text>
						</ListItem>

						<ListItem>
							<Text fontWeight="medium" fontSize="2xl">
								{' '}
								Description: {product.description}{' '}
							</Text>
						</ListItem>
					</List>
				</WrapItem>
				<WrapItem>
					<Box
						maxW="sm"
						borderWidth="1px"
						boxShadow="sm"
						borderRadius="lg"
					>
						<List>
							<ListItem>
								<Wrap width="300px" spacing="2px">
									<WrapItem>
										<Box w="150px" h="30px">
											<Text
												fontWeight="bold"
												marginStart="10px"
											>
												Price
											</Text>
										</Box>
										<Box w="150px" h="30px">
											<Text fontWeight="medium">
												£ {product.price}
											</Text>
										</Box>
									</WrapItem>
								</Wrap>
							</ListItem>
							<ListItem>
								<Wrap width="300px" spacing="2px">
									<WrapItem>
										<Box w="150px" h="30px">
											<Text
												fontWeight="bold"
												marginStart="10px"
											>
												Status
											</Text>
										</Box>
										<Box w="150px" h="30px">
											<Text
												fontWeight="medium"
												align="left"
											>
												{' '}
												{product.countInStock > 0
													? 'In Stock'
													: 'Out of Stock'}
											</Text>
										</Box>
									</WrapItem>
								</Wrap>
							</ListItem>
							<ListItem>
								<Center>
									<Button
										width="90%"
										bg="prime.100"
										marginBottom="5px"
										onClick={addToCartHandler}
									>
										Add to cart
									</Button>
								</Center>
							</ListItem>
						</List>
					</Box>
				</WrapItem>
			</Wrap>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;

	await db.connect();
	const product = await Product.findOne({ slug }).lean();
	await db.disconnect();
	return {
		props: {
			product: db.convertDocToObj(product),
		},
	};
}
