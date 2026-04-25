import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
            <div className="text-center max-w-xl">

                {/* Error Icon */}
                <div className="flex justify-center mb-6">
                    <AlertTriangle
                        size={80}
                        className="text-red-500 animate-pulse"
                    />
                </div>

                {/* 404 Number */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-8">
                    Sorry, the page you are looking for does not exist.
                    It may have been moved, deleted, or the URL is incorrect.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
                >
                    <Home size={20} />
                    Go Back Home
                </Link>
            </div>
        </main>
    );
}