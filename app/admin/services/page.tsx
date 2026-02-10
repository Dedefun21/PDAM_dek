import { getCookies } from "@/helper/cookies"
import CardService from "./card-service"
import Link from "next/link"


export interface ServiceRespon {
    success: boolean
    message: string
    data: Water[]
    count: number
}

export interface Water {
    id: number
    name: string
    min_usage: number
    max_usage: number
    price: number
    owner_token: string
    createdAt: string
    updatedAt: string
}

async function getServices(): Promise<ServiceRespon> {
    try {
        const url = `https://learn.smktelkom-mlg.sch.id/pdam/services`;
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "App-KEY": "23342cee5384cf4a3fbbe38ca6a4863d7a5554df",
                    "Authorization": `Bearer ${await getCookies(`token`)}` || ""
                },
                cache: `no-store`
            },
        )
        //convert respone to JSON
        const responData: ServiceRespon = await response.json();
        if (!response.ok) {
            return {
                success: false,
                message: responData.message,
                data: [],
                count: 0
            }
        }
        return responData;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: `You failed`,
            data: [],
            count: 0
        }
    }
}

export default async function Servicepage() {
    const { success, message, data, count } = await getServices()

    if (!success) {
        return (
            <div className="w-full p-5">
                sorry, {message}
            </div>
        )
    }
    return (
        <div className="w-full p-5">
            <h1 className="text-2xl font-bold">
                Service data

            </h1>
            <p className="text-sm text-slate-500">
                halaman ini menampilkan service kita
            </p>
            <Link href={`/admin/services/add`} className="my-3">
                <button type="button" className="bg-green-500 text-white border border-green-50 p-3" >
                    tambah service
                </button>
            </Link>
            {
                count == 0 ?
                    <div className="w-full p-5 bg-yellow-100 text-yellow-400 font-semibold">
                        tidak ada woillah
                    </div> :
                    <div className="flex flex-warp gap-5 items-start justify-center">
                        {/* show list data */}

                        {
                            data.map(service => (
                                <CardService 
                                key={`keyService-${service.id}`}
                                service={service} />
                            ))
                        }
                    </div>
            }

        </div>
    )
}
