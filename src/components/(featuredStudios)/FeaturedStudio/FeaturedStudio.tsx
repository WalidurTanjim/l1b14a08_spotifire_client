import React, { Suspense } from 'react'
import FeaturedStudioList from '../FeaturedStudioList/FeaturedStudioList'

// const fetchAllStudios = async (category: string): Promise<Studio[]> => {
//      try {
//           const url = category 
//                ? `http://localhost:5000/all-studios?category=${encodeURIComponent(category)}`
//                : `http://localhost:5000/all-studios`;
//           const res = await fetch(url, { cache: 'no-store' });

//           if (!res?.ok) {
//                throw new Error("Failed to fetch studios")
//           }

//           return res.json();
//      } catch (err: any) {
//           console.error("Studio fetch error:", err);
//           return []
//      }
// }

const FeaturedStudio = () => {
     return (
          <div className='w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20 py-20'>
               {/* section header */}
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                         <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-1">LATEST FEATURED STUDIOS</div>
                         <div className="text-2xl md:text-3xl font-semibold text-foreground">Browse by Featured Studio</div>
                    </div>

                    <div>
                         <div className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700 cursor-pointer transition-colors">
                              <span>Explore All Studios</span>
                              <span>→</span>
                         </div>
                    </div>
               </div>

               {/* section body */}
               <Suspense fallback={<p>Featured studios are loading...</p>}>
                    <FeaturedStudioList />
               </Suspense>
          </div>
     )
}

export default FeaturedStudio
