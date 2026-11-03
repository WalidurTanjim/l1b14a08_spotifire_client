// import { Studio } from "@/types/studio"

// const fetchDynamicStudioById = async(studioId: string): Promise<Studio> => {
//      try{
//           const res = await fetch(`http://localhost:5000/studios/${studioId}`);

//           if(!res?.ok) {
//                throw new Error("Failed to fetch studio by id")
//           }

//           return res?.json();
//      }catch(err: any) {
//           console.error("Dynamic studio error: ", err);
//           throw err;
//      }
// }

// const DynamicStudioById = async({ params }: { params: Promise<{ studioId: string }> }) => {
//      const { studioId } = await params;
//      const studio = await fetchDynamicStudioById(studioId);
//      console.log(studio);

//      return (
//           <div>

//           </div>
//      )
// }

// export default DynamicStudioById



import { Studio } from "@/types/studio"
import Image from "next/image"
import Link from "next/link"
import {
     MapPin,
     Share2,
     Heart,
     CheckCircle2,
     ShieldCheck,
     Users,
     Calendar,
     Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const fetchDynamicStudioById = async (studioId: string): Promise<Studio> => {
     try {
          const res = await fetch(`http://localhost:5000/studios/${studioId}`, {
               cache: 'no-store'
          });

          if (!res?.ok) {
               throw new Error("Failed to fetch studio by id")
          }

          return res?.json();
     } catch (err: any) {
          console.error("Dynamic studio error: ", err);
          throw err;
     }
}

const DynamicStudioById = async ({ params }: { params: Promise<{ studioId: string }> }) => {
     const { studioId } = await params;
     const studio = await fetchDynamicStudioById(studioId);

     return (
          <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20 pt-8">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top Header: Category, Location & Actions */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                         <div>
                              <div className="flex items-center gap-2 mb-2">
                                   <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 font-medium text-xs">
                                        {studio.category || "Studio Space"}
                                   </Badge>
                                   <span className="text-zinc-300 dark:text-zinc-700">•</span>
                                   <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                                        <MapPin className="w-4 h-4 mr-1 text-zinc-400 shrink-0" />
                                        <span>{studio.location}</span>
                                   </div>
                              </div>
                              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                   {studio.studio_title}
                              </h1>
                         </div>

                         <div className="flex items-center gap-3">
                              <Button variant="outline" size="sm" className="gap-2 bg-white dark:bg-zinc-900 shadow-sm">
                                   <Share2 className="w-4 h-4" />
                                   <span>Share</span>
                              </Button>
                              <Button variant="outline" size="sm" className="gap-2 bg-white dark:bg-zinc-900 shadow-sm">
                                   <Heart className="w-4 h-4 text-red-500" />
                                   <span>Wishlist</span>
                              </Button>
                         </div>
                    </div>

                    {/* Image Gallery Showcase */}
                    <div className="mb-8">
                         <div className="relative aspect-video md:aspect-21/9 w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-md">
                              <Image
                                   src={studio.image || "/placeholder-studio.jpg"}
                                   alt={studio.studio_title}
                                   fill
                                   priority
                                   className="object-cover"
                                   sizes="100vw"
                              />
                         </div>

                         {/* Thumbnail strip preview */}
                         <div className="flex gap-3 mt-3 overflow-x-auto pb-2">
                              <div className="relative w-32 aspect-video rounded-lg overflow-hidden border-2 border-amber-500 shrink-0 cursor-pointer">
                                   <Image src={studio.image || "/placeholder-studio.jpg"} alt="thumb 1" fill className="object-cover" />
                              </div>
                         </div>
                    </div>

                    {/* Main Content & Booking Sidebar Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                         {/* Left Column: Details, Specs, Amenities & Host */}
                         <div className="lg:col-span-2 space-y-6">

                              {/* Quick Specs Bar */}
                              <Card className="border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                                   <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100 dark:divide-zinc-800">
                                        <div className="space-y-1 pt-2 sm:pt-0">
                                             <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Hourly Rate</p>
                                             <p className="text-lg font-bold text-amber-600 dark:text-amber-400">${studio.hourly_rate}<span className="text-xs font-normal text-zinc-500">/hr</span></p>
                                        </div>
                                        <div className="space-y-1 pt-2 sm:pt-0 sm:pl-4">
                                             <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Security Deposit</p>
                                             <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">${studio.security_deposit}</p>
                                        </div>
                                        <div className="space-y-1 pt-2 sm:pt-0 sm:pl-4">
                                             <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Max Capacity</p>
                                             <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{studio.max_capacity} people</p>
                                        </div>
                                   </CardContent>
                              </Card>

                              {/* Workspace Overview */}
                              <Card className="border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                                   <CardContent className="p-6 space-y-3">
                                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Workspace Overview</h2>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                                             {studio.details}
                                        </p>
                                   </CardContent>
                              </Card>

                              {/* Equipment & Amenities */}
                              <Card className="border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                                   <CardContent className="p-6 space-y-4">
                                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Equipment & Amenities</h2>
                                        {studio.amenities && studio.amenities.length > 0 ? (
                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                  {studio.amenities.map((amenity, idx) => (
                                                       <div key={idx} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                            <span>{amenity}</span>
                                                       </div>
                                                  ))}
                                             </div>
                                        ) : (
                                             <p className="text-sm text-zinc-500">No amenities listed for this studio.</p>
                                        )}
                                   </CardContent>
                              </Card>

                              {/* Host Profile Card */}
                              <Card className="border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                                   <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                             <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-700 dark:text-zinc-300 text-lg">
                                                  {studio.username ? studio.username.charAt(0).toUpperCase() : "H"}
                                             </div>
                                             <div>
                                                  <div className="flex items-center gap-2">
                                                       <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Hosted by {studio.username || "Studio Host"}</h3>
                                                       <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 text-[10px]">Verified Host</Badge>
                                                  </div>
                                                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 flex items-center gap-1">
                                                       <Mail className="w-3 h-3" />
                                                       <span>{studio.email}</span>
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/60 px-3 py-2 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 text-xs text-zinc-600 dark:text-zinc-300">
                                             <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                                             <span>Protected by StudioSpace Host Guarantee</span>
                                        </div>
                                   </CardContent>
                              </Card>

                         </div>

                         {/* Right Column: Sticky Booking Widget */}
                         <div className="lg:col-span-1 lg:sticky lg:top-8">
                              <Card className="border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl overflow-hidden">
                                   <CardContent className="p-6 space-y-6">

                                        {/* Pricing Header */}
                                        <div className="flex items-baseline justify-between">
                                             <div>
                                                  <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">${studio.hourly_rate}</span>
                                                  <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-1">/ hour</span>
                                             </div>
                                        </div>

                                        <Separator className="bg-zinc-100 dark:bg-zinc-800" />

                                        {/* Booking Meta Details */}
                                        <div className="space-y-3 text-sm">
                                             <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                                                  <span>Security Deposit</span>
                                                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">${studio.security_deposit}</span>
                                             </div>
                                             <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                                                  <span>Cancellation Policy</span>
                                                  <span className="font-medium text-emerald-600 dark:text-emerald-400 text-xs bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">Free before shoot confirmation</span>
                                             </div>
                                             <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                                                  <span>Availability</span>
                                                  <span className="font-medium text-zinc-900 dark:text-zinc-100">Instant Request Slots</span>
                                             </div>
                                        </div>

                                        {/* CTA Button */}
                                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold py-6 shadow-md transition-all">
                                             <Calendar className="w-4 h-4 mr-2" />
                                             Book Workspace Now
                                        </Button>

                                        <p className="text-center text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                                             You won't be charged immediately. Your reservation will enter <span className="font-medium text-zinc-700 dark:text-zinc-300">Pending status</span> for host approval.
                                        </p>

                                   </CardContent>
                              </Card>
                         </div>

                    </div>

               </div>
          </main>
     )
}

export default DynamicStudioById