import React from "react";
import { useSelector } from "react-redux";

import Header from "../common/header";
import Footer from "../common/footer";

const Layout = (props) => {

	const { gender } = useSelector(state => state.app.user)

	return (
		<>
			<Header />
			<main role="main" className={`${gender ? gender : ''}`}>
				<div className="container-fluid py-3">
					{props.children}
				</div>
			</main>
			<Footer />
		</>
	);
};


export default Layout;
