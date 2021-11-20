import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';

export default function Shipping() {
	const router = useRouter();
	const { state, dispatch } = useContext(Store);
	const { userInfo } = state;
	if (!userInfo) {
		router.push('/login?redirect=/shipping');
	}

	return <Layout>Shipping Screen</Layout>;
}
