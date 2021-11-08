import Layout from '../components/Layout';
import { Text, Box, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Home() {
	return (
		<Layout>
			<Box paddingStart="20" paddingTop="10">
				<Text fontSize="25px" fontWeight="bold">
					Products
				</Text>
				<UnorderedList>
					<ListItem>Product 1</ListItem>
					<ListItem>Product 2</ListItem>
					<ListItem>Product 3</ListItem>
				</UnorderedList>
			</Box>
		</Layout>
	);
}
