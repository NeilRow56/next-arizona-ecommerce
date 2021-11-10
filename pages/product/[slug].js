import { useRouter } from 'next/router';
import data from '../../utils/data';

import Layout from '../../components/Layout';
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

function ProductScreen() {
	const router = useRouter();
	const { slug } = router.query;
	const product = data.products.find((a) => a.slug === slug);
	if (!product) {
		return <div>Product Not Found</div>;
	}

	return (
		<Layout title={product.name} description={product.description}>
			<Flex>
				<Box flex="1" align="center" mt={10} mb={10}>
					<NextLink href="/" passHref>
						<Link>back to products</Link>
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
										bg="yellow.400"
										marginBottom="5px"
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

export default ProductScreen;
