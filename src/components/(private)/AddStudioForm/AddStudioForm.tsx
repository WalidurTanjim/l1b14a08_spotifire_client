"use client"

import React, { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { Plus, X, Loader2, Sparkles } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const CATEGORIES = [
     { name: "Photo Studios", slug: "photo-studios" },
     { name: "Sound Stages", slug: "sound-stages" },
     { name: "Podcast Rooms", slug: "podcast-rooms" },
     { name: "Music Suites", slug: "music-suites" },
     { name: "Art Workshops", slug: "art-workshops" }
]

const COMMON_AMENITIES = [
     "High-speed Wi-Fi",
     "Air Conditioning",
     "Lighting Kit",
     "Green Screen",
     "Soundproof",
     "Makeup Station",
     "Parking Available",
     "Restroom"
]

interface AddNewStudio {
     username: string;
     email: string;
     studio_title: string;
     category: string;
     hourly_rate: number;
     security_deposit: number;
     max_capacity: number;
     location: string;
     image: string;
     amenities: string[];
     details: string;
     createdAt: string;
}

export default function AddNewStudioForm() {
     const { data: session, isPending } = authClient.useSession()
     const user = session?.user

     const [loading, setLoading] = useState(false)
     const [successMessage, setSuccessMessage] = useState("")
     const [errorMessage, setErrorMessage] = useState("")

     const router = useRouter();

     // Form States
     const [title, setTitle] = useState("")
     const [category, setCategory] = useState("Photo Studio")
     const [hourlyRate, setHourlyRate] = useState("")
     const [securityDeposit, setSecurityDeposit] = useState("")
     const [maxCapacity, setMaxCapacity] = useState("")
     const [location, setLocation] = useState("")
     const [imageUrl, setImageUrl] = useState("")
     const [overview, setOverview] = useState("")
     const [amenities, setAmenities] = useState<string[]>([])
     const [customAmenity, setCustomAmenity] = useState("")

     const toggleAmenity = (item: string) => {
          if (amenities.includes(item)) {
               setAmenities(amenities.filter((a) => a !== item))
          } else {
               setAmenities([...amenities, item])
          }
     }

     const handleAddCustomAmenity = () => {
          if (customAmenity.trim() && !amenities.includes(customAmenity.trim())) {
               setAmenities([...amenities, customAmenity.trim()])
               setCustomAmenity("")
          }
     }

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setLoading(true)
          setErrorMessage("")
          setSuccessMessage("")

          const formData = new FormData(e.currentTarget);
          const formValues: AddNewStudio = {
               username: formData.get("username") as string || "",
               email: formData.get("email") as string || "",
               studio_title: formData.get("studio_title") as string || "",
               category: category,
               hourly_rate: Number(formData.get("hourly_rate")) || 0,
               security_deposit: Number(formData.get("security_deposit")) || 0,
               max_capacity: Number(formData.get("max_capacity")) || 0,
               location: formData.get("location") as string || "",
               image: formData.get("image") as string || "",
               amenities: amenities,
               details: formData.get("details") as string || "",
               createdAt: new Date().toISOString()
          };
          console.log("Form values:", formValues);

          try {
               const res = await fetch(`http://localhost:5000/studios`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json" 
                    },
                    body: JSON.stringify(formValues)
               });
               
               if(!res?.ok) {
                    toast.error("Failed to submit data. Try again")
               }

               if(res?.ok) {
                    router.push("/my-listings");
                    toast.success("Studio added successfully")
               }

               // console.log(res);
          } catch (err) {
               setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
          } finally {
               setLoading(false)
          }
     }

     if (isPending) {
          return (
               <div className="flex items-center justify-center py-16">
                    <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
               </div>
          )
     }

     return (
          <form onSubmit={handleSubmit} className="space-y-6">
               {successMessage && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium">
                         {successMessage}
                    </div>
               )}

               {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm font-medium">
                         {errorMessage}
                    </div>
               )}

               {/* Owner Information (Read-Only) */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
                    <div>
                         <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                              Owner Name
                         </label>
                         <input
                              type="text"
                              readOnly
                              value={user?.name || "Not available"}
                              name="username"
                              className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-gray-400 bg-gray-50 focus:outline-none cursor-not-allowed"
                         />
                    </div>
                    <div>
                         <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                              Owner Email
                         </label>
                         <input
                              type="text"
                              readOnly
                              value={user?.email || "Not available"}
                              name="email"
                              className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-gray-400 bg-gray-50 focus:outline-none cursor-not-allowed"
                         />
                    </div>
               </div>

               {/* Title & Category */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                         <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                              Studio Title <span className="text-red-500">*</span>
                         </label>
                         <input
                              type="text"
                              required
                              placeholder="e.g. Neon Horizon Film Stage"
                              value={title}
                              name="studio_title"
                              onChange={(e) => setTitle(e.target.value)}
                              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                              Category <span className="text-red-500">*</span>
                         </label>
                         <select
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                              name="studio_category"
                              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all cursor-pointer"
                         >
                              {CATEGORIES.map((cat, idx) => (
                                   <option key={idx} value={cat?.slug}>{cat?.name}</option>
                              ))}
                         </select>
                    </div>
               </div>

               {/* Pricing & Capacity */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                         <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                              Hourly Rate ($) <span className="text-red-500">*</span>
                         </label>
                         <input
                              type="number"
                              min="0"
                              step="0.01"
                              required
                              placeholder="45"
                              value={hourlyRate}
                              name="hourly_rate"
                              onChange={(e) => setHourlyRate(e.target.value)}
                              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                              Security Deposit ($) <span className="text-red-500">*</span>
                         </label>
                         <input
                              type="number"
                              min="0"
                              step="0.01"
                              required
                              placeholder="150"
                              value={securityDeposit}
                              name="security_deposit"
                              onChange={(e) => setSecurityDeposit(e.target.value)}
                              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                              Max Capacity (Persons) <span className="text-red-500">*</span>
                         </label>
                         <input
                              type="number"
                              min="1"
                              required
                              placeholder="12"
                              value={maxCapacity}
                              name="max_capacity"
                              onChange={(e) => setMaxCapacity(e.target.value)}
                              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                         />
                    </div>
               </div>

               {/* Location & Image URL */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                         <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                              Location / Address <span className="text-red-500">*</span>
                         </label>
                         <input
                              type="text"
                              required
                              placeholder="e.g. 742 Evergreen Terrace, Brooklyn, NY"
                              value={location}
                              name="location"
                              onChange={(e) => setLocation(e.target.value)}
                              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                         />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                              Image URL <span className="text-red-500">*</span>
                         </label>
                         <input
                              type="url"
                              required
                              placeholder="https://images.unsplash.com/..."
                              value={imageUrl}
                              name="image"
                              onChange={(e) => setImageUrl(e.target.value)}
                              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                         />
                    </div>
               </div>

               {/* Amenities List (Tags/Checkboxes) */}
               <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                         Amenities List
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                         {COMMON_AMENITIES.map((item) => {
                              const isSelected = amenities.includes(item)
                              return (
                                   <button
                                        type="button"
                                        key={item}
                                        onClick={() => toggleAmenity(item)}
                                        className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border cursor-pointer ${isSelected
                                                  ? "bg-zinc-900 text-white border-zinc-900"
                                                  : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100"
                                             }`}
                                   >
                                        {item}
                                   </button>
                              )
                         })}
                    </div>

                    {/* Custom Amenity Adder */}
                    <div className="flex gap-2 max-w-md">
                         <input
                              type="text"
                              placeholder="Add custom amenity..."
                              value={customAmenity}
                              onChange={(e) => setCustomAmenity(e.target.value)}
                              className="flex-1 border border-zinc-200 rounded-xl px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                         />
                         <button
                              type="button"
                              onClick={handleAddCustomAmenity}
                              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer"
                         >
                              <Plus className="w-4 h-4" /> Add
                         </button>
                    </div>

                    {/* Display selected tags */}
                    {amenities.length > 0 && (
                         <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-zinc-100">
                              {amenities.map((amenity) => (
                                   // <span
                                   //      key={amenity}
                                   //      className="inline-flex items-center gap-1 bg-zinc-100 text-zinc-800 text-xs px-2.5 py-1 rounded-md"
                                   // >
                                   //      {amenity}
                                   //      <button
                                   //           type="button"
                                   //           onClick={() => toggleAmenity(amenity)}
                                   //           className="hover:text-red-600 cursor-pointer"
                                   //      >
                                   //           <X className="w-3 h-3" />
                                   //      </button>
                                   // </span>
                                   <React.Fragment key={amenity}>
                        {/* Hidden input to pass value on form submission */}
                        <input type="hidden" name="amenities" value={amenity} />
                        
                        <span
                             className="inline-flex items-center gap-1 bg-zinc-100 text-zinc-800 text-xs px-2.5 py-1 rounded-md"
                        >
                             {amenity}
                             <button
                                  type="button"
                                  onClick={() => toggleAmenity(amenity)}
                                  className="hover:text-red-600 cursor-pointer"
                             >
                                  <X className="w-3 h-3" />
                             </button>
                        </span>
                   </React.Fragment>
                              ))}
                         </div>
                    )}
               </div>

               {/* Detailed Overview */}
               <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                         Detailed Overview <span className="text-red-500">*</span>
                    </label>
                    <textarea
                         rows={5}
                         required
                         placeholder="Describe your studio space, equipment included, rules, best use cases, lighting conditions, etc."
                         value={overview}
                         name="details"
                         onChange={(e) => setOverview(e.target.value)}
                         className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all resize-y"
                    />
               </div>

               {/* Submit Button */}
               <div className="pt-4 border-t border-zinc-200 flex justify-end">
                    <button
                         type="submit"
                         disabled={loading}
                         className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                         {loading ? (
                              <>
                                   <Loader2 className="w-4 h-4 animate-spin" /> Publishing...
                              </>
                         ) : (
                              <>
                                   <Sparkles className="w-4 h-4" /> Publish Studio
                              </>
                         )}
                    </button>
               </div>
          </form>
     )
}