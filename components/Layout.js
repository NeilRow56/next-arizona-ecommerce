import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import { Container } from '@chakra-ui/react';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>
					{title ? `${title} - Next Amazona` : 'Next Amazona'}
				</title>
				{description && (
					<meta name="description" content={description}></meta>
				)}

				<meta name="keywords" content={keywords} />
			</Head>
			<Header />

			<Container
				// backgroundColor="blue.50"
				padding="10px"
				minHeight="87vh"
				maxWidth="70%"
			>
				{children}
			</Container>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Next Amazona',
	description: 'modern clothing',
	keywords: 'shirts, trousers, pants',
};
