"use client";

import { Card, Button } from "@heroui/react";
import { FaBriefcase } from "react-icons/fa";

const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        type: "Full Time",
        location: "Remote",
        description:
            "Build modern UI using Next.js, Tailwind CSS, and ensure responsive design.",
    },
    {
        id: 2,
        title: "Backend Developer",
        type: "Full Time",
        location: "Remote",
        description:
            "Work with MongoDB, APIs, and authentication systems to power the app.",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        type: "Part Time",
        location: "Remote",
        description:
            "Design clean, modern interfaces and improve user experience.",
    },
];

const CareerPage = () => {
    return (<div className="min-h-screen bg-gray-100 px-4 md:px-8 py-12">


        <div className="max-w-6xl mx-auto space-y-10">

            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Careers at Dragoon News 💼
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Join our team and help build a modern news platform used by thousands.
                </p>
            </div>

            {/* Job List */}
            <div className="grid md:grid-cols-2 gap-6">

                {jobs.map((job) => (
                    <Card key={job.id} className="p-6 shadow-md">

                        <div className="flex items-center gap-3 mb-3">
                            <FaBriefcase size={20} />
                            <h2 className="text-xl font-semibold">{job.title}</h2>
                        </div>

                        <p className="text-sm text-gray-500 mb-2">
                            {job.type} • {job.location}
                        </p>

                        <p className="text-gray-600 mb-4">
                            {job.description}
                        </p>

                        <Button color="primary" variant="shadow">
                            Apply Now
                        </Button>

                    </Card>
                ))}

            </div>

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm">
                We are always looking for talented people 🚀
            </div>

        </div>
    </div>


    );
};

export default CareerPage;
