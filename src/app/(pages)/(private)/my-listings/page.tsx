import Link from "next/link"
import { Plus, Sparkles } from "lucide-react"
import { Suspense } from "react"
import MyListingsList from "@/components/(private)/(my-listings)/MyListingsList/MyListingsList"


export default async function MyListingsPage() {
     

     return (
          <div className="w-full min-h-screen bg-zinc-50/50 py-8 md:py-12">
               <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20 space-y-8">

                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-200 pb-5">
                         <div>
                              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">My Studio Listings</h1>
                              <p className="text-sm text-zinc-500 mt-1">Manage your published creative spaces, update pricing, or remove listings.</p>
                         </div>
                         <Link href="/add-studio" className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"><Plus className="w-4 h-4" /> Add New Studio</Link>
                    </div>

                    {/* Content Container (Table Area Placeholder) */}
                    {/* <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
                         <div className="p-8 text-center py-16">
                              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-3 text-zinc-400"><Sparkles className="w-6 h-6" /></div>
                              <h3 className="text-base font-semibold text-zinc-800">No listings found</h3>
                              <p className="text-sm text-zinc-500 mt-1 max-w-sm mx-auto">You haven&apos;t listed any studios yet. Get started by adding your first creative space.</p>
                              <div className="mt-6">
                                   <Link href="/add-studio" className="inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors">Create Listing</Link>
                              </div>
                         </div>
                    </div> */}

                    <Suspense fallback={<p>Listing loading...</p>}>
                         <MyListingsList />
                    </Suspense>
               </div>
          </div>
     )
}
