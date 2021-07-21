import React from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store/store';
import { isNode } from '../utils/utils';

import Layout from "../components/layout";

import "../sass/main.scss";

const WrapperSSR = (props) => {
	return isNode() ? props.children : <PersistGate loading={<div>Loading...</div>} persistor={persistor}>{props.children}</PersistGate>
}

function App({ Component, pageProps }) {
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

export default App;