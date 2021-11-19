import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Shipping() {
	const router = useRouter();

	router.push('/login');
	return <Layout>Shipping Screen</Layout>;
}
