"use client"

import { Trash2 } from "lucide-react"
import { toast } from "sonner";
import Swal from "sweetalert2";

const deleteListingStudioHandler = async (id: string) => {
     Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
     }).then(async (result) => {
          if(result.isConfirmed) {
               try {
                    const res = await fetch(`http://localhost:5000/studios/${id}`, {
                         method: "DELETE",
                         headers: {
                              "Content-Type": "application/json"
                         }
                    });
     
                    if (!res.ok) {
                         throw new Error("Failed to delete studio")
                    }
     
                    const data = await res.json();
                    if (data?.deletedCount === 1) {
                         Swal.fire({
                              title: "Deleted!",
                              text: "Studio has been deleted.",
                              icon: "success"
                         });
                         window.location.reload()
                    } else {
                         toast.error("Something went wrong! Try again")
                    }
               } catch (err: any) {
                    console.error("Delete studio error:", err);
                    throw err;
               }
          }
     });
}

const StudioListingCardDeleteBtn = ({ studioId }: { studioId: string }) => {

     return (
          <button
               type="button"
               className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium px-3.5 py-2 rounded-xl transition-colors cursor-pointer border border-red-100" onClick={() => deleteListingStudioHandler(studioId)}
          >
               <Trash2 className="w-3.5 h-3.5" />
               <span>Delete</span>
          </button>
     )
}

export default StudioListingCardDeleteBtn
