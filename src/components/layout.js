import React from "react";
import { useSelector } from "react-redux";

import Header from "../common/header";
import Footer from "../common/footer";

const Layout = (props) => {

    const { sex } = useSelector(state => state.app)

	return (
		<div className="wrapper">
			<Header />
			<div className={`content ${sex}`}>
				<div className="data-container">
					<div className="contianer-fluid">
						{props.children}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};


export default Layout;
