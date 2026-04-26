import { getNewsDetailsById } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";


export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    console.log(id, "params");
    const news = await getNewsDetailsById(id);
    console.log(news, "news");

    return {
        title: news.title,
        description: news.details,
    };
};





// 🔥 SERVER COMPONENT (IMPORTANT)
const NewsDetailsBy = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailsById(id);

    if (!news) {
        return <p className="text-center mt-10">News not found</p>;
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold my-4">
                Show News Data
            </h1>

            <div className="max-w-2xl mx-auto  my-8">
                <div className="card bg-base-100 shadow-sm">

                    <div className="card-body">

                        {/* Author */}
                        <div className="flex justify-between items-center bg-slate-200 p-4">

                            <div className="flex gap-2 items-center">
                                <Image
                                    src={news?.author?.img || "/user.png"}
                                    alt={news?.author?.name || "author"}
                                    height={40}
                                    width={40}
                                    className="rounded-full"
                                />

                                <div>
                                    <h2 className="font-semibold">
                                        {news?.author?.name}
                                    </h2>
                                    <p className="text-xs">
                                        {news?.author?.published_date}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2 text-xl">
                                <CiShare2 />
                                <CiBookmark />
                            </div>

                        </div>

                        {/* Title */}
                        <h2 className="card-title">
                            {news?.title}
                        </h2>

                        {/* Image */}
                        <figure>
                            <Image
                                src={news?.image_url || "/fallback.jpg"}
                                alt={news?.title || "news"}
                                width={800}
                                height={400}
                                className="w-full"
                            />
                        </figure>

                        {/* Details */}
                        <p>{news?.details}</p>

                        {/* Bottom */}
                        <div className="flex justify-between items-center">

                            <div className="flex items-center gap-2">

                                <div className="flex items-center gap-1 text-yellow-500">
                                    <IoIosStar />
                                    {news?.rating?.number || 0}
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaEye />
                                    {news?.total_view || 0}
                                </div>

                            </div>

                            <Link href={`/categories/${news?.category_id}`}>
                                <button className="btn bg-purple-500 ">
                                    See other news <BsArrowRight />
                                </button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetailsBy;