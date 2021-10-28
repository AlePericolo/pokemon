import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUser } from 'react-icons/fa'

import Image from 'next/image'
import Title from "@/components/ui/title";
import User from '@/components/form/user'

import { useTranslation } from 'next-i18next';

import { isNil } from "lodash";

const Dashboard = () => {

    const { t } = useTranslation('homepage');

    const [profile, setProfile] = useState(false)
    const { name, gender } = useSelector(state => state.app.user)

    const renderContent = () => {
        if (isNil(name) || isNil(gender) || profile) return <User setProfile={setProfile} />

        return (
            <div className="w-100 text-center p-sm-5">
                <p className="h3">{t("hello")} <strong>{name}</strong>,</p>
                <p className="h3">{t("welcome")}</p>
                <button type="button" className="btn btn-dark mt-4" onClick={() => setProfile(true)}>
                    <FaUser />
                </button>
            </div>
        )
    }

    return (
        <>
            <Title title="Homepage" />
            <div className="dashboard">
                <div className="row">
                    <div className="col-12 col-sm-5 offset-sm-1 text-center">
                        <Image 
                            className="img-responsive oak p-3" 
                            src="/assets/images/oak.png" 
                            alt="Oak"
                            width={300}
                            height={600}
                        />
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
        </>
    )
};

export default Dashboard;
