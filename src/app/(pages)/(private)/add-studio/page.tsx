import AddNewStudioForm from "@/components/(private)/AddStudioForm/AddStudioForm";

export default function AddNewStudio() {
     return (
          <div className="w-full min-h-screen bg-zinc-50/50 py-8 md:py-12">
               <div className="px-5 md:px-8 lg:px-12 xl:px-20 w-full max-w-7xl mx-auto space-y-8">

                    {/* Page Header */}
                    <div className="border-b border-zinc-200 pb-5">
                         <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                              List Your Studio
                         </h1>
                         <p className="text-sm text-zinc-500 mt-1">
                              Fill in the details below to publish your creative space for creators and artists.
                         </p>
                    </div>

                    {/* Form Container */}
                    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 md:p-8">
                         <AddNewStudioForm />
                    </div>

               </div>
          </div>
     )
}