'use client';

import { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { setCookies } from "@/helper/cookies"; 

type Reslogin = {
    success: boolean;
    message: string;
    token?: string;
    role?: string;
}
export default function Login() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handlelogin = async function (e: React.FormEvent) {
        //login logic here
        e.preventDefault();
        try {
            const url = `https://learn.smktelkom-mlg.sch.id/pdam/auth`;
            const requestData = {
                username,
                password
            };
            const response = await fetch(url, {
                method: `POST`,
                body: JSON.stringify(requestData),
                headers: {
                    'Content-Type': 'application/json',
                    "APP-KEY": '23342cee5384cf4a3fbbe38ca6a4863d7a5554df'
                }
            });
            const responData: Reslogin = await response.json();

            if (!responData.success) {
                const message = responData.message;
                toast.error(message, { containerId: 'toastLogin' });
                return;
            }

            if (responData.success === true) {
               // Berhasil login
                const message = responData.message;
                const token = responData?.token || "";
                const role = responData?.role || "";
                
                // Simpan token ke cookies
                await setCookies('token', token);
                await setCookies('role', role);
                await setCookies('username', username);
                
                toast.success(message, { containerId: 'toastLogin' });
                
                // Redirect berdasarkan role
                setTimeout(() => {
                    if (role === 'admin') {
                        router.replace('/admin/dashboard');
                    } else if (role === 'user') {
                        router.replace('/pemakai');
                    } else {
                        // Default redirect jika role tidak dikenali
                        router.replace('/admin/dashboard');
                    }
                }, 2000);
            } 
            else {
                //gagal login
                const message = responData.message;
                toast.warning(message, { containerId: 'toastLogin' });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
        <div>
            <ToastContainer containerId = {`toastLogin`} />
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <div className=" bg-white p-12 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center  ">


                    <h1 className=" font-bold text-black text-2xl mb-8 text-center">Login</h1>

                    <form onSubmit={handlelogin}>

                        {/* Username Input */}
                        <input type="text" placeholder="Username" className="w-full p-2 border text-black"
                        value={username} onChange={(e) => setUsername(e.target.value)} required />

                        {/* Password Input */}
                        <input type="password" className="w-full p-2 border mt-4 text-black" placeholder="password"
                        value={password} onChange={(e)=> setPassword(e.target.value) } required />

                        < div className="w-full" >
                            <button type="submit" className=" bg-green-600 text-white rounded mt-6 px-4 py-2 w-full hover:bg-green-800 active:scale-[0.96] transition-all duration-200">
                                Masuk
                            </button>
                        </div>
                    </form>

                    <Link href="/regis" className="w-full" >
                        <button className=" bg-blue-600 text-white rounded mt-3 px-4 py-2 w-full hover:bg-blue-800 active:scale-[0.96] transition-all duration-200">
                            Sign-up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
        
    )
}
