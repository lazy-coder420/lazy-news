"use client";

import { Card } from "@heroui/react";
import { FaReact, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi";

const AboutPage = () => {
    return (<div className="min-h-screen bg-gray-100 px-4 md:px-8 py-12"> <div className="max-w-6xl mx-auto space-y-10">


        {/* Header */}
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
                About Dragoon News 📰
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Dragoon News is a modern news platform built with powerful web
                technologies to deliver real-time news with a fast, secure, and
                responsive experience.
            </p>
        </div>

        {/* Mission */}
        <Card className="shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <HiOutlineNewspaper size={22} /> Our Mission
            </h2>
            <p className="text-gray-600">
                We aim to provide accurate, fast, and categorized news content
                while ensuring a smooth user experience across all devices.
            </p>
        </Card>

        {/* Features */}
        <Card className="shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">🚀 Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-600 list-disc pl-5">
                <li>Real-time news from multiple categories</li>
                <li>Secure authentication system</li>
                <li>Fully responsive design</li>
                <li>Fast page loading</li>
                <li>Clean and modern UI</li>
                <li>Dynamic news details page</li>
            </ul>
        </Card>

        {/* Tech Stack */}
        <Card className="shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">💻 Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">

                <div className="flex flex-col items-center gap-2">
                    <SiNextdotjs size={40} />
                    <p>Next.js</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <FaReact size={40} className="text-blue-500" />
                    <p>React</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <SiTailwindcss size={40} className="text-sky-400" />
                    <p>Tailwind CSS</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <SiMongodb size={40} className="text-green-600" />
                    <p>MongoDB</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <FaDatabase size={40} />
                    <p>API Integration</p>
                </div>

            </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Dragoon News. All rights reserved.
        </div>

    </div>
    </div>


    );
};

export default AboutPage;
