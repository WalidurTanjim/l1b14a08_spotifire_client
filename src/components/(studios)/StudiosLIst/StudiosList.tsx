import { Studio } from '@/types/studio'
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import StudioCard from '../StudioCard/StudioCard';

const fetchAllStudios = async (category: string): Promise<Studio[]> => {
     try {
          const url = category 
               ? `http://localhost:5000/all-studios?category=${encodeURIComponent(category)}`
               : `http://localhost:5000/all-studios`;
          const res = await fetch(url, { cache: 'no-store' });

          if (!res?.ok) {
               throw new Error("Failed to fetch studios")
          }

          return res.json();
     } catch (err: any) {
          console.error("Studio fetch error:", err);
          return []
     }
}

const StudiosList = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
     const { category } = await searchParams;
     const studios = await fetchAllStudios(category);

     return (
          <>
               {
                    studios?.length > 0 ? (
                         <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                              {
                                   studios?.map((studio: Studio) => <StudioCard key={studio?._id} studio={studio} />)
                              }
                         </div>
                    ) : (
                         <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
                              <div className="p-8 text-center py-16">
                                   <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-3 text-zinc-400"><Sparkles className="w-6 h-6" /></div>
                                   <h3 className="text-base font-semibold text-zinc-800">No studio found</h3>
                                   <p className="text-sm text-zinc-500 mt-1 max-w-sm mx-auto">You haven&apos;t add any studios yet. Get started by adding your first creative space.</p>
                                   <div className="mt-6">
                                        <Link href="/add-studio" className="inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors">Add Studio</Link>
                                   </div>
                              </div>
                         </div>
                    )
               }
          </>
          
     )
}

export default StudiosList


{/* <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
               {
                    studios?.length > 0 ? studios?.map((studio: Studio) => <StudioCard key={studio?._id} studio={studio} />) : (
                         <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
                              <div className="p-8 text-center py-16">
                                   <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-3 text-zinc-400"><Sparkles className="w-6 h-6" /></div>
                                   <h3 className="text-base font-semibold text-zinc-800">No studio found</h3>
                                   <p className="text-sm text-zinc-500 mt-1 max-w-sm mx-auto">You haven&apos;t add any studios yet. Get started by adding your first creative space.</p>
                                   <div className="mt-6">
                                        <Link href="/add-studio" className="inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors">Add Studio</Link>
                                   </div>
                              </div>
                         </div>
                    )
               }
          </div> */}