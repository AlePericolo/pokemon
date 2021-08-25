import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {

	const { name, sex } = useSelector(state => state.app.user)

    return (
        <div className="row">
            <div className="col">
                check state: <br />
                se sex/name definito renderizza welcome page + config (per cambiare sex/name)<br />
                se sex/name NON definito renderizza prof Oak che chiede<br />
            </div>
        </div>
    )
};

export default Dashboard;
