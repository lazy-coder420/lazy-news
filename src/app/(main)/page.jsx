import LeftBar from '@/Componets/homepage/news/LeftBar';
import RightBar from '@/Componets/homepage/news/RightBar';
import { ca } from 'date-fns/locale';
import React from 'react'
import NewsCategoriesPage from './categories/[id]/page';

async function getCategories() {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories'
  );

  const data = await res.json();
  return data.data.news_category;
}



// async function getNews(category_id) {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${category_id}`
//   );

//   const data = await res.json();
//   return data.data;
// }



const HomePage = async () => {
  const categories = await getCategories();
  // const news = await getNews("02");



  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

      {/* 🔹 Categories */}
      <div className="col-span-3 p-4 rounded">
        <LeftBar categories={categories} activeID={null} />

      </div>

      {/* 🔹 News */}
      <div className="col-span-6 bg-emerald-100 p-4 rounded">
        <h2 className="font-bold text-xl">All News</h2>

        {/* <NewsCategoriesPage params={{ id: "02" }} /> */}

      </div>

      {/* 🔹 Social */}
      <div className="col-span-3 bg-cyan-100 p-4 rounded">
        <RightBar />
      </div>

    </div>
  );
};

export default HomePage;