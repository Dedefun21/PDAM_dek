


import { getCookies } from "@/helper/cookies";
import Card1page from "./card1";
import Link from "next/link";

export interface custom {
  success: boolean
  message: string
  data: customer[]
}

export interface customer {
  id: number
  user_id: number
  customer_number: string
  name: string
  phone: string
  address: string
  service_id: number
  owner_token: string
  createdAt: string
  updatedAt: string
}





async function getCustomer(): Promise<custom> {
  try {

    const url = `https://learn.smktelkom-mlg.sch.id/pdam/customers`;

    const respon = await fetch(url,
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${await getCookies(`token`)}`,
          "App-KEY": "23342cee5384cf4a3fbbe38ca6a4863d7a5554df"
        },
        cache: `no-store`
      },
    )

    const respondata: custom = await respon.json();
    if (!respon.ok) {
      return {
        success: false,
        message: respondata.message,
        data:[]
      }
    }
    return respondata;
  }
  catch (error) {
    console.log(error);
    return {
      success: false,
      message: `You failed`,
      data:[]
    }
  }
}

export default async function customerpage() {
  const { success, message, data } = await getCustomer()
   console.log("Success:", success);
  console.log("Message:", message);
  console.log("Data:", data);
  console.log("Data length:", data?.length);

  if (!success) {
    return (
      <div className="w-full p-5 ">
        sorry, {message}
      </div>
    )
  }
  return (
    <div className="w-full p-5">
      <h1 className="text-2xl font bold">
        ini customer
      </h1>

      <Link href={`/admin/customer/Add`}
      className="relative inline-block text-sm font-medium text-white group"
      >
        {/* <!-- Border layer -->  */}
        <span className="absolute inset-0 border border-sky-200"></span> 
        
        <span className="block bg-blue-600 border border-sky-200 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" > 
          Tambah customer  
        </span>
        
      </Link>

      {/* memanggil Card1.tsx */}

     <div className="flex flex-wrap gap-5 items-start justify-center">
        {data && data.length > 0 ? (
          data.map((customer) => (
            <Card1page key={customer.id} custom={customer} />
          ))
        ) : (
          <p>Tidak ada data customer</p>
        )}
      </div>
      
    </div>
  )
}
