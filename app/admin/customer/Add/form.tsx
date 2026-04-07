"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getCookies } from "@/helper/cookies";
import { ServiceRespon } from "../../services/page";

type ServiceType = {
     services: ServiceRespon[]
}

export default function Formcustomer(servicek : ServiceType) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [customer_number, setCustomer_number] = useState<string>("");
    const [service_id, setService_id] = useState<string>("");

    const router = useRouter();

    /* create function to send  request into backend */

    async function handlesave(e: FormEvent) {
        try {
            e.preventDefault();
            const url = `https://learn.smktelkom-mlg.sch.id/pdam/customers`;
            const request = {
                customer_number,
                service_id,
                name,
                phone,
                address
            }

            console.log("menampilkan request:", request);
            console.log("menampilkan json request:", JSON.stringify(request));

            const respon = await fetch(url,
                {
                    method: `POST`,
                    body: JSON.stringify(request),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${await getCookies(`token`)}`,
                        "App-KEY": "23342cee5384cf4a3fbbe38ca6a4863d7a5554df"
                    },
                },
            )
            const respondata = await respon.json()
            if (!respon.ok) {
                toast.warning(
                    respondata?.message,
                    { containerId: `toastAddCustomer` }
                )
                return;
            }
            toast.success(
                respondata?.message,
                { containerId: `toastAddcustomer` }
            )
            setTimeout(() => router.replace(`/admin/customer`), 2000)

        }
        catch (error) {
            console.log(error);
            toast.error(
                `gagal menambahkan customer`,
                { containerId: `toastAddcustomer` }
            )
        }

    }

    

    return (
        <div>
            <form onSubmit={handlesave}>
                <ToastContainer containerId={`toastAddCustomer`} />
                <div className="my-3 flex flex-col">
                    <div className="flex gap-8.75 flex-col flex-nowrap items-center">
                        <div className="flex flex-col mt-8 gap-2.5 px-8 pb-1.5 bg-[#e1f762a5] rounded-[25px] transition ease-in-out duration-400 hover:scale-105 hover:border hover:border-black w-3xl">
                            <h2 id="heading" className="text-center my-8 text-white text-[1.2em]">Customer</h2>

                            
                            <div className="flex flex-col gap-4">

                                {/* input username */}
                                 <label className="flex flex-col gap-1 rounded-[25px] p-4 text-white bg-[#171717] shadow-inner shadow-black">
                                    <small className="font-semibold text-green-900">Username</small>
                                    <input
                                        type="text"
                                        className="bg-transparent border-none outline-none w-full text-gray-300 mt-1"
                                        id="username"
                                        placeholder="Masukkan username..."
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </label>

                                {/* input password */}
                                 <label className="flex flex-col gap-1 rounded-[25px] p-4 text-white bg-[#171717] shadow-inner shadow-black">
                                    <small className="font-semibold text-green-900">Password</small>
                                    <input
                                        type="password"
                                        className="bg-transparent border-none outline-none w-full text-gray-300 mt-1"
                                        id="password"
                                        placeholder="Masukkan password..."
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </label>

                                {/* Input Nama */}
                                <label className="flex flex-col gap-1 rounded-[25px] p-4 text-white bg-[#171717] shadow-inner shadow-black">
                                    <small className="font-semibold text-green-900">Name</small>
                                    <input
                                        type="text"
                                        className="bg-transparent border-none outline-none w-full text-gray-300 mt-1"
                                        id="name"
                                        placeholder="Masukkan nama..."
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </label>

                                {/* Input Telepon */}
                                <label className="flex flex-col gap-1 rounded-[25px] p-4 text-white bg-[#171717] shadow-inner shadow-black">
                                    <small className="font-semibold text-green-900">Phone</small>
                                    <input
                                        type="text"
                                        className="bg-transparent border-none outline-none w-full text-gray-300 mt-1"
                                        id="phone"
                                        placeholder="Masukkan nomor telepon..."
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </label>

                                {/* Input Alamat */}
                                <label className="flex flex-col gap-1 rounded-[25px] p-4 text-white bg-[#171717] shadow-inner shadow-black">
                                    <small className="font-semibold text-green-900">Address</small>
                                    <input
                                        type="text"
                                        className="bg-transparent border-none outline-none w-full text-gray-300 mt-1"
                                        id="address"
                                        placeholder="Masukkan alamat..."
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                    />
                                </label>


                                {/* Input number customer */}
                                <label className="flex flex-col gap-1 rounded-[25px] p-4 text-white bg-[#171717] shadow-inner shadow-black">
                                    <small className="font-semibold text-green-900">Number customer</small>
                                    <input
                                        type="text"
                                        className="bg-transparent border-none outline-none w-full text-gray-300 mt-1"
                                        id="customer_number"
                                        placeholder="Masukkan nomor customer..."
                                        value={customer_number}
                                        onChange={e => setCustomer_number(e.target.value)}
                                    />
                                </label>

                                  {/* Input service id */}
                                <label className="flex flex-col gap-1 rounded-[25px] p-4 text-white bg-[#171717] shadow-inner shadow-black">
                                    <small className="font-semibold text-green-900">Service id</small>
                                    <select className=" border-none outline-none w-full text-gray-300 mt-1 bg-[#171717] shadow-black"
                                        id="service_id"
                                        value={service_id}
                                    >
                                           
                                    </select>
                                </label>

                            </div>

                            <button 
                            type="submit" className="mb-12 px-4 py-2 rounded bg-[#252525] text-white transition ease-in-out duration-400">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}