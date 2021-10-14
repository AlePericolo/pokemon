import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUserInfo } from "@/store/actions"

import { FaSave, FaTrash } from 'react-icons/fa'

import { isNil } from "lodash"

export const User = (props) => {

    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();

    const { name, gender } = useSelector(state => state.app.user)

    const dispatch = useDispatch();

    useEffect(() => {
        if (isNil(name) || isNil(gender)) return

        setValue("name", name, {
            shouldValidate: true,
            shouldDirty: true
        })

        setValue("gender", gender, {
            shouldValidate: true,
            shouldDirty: true
        })
    }, [name, gender])

    const onSubmit = (data) => {
        dispatch(setUserInfo(data))
        props.setProfile(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name" className="text-bold h3">What's your name?</label>
                <input id="name" className="form-control" type="text"
                    {...register("name", { required: true, maxLength: 20 })} />
                <small className="text-danger">{errors.name && "name is required"}</small>
            </div>
            <div className="form-group">
                <label htmlFor="gender" className="text-bold h3">Are you a boy? <br />Or are you a girl?</label>
                <select id="gender" className="form-control" {...register("gender", { required: true })}>
                    <option value={null}></option>
                    <option value="boy">boy</option>
                    <option value="girl">girl</option>
                </select>
                <small className="text-danger">{errors.gender && "gender is required"}</small>
            </div>
            <div className="w-100 text-center mt-5">
                <button type="submit" className="btn btn-dark mx-2"> <FaSave /> </button>
                <button type="button" className="btn btn-dark mx-2"
                    onClick={() => reset({
                        name: name ? name : null,
                        gender: gender ? gender : null
                    })}> <FaTrash /> </button>
            </div>
        </form>
    );
}

export default User