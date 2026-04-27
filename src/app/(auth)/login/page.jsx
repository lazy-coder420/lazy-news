"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"


const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        console.log("Login Data:", data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });


        console.log(res, error)
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* Card */}
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">

                {/* Title */}
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Login your account
                </h1>

                <hr className="mb-6" />

                {/* Form */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Email address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center mt-5 text-gray-600">
                    Don’t Have An Account ?{" "}
                    <Link href="/register" className="text-red-500 font-medium">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;