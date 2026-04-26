"use client";

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h1>

        <hr className="mb-6" />

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 accent-gray-800"
              required
            />
            <label className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="/terms" className="text-blue-500 hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition"
          >
            Register
          </button>

        </form>

        {/* Footer */}
        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;