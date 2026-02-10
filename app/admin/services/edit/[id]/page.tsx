import Link from "next/link"
import { getCookies } from "@/helper/cookies";

export interface editservice {
  success: boolean
  message: string
  data: edit
}

export interface edit {
  id: number
  name: string
  min_usage: number
  max_usage: number
  price: number
  owner_token: string
  createdAt: string
  updatedAt: string
}
/* create function to grab service based on selected id */

async function getServicebyId(id : string): Promise<editservice | null> {
    try {
        const url = `https://learn.smktelkom-mlg.sch.id/pdam/services/${id}`
        const respon = await fetch(url,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${await getCookies(`token`)}`,
                    "App-KEY": "23342cee5384cf4a3fbbe38ca6a4863d7a5554df"
                }
            }
        )
        const response: editservice = await respon.json()
            if (!respon.ok) {
                return null
            }
            return response;
    } catch (error) {
        console.log(error);
        return null
    }
}


type Pprop = {
    params: Promise<{ id: string }>
}

export default async function Editservice(prop: Pprop) {
    /* grab value id that sent to URL parameter */
    const id = (await prop.params).id
    const selectedservice = await getServicebyId(id)
    if (selectedservice == null) {
        return (
            <p>
                Sorry, service data with ID {id} 
            </p>
        )

        
    }
    
    return (
      <>
      <div className="w-full p-5 text-2xl font-bold">
                Edit Service Page
            </div>

            <p className="text-gray-300 text-sm">
                mengedit service dengan id: {id}
            </p>
      </>
    )


}
export const dynamic = `force-dynamic`