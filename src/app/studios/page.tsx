import StudiosList from "@/components/(studios)/StudiosLIst/StudiosList";
import { Suspense } from "react";

const StudiosPage = () => {
     return (
          <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20 py-20">
               <Suspense fallback={<p>Studios loading...</p>}>
                    <StudiosList />
               </Suspense>
          </div>
     )
}

export default StudiosPage;
