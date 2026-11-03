import Link from "next/link"
import Image from "next/image"
import { Studio } from "@/types/studio"
import { MapPin, Users, DollarSign, Edit, Trash2 } from "lucide-react"
import StudioListingCardDeleteBtn from "@/components/(Buttons)/StudioListingCardDeleteBtn/StudioListingCardDeleteBtn";

interface StudioCardProps {
     studio: Studio;
}

export default function StudioListingCard({ studio }: StudioCardProps) {
     return (
          <div className="bg-white border border-zinc-200 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

               {/* Left: Image & Main Info */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto flex-1">
                    {/* Studio Thumbnail */}
                    <div className="relative w-full sm:w-32 h-36 sm:h-24 rounded-xl overflow-hidden bg-zinc-100 shrink-0 border border-zinc-100">
                         <Image
                              src={studio.image || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"}
                              alt={studio.studio_title}
                              fill
                              sizes="(max-width: 640px) 100vw, 128px"
                              className="object-cover"
                         />
                         <span className="absolute top-2 left-2 z-10 bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                              {studio.category}
                         </span>
                    </div>

                    {/* Title & Metadata */}
                    <div className="space-y-1.5 w-full">
                         <h3 className="text-base font-semibold text-zinc-900 line-clamp-1">
                              {studio.studio_title}
                         </h3>

                         <p className="flex items-center gap-1.5 text-xs text-zinc-500">
                              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                              <span className="truncate max-w-xs">{studio.location}</span>
                         </p>

                         {/* Quick Specs Badges */}
                         <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-zinc-600">
                              <span className="inline-flex items-center gap-1 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg font-medium">
                                   <DollarSign className="w-3.5 h-3.5 text-zinc-500" />
                                   ${studio.hourly_rate}/hr
                              </span>
                              <span className="inline-flex items-center gap-1 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg font-medium">
                                   <Users className="w-3.5 h-3.5 text-zinc-500" />
                                   Max {studio.max_capacity} people
                              </span>
                              <span className="text-zinc-400 text-[11px]">
                                   Deposit: ${studio.security_deposit}
                              </span>
                         </div>
                    </div>
               </div>

               {/* Right: Update & Delete Action Buttons */}
               <div className="flex items-center gap-2.5 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-zinc-100">
                    <Link
                         href={`/studios/edit/${studio._id}`}
                         className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-medium px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                         <Edit className="w-3.5 h-3.5" />
                         <span>Update</span>
                    </Link>

                    <StudioListingCardDeleteBtn studioId={studio?._id} />
               </div>

          </div>
     )
}