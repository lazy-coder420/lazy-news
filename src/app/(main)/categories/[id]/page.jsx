import LeftBar from '@/Componets/homepage/news/LeftBar';
import NewsCard from '@/Componets/homepage/news/NewsCard';
import RightBar from '@/Componets/homepage/news/RightBar';
import { getCategories, getNews } from '@/lib/api';

const NewsCategoriesPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategories();
    const news = await getNews(id);

    // Show error if no news found
    if (!news || news.length === 0) {
        return (
            <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
                <div className="col-span-3 p-4 rounded">
                    <LeftBar categories={categories} activeID={id} />
                </div>

                <div className="col-span-6 bg-emerald-200 p-4 rounded">
                    <h2 className="font-bold text-xl">All News</h2>
                    <p className="text-gray-600 mt-4">No news found for this category.</p>
                </div>

                <div className="col-span-3 bg-cyan-100 p-4 rounded">
                    <RightBar />
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

            <div className="col-span-3 p-4 rounded">
                <LeftBar categories={categories} activeID={id} />
            </div>

            <div className="col-span-6 p-4 rounded">
                <h2 className="font-bold text-xl">All News</h2>

                {news.map((data) => (
                    <NewsCard key={data._id} news={data} />
                ))}
            </div>

            <div className="col-span-3 p-4 rounded">
                <RightBar />
            </div>
        </div>
    );
};

export default NewsCategoriesPage; 