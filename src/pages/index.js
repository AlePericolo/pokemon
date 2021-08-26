import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUser } from 'react-icons/fa'

import User from '../components/form/user'

import { isNil } from "lodash";

const Dashboard = () => {

    const [profile, setProfile] = useState(false)
    const { name, gender } = useSelector(state => state.app.user)

    const renderContent = () => {
        if (isNil(name) || isNil(gender) || profile) return <User setProfile={setProfile} />

        return (
            <div className="w-100 text-center p-sm-5">
                <p className="h3">Hello <strong>{name}</strong>,</p>
                <p className="h3">Welcome to the world of POKEMON!</p>
                <button type="button" className="btn btn-dark mt-4" onClick={() => setProfile(true)}>
                    <FaUser />
                </button>
            </div>
        )
    }

    return (
        <div className="dashboard">
            <div className="row">
                <div className="col-12 col-sm-5 offset-sm-1 text-center">
                    <img className="img-responsive oak p-3" src="/assets/images/oak.png" />
                </div>
                <div className="col-12 col-sm-5">
                    <div className="card m-sm-5">
                        <div className="card-body bg-light">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;
