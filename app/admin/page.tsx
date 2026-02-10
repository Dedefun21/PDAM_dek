import { getCookies } from "@/helper/cookies"

export interface Adminprofile {
  success: boolean
  message: string
  data: Admins
}

export interface Admins {
  id: number
  user_id: number
  name: string
  phone: string
  owner_token: string
  createdAt: string
  updatedAt: string
  user: User
}

export interface User {
  id: number
  username: string
  password: string
  role: string
  owner_token: string
  createdAt: string
  updatedAt: string
}

async function getAdminprofile(): Promise<Admins | null> {
  try {
    const url = `https://learn.smktelkom-mlg.sch.id/pdam/admins/me`;
   
    const res = await fetch(url,
      {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
          "App-KEY": "23342cee5384cf4a3fbbe38ca6a4863d7a5554df" ,
          Authorization: `Bearer ${await getCookies(`token`)}` || ""
      }
    }
    )

    //melakukan respon
    const responData : Adminprofile = await res.json();
    
    if(!responData.success) {
      console.log(responData?.message)
      
    }
    
    return responData.data;
    
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function Adminpage() {
    const admin = await getAdminprofile();
    console.log(admin);
    if (admin == null) {
       return (
       <div className="w-full p-5">
            admin tidak suka kamu
        </div>
        )
    }
    return (
        
        <div className="w-full p-6 bg-white justify-center items-start">

        <div className="text-blue-600">{admin?.name}</div>
        <div className="text-red-500">{admin?.user.username}</div>
        <div className="text-green-600">{admin?.phone}</div>
        </div>
      
    );
    
}