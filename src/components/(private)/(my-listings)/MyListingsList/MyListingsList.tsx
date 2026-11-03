import { Studio } from '@/types/studio';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from 'next/navigation';
import StudioListingCard from '../StudioListingCard/StudioListingCard';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const fetchMyListings = async(email: string): Promise<Studio[]> => {
     try{
          const res = await fetch(`http://localhost:5000/studios?email=${email}`);

          if(!res.ok) {
               throw new Error("Failed to fetch my listings")
          }

          return res.json();
     }catch(err: any) {
          console.error("My listings fetch error: ", err);
          return [];
     }
}

const MyListingsList = async() => {
     const requestHeaders = await headers();
     const session = await auth.api.getSession({
          headers: requestHeaders
     });

     if(!session || !session?.user) {
          redirect("/signin")
     }

     const listings = await fetchMyListings(session?.user?.email);
     // console.log(listings);

     return (
          <>
            {
               listings.length > 0 ? listings.map((studio: Studio) => <StudioListingCard key={studio?._id} studio={studio} />) : (
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

export default MyListingsList
