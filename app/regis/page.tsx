'use client';

import Link from "next/link"
import { useState } from "react"
export default function Regis() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [nama, setNama] = useState<string>("");
    const [noTelp, setNoTelp] = useState<string>("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        //prepare our body
        try {
            const request = {
                username,
                password,
                nama,
                noTelp
            };
            //prepare our url
            const url =`${process.env.NEXT_PUBLIC_KEY_BASE_URL}/admins`;
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'App-Key': process.env.NEXT_PUBLIC_KEY_APP_KEY || " ",
                },
                body: JSON.stringify(request)
            });
            if(!res.ok){
                alert("Gagal registrasi");
            }
            const resdata = await res.json();
            const message = resdata.message || 'Registrasi berhasil';
            alert(message);
        } catch (error) {
            console.log(error,'omagadd');
        }
        
    }

    return (
        <>
            <div className="w-full h-dvh ">
                <main className="flex flex-col justify-center items-center w-full h-full">
                    <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">


                        <h1 className=" font-bold text-black text-2xl mb-8 text-center">Sign In</h1>

                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" className="w-full p-2 border text-black" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <input type="password" className="w-full p-2 border mt-4 text-black" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="text" className="w-full p-2 border mt-4 text-black" placeholder="nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
                            <input type="text" className="w-full p-2 border mt-4 text-black" placeholder="no.Telp" value={noTelp} onChange={(e) => setNoTelp(e.target.value)} required />
                             
                             
                            <button className=" bg-blue-600 text-white rounded mt-3 px-4 py-2 w-full hover:bg-blue-800 active:scale-[0.96] transition-all duration-200" type="submit">
                                Sign-up
                            </button>
                        
                    
                        </form>
                       

                         <Link href="/Login" className="w-full" >
                                <button className=" bg-green-600 text-white rounded mt-6 px-4 py-2 w-full hover:bg-green-800 active:scale-[0.96] transition-all duration-200" type="submit">
                                    Masuk
                                </button>
                            </Link>
                    </div>
                </main>
            </div>

        </>
    )
}
