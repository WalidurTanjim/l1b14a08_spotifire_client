import DynamicStudioById from "@/components/(studios)/DynamicStudioById/DynamicStudioById"
import { Suspense } from "react"

const StudioDetailsPage = async({ params }: { params: Promise<{ studioId: string }> }) => {
     return (
          <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20 py-20">
               <Suspense fallback={<p>Dynamic studio is loading...</p>}>
                    <DynamicStudioById params={params} />
               </Suspense>
          </div>
     )
}

export default StudioDetailsPage
