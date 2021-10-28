import React from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@/store/store';
import { isNode } from '@/utils/utils';

import { appWithTranslation } from 'next-i18next';

import Layout from "@/components/ui/layout";

import "@/sass/main.scss";

const WrapperSSR = (props) => {
	return isNode() ? props.children : <PersistGate loading={<div>Loading...</div>} persistor={persistor}>{props.children}</PersistGate>
}

const App = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<WrapperSSR>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</WrapperSSR>
		</Provider>
	);
}
export default appWithTranslation(App);