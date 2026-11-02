import { StudioCategory } from '@/types/category';
import CategoryCard from '../CategoryCard/CategoryCard';
import categories_data from '@/data/categories.json'

const fetchCategories = async (): Promise<StudioCategory[]> => {
     try {
          // const res = await fetch(`${process.env.BASE_URL}/categories`);

          // if (!res?.ok) {
          //      throw new Error("Failed to fetch categories")
          // }

          // return res.json();
          return categories_data as StudioCategory[]
     } catch (err: any) {
          console.error("Category error:", err);
          throw err;
     }
}

const CategoryList = async () => {
     const categories = await fetchCategories();

     return (
          <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
               {
                    categories?.map((category: StudioCategory, idx) => <CategoryCard key={idx} category={category} />)
               }
          </div>
     )
}

export default CategoryList
