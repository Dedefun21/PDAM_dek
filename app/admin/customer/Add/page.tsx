import { ServiceRespon } from "../../services/page";
import Formcustomer from "./form";
import { getCookies } from "@/helper/cookies";

async function getService(): Promise<ServiceRespon[]> {
    //  get data service form backend
    //  menampilkan data service
    
    try {
        const url = `https://learn.smktelkom-mlg.sch.id/pdam/services`;
        const respon = await fetch(url,
            {
                method: `GET`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${await getCookies(`token`)}`,
                    "App-KEY": "23342cee5384cf4a3fbbe38ca6a4863d7a5554df"
                },
            }
        )
        const respondata = await respon.json()
        if (!respon.ok) {
            console.error(respondata?.message);
            return [];
        }
        console.log(respondata?.data)
        return respondata?.data || [];

    } catch (error) {
        console.error(error);
        return [];
    }
}
export default async function Adcustomer (){
    const service = await getService();
    return (
        <>
        <div>
            <div className="w-full p-5 text-4xl border border-gray-800 ">
                Penambahan customer
            </div>

            <Formcustomer services={service} />
        </div>
        </>
    )
}