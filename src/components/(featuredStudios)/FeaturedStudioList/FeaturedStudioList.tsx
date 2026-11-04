import StudioCard from '@/components/(studios)/StudioCard/StudioCard';
import { Studio } from '@/types/studio';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const fetchAllStudios = async (): Promise<Studio[]> => {
     try {
          const res = await fetch(`http://localhost:5000/featured-studios`);

          if (!res?.ok) {
               throw new Error("Failed to fetch studios")
          }
          return res.json();
     } catch (err: any) {
          console.error("Studio fetch error:", err);
          return []
     }
}

const FeaturedStudioList = async () => {
     const studio = await fetchAllStudios();
     // console.log(studio);

     return (
          <>
               {
                    studio.length > 0 ? (
                         <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                              {
                                   studio?.map((sdo: Studio, idx) => <StudioCard key={sdo?._id} studio={sdo} />)
                              }
                         </div>
                    ) : (
                         <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
                              <div className="p-8 text-center py-16">
                                   <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-3 text-zinc-400"><Sparkles className="w-6 h-6" /></div>
                                   <h3 className="text-base font-semibold text-zinc-800">No listings found</h3>
                                   <p className="text-sm text-zinc-500 mt-1 max-w-sm mx-auto">You haven&apos;t listed any studios yet. Get started by adding your first creative space.</p>
                                   <div className="mt-6">
                                        <Link href="/add-studio" className="inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors">Create Listing</Link>
                                   </div>
                              </div>
                         </div>
                    )
               }
          </>
     )
}

export default FeaturedStudioList
