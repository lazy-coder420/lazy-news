import LeftBar from '@/Componets/homepage/news/LeftBar';
import RightBar from '@/Componets/homepage/news/RightBar';
import { getCategories, getNews } from '@/lib/api';

const NewsCategoriesPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategories();
    const news = await getNews(id);

    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

            <div className="col-span-3 p-4 rounded">
                <LeftBar categories={categories} activeID={id} />
            </div>

            <div className="col-span-6 bg-emerald-100 p-4 rounded">
                <h2 className="font-bold text-xl">All News</h2>

                {news.map((data) => (
                    <div key={data._id} className="border p-4 rounded my-4 bg-white shadow">
                        <h3 className="font-bold text-lg mb-2">{data.title}</h3>

                        {/* <p className="text-gray-600 text-sm">{data.description?.substring(0, 100)}...</p> */}
                    </div>
                ))}
            </div>

            <div className="col-span-3 bg-cyan-100 p-4 rounded">
                <RightBar />
            </div>

        </div>
    );
};

export default NewsCategoriesPage;