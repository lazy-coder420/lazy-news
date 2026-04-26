"use client";

import { Eye, Bookmark, Share2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewsCard = ({ news }) => {
    if (!news) return null;

    const router = useRouter();
    const { title, author, image_url, details, rating, total_view } = news;

    return (
        <div className="bg-white rounded-xl shadow p-4 space-y-4">

            {/* Author */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Image
                        src={author?.img || "/user.png"}
                        alt={author?.name || "author"}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{author?.name}</h4>
                        <p className="text-xs text-gray-500">
                            {author?.published_date?.split(" ")[0]}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <Bookmark size={18} />
                    <Share2 size={18} />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold">{title}</h2>

            {/* Image */}
            <Image
                src={image_url || "/fallback.jpg"}
                alt={title || "news"}
                width={800}
                height={400}
                className="w-full h-60 object-cover rounded-lg"
            />

            {/* Details */}
            <p className="text-gray-600 text-sm">
                {details?.slice(0, 200) || "No details"}...
                <span
                    className="text-orange-500 font-semibold cursor-pointer hover:underline"
                    onClick={() => router.push(`/categories/news/${news._id}`)}
                >
                    {""}Read More
                </span>
            </p>

            {/* Bottom */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-orange-400">
                    {"★".repeat(Math.round(rating?.number || 0))}
                    <span className="text-gray-700 ml-2">{rating?.number || 0}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <Eye size={18} />
                    <span>{total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;