"use client"


import { getCookies } from "@/helper/cookies"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"

type Props = {
    id: number
}
export default function Dropservices(pops: Props) {
    /** function to handlde delete services */
    const router = useRouter();
    async function deleteServices() {
        try {
            if (!window.confirm("Are you sure, Dawg")) {
                return;
            }
            const url = `https://learn.smktelkom-mlg.sch.id/pdam/services/${pops.id}`
            const respon = await fetch(url,
                {
                    method: `DELETE`,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${await getCookies(`token`)}`,
                        "App-KEY": "23342cee5384cf4a3fbbe38ca6a4863d7a5554df"
                    }
                }
            )
            const respondata = await respon.json();
            if (!respon.ok) {
                toast.error(respondata?.message || "gagal", { containerId: `toastDeleteService${pops.id}` });
            }

            toast.success(
                respondata?.message || "good",
                { containerId: `toastDeleteService${pops.id}` }
            )
            setTimeout(() => { router.refresh() }, 100);

            return;


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>

            <ToastContainer
                containerId={`toastDeleteServices`}
            />

            {/* <!-- box-button --> */}
            <div
            
            className="cursor-pointer border-4 border-black bg-white pb-2.5 transition-all duration-100 ease-in-out select-none active:p-0 active:mb-2.5 active:translate-y-2.5"
            >

                {/* <!-- button --> */}
                <div className="bg-red-500 border-4 border-gray-500 px-2 py-0.5"
                onClick={() => deleteServices ()}
                >
                    <span className="text-xl tracking-wide">Delete</span>
                </div>

            </div>



        </div>
    )
}