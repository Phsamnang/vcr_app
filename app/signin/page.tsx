'use client'
import React, {useEffect} from 'react'
import {useForm} from "react-hook-form";
import {getSession, signIn} from "next-auth/react";
import classes from './signin.module.css'
import {useRouter} from "next/navigation";

export default function page() {
    const {setValue, getValues, register, handleSubmit} = useForm();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession();
            if (session) {
                router.push('/'); // Redirect to protected page
            }
        };

        checkSession();
    }, [router]);
    const onSubmit = async () => {
        const result = await signIn("credentials", {
            email: getValues("username"),
            password: getValues("password"),
            redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center text-dark mt-5">ចូលកម្មវិធី</h2>
                        <div className="card my-5">
                            <form className={`${classes.btnColor} card-body  p-lg-5 `}
                                  onSubmit={handleSubmit(onSubmit)}>
                                <div className="text-center">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                                        className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                        width="200px"
                                        alt="profile"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Username"
                                        aria-describedby="emailHelp"
                                        placeholder="User Name"
                                        onChange={(e) => {
                                            setValue("username", e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="password"
                                        onChange={(e) => {
                                            setValue("password", e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className={`btn ${classes.btnColor} px-5 mb-5 w-100`}>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
