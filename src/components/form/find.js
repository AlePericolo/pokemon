import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

import { FaSave, FaTrash } from 'react-icons/fa'

export const Find = (props) => {

    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();

    const router = useRouter()

    const onSubmit = (data) => {
        router.push({
            pathname: `/pokemon/${data.name.toLowerCase()}`
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name" className="text-bold h3">Pokemon's name?</label>
                <input id="name" className="form-control" type="text"
                    {...register("name", { required: true, maxLength: 20 })} />
                <small className="text-danger">{errors.name && "name is required"}</small>
            </div>
            <div className="w-100 text-center mt-5">
                <button type="submit" className="btn btn-dark mx-2"> <FaSave /> </button>
                <button type="button" className="btn btn-dark mx-2"
                    onClick={() => reset({
                        name: null
                    })}> <FaTrash /> </button>
            </div>
        </form>
    );
}

export default Find