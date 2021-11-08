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
	Grid,
	GridItem,
} from '@chakra-ui/react';
import data from '../utils/data';

export default function Home() {
	return (
		<Layout>
			<Container maxW="100%" overflow="auto">
				<Text fontSize="25px" fontWeight="bold">
					Products
				</Text>
				<Grid
					width="80%"
					height="80%"
					margin="auto"
					h="200px"
					templateColumns="repeat(12, 1fr)"
					gap={4}
				>
					{data.products.map((product) => (
						<GridItem
							colSpan={4}
							maxW="md"
							bg="papayawhip"
							key={product.name}
						>
							<LinkBox
								align="center"
								maxW="md"
								paddingTop="10px"
								borderWidth="1px"
								borderRadius="lg"
								overflow="hidden"
							>
								<AspectRatio maxW="400px" ratio={1 / 1}>
									<Image
										src={product.image}
										boxsize="150px"
										objectFit="cover"
										alt={product.name}
									/>
								</AspectRatio>

								<Box p="6">
									<Box display="flex" alignItems="baseline">
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
											<NextLink href="#" passHref>
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
									>
										{/* {property.title} */}
									</Box>

									<Box
										marginTop="5px"
										as="span"
										color="gray.600"
										fontSize="sm"
										display="flex"
									>
										<Center>
											<Text>
												Price: £ {product.price}
											</Text>
										</Center>

										<Box width="70%">
											<Center>
												<Button
													variant="primary"
													size="sm"
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
						</GridItem>
					))}
				</Grid>
			</Container>
		</Layout>
	);
}
