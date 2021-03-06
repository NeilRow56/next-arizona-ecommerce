import Layout from '../components/Layout';
import { StarIcon } from '@chakra-ui/icons';
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
	LinkBox,
	LinkOverlay,
	UnorderedList,
	ListItem,
	Wrap,
	WrapItem,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import db from '../utils/db';
import Product from '../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';

export default function Home(props) {
	const router = useRouter();
	const { state, dispatch } = useContext(Store);
	const { products } = props;
	const addToCartHandler = async (product) => {
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
		<Layout>
			<Container maxW="100%" overflow="hidden">
				<Flex my={10}>
					<Text fontSize="25px" fontWeight="bold">
						Products
					</Text>
				</Flex>

				<Wrap spacing="20px" justify="center">
					{products.map((product) => (
						<WrapItem key={product.name}>
							<Center w="400px" h="500px">
								<LinkBox
									align="center"
									width="85%"
									borderWidth="1px"
									borderRadius="lg"
									overflow="hidden"
								>
									<Image
										src={product.image}
										alt={product.name}
									/>

									<Box p="6">
										<Box
											display="flex"
											alignItems="baseline"
										>
											<Badge
												borderRadius="full"
												px="2"
												colorScheme="teal"
											>
												New
											</Badge>
											<Box
												color="gray.500"
												fontWeight="semibold"
												letterSpacing="wide"
												fontSize="xs"
												textTransform="uppercase"
												ml="2"
											>
												<NextLink
													href={`/product/${product.slug}`}
													passHref
												>
													<LinkOverlay>
														{product.name}
													</LinkOverlay>
												</NextLink>
											</Box>
										</Box>

										<Box
											mt="1"
											fontWeight="semibold"
											as="h4"
											lineHeight="tight"
											isTruncated
										></Box>

										<Box
											marginTop="5px"
											as="span"
											color="gray.600"
											fontSize="sm"
											display="flex"
										>
											<Center>
												<Text>
													Price: ?? {product.price}
												</Text>
											</Center>

											<Box width="70%">
												<Center>
													<Button
														bg="prime.100"
														size="sm"
														onClick={() =>
															addToCartHandler(
																product
															)
														}
													>
														Add to cart
													</Button>
												</Center>
											</Box>
										</Box>
										<Box
											display="flex"
											mt="2"
											alignItems="center"
										>
											{Array(5)
												.fill('')
												.map((_, i) => (
													<StarIcon
														key={i}
														color={
															i < product.rating
																? 'teal.500'
																: 'gray.300'
														}
													/>
												))}
											<Box
												as="span"
												ml="2"
												color="gray.600"
												fontSize="sm"
											>
												{product.numReviews} reviews
											</Box>
										</Box>
									</Box>
								</LinkBox>
							</Center>
						</WrapItem>
					))}
				</Wrap>
			</Container>
		</Layout>
	);
}
export async function getServerSideProps() {
	await db.connect();
	const products = await Product.find({}).lean();
	await db.disconnect();
	return {
		props: {
			products: products.map(db.convertDocToObj),
		},
	};
}
