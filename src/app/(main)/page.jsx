import { redirect } from 'next/navigation';

const default_category_id = "01"; // Set the default category ID here

const HomePage = async () => {
  redirect(`/categories/${default_category_id}`);
};












export default HomePage;