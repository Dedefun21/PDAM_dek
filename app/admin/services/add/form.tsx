"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getCookies } from "@/helper/cookies";


export default function FormAddService() {
    const [name, setName] = useState<string>("");
    const [max_usage, setMax_usage] = useState<number>(0);
    const [min_usage, setMin_usage] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const router = useRouter();

    /* create function to send  request into backend */
    async function handleSave(e: FormEvent) {
        try {
            e.preventDefault();
            const url = `https://learn.smktelkom-mlg.sch.id/pdam/services`;
            const request =
            {
                name,
                max_usage,
                min_usage,
                price
            }

            console.log("Request payload:", request);
            console.log("JSON payload:", JSON.stringify(request))

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
                    { containerId: `toastAddService` }
                )
                return;
            }
            toast.success(
                respondata?.message,
                { containerId: `toastAddService` }
            )
            setTimeout(() => router.replace(`/admin/services`), 2000)

        } catch (error) {
            console.log(error);
            toast.error(
                `gagal menambahkan service`,
                { containerId: `toastAddService` }
            )
        }
    }

    return (
        <form onSubmit={handleSave}>
            <ToastContainer containerId={`toastAddService`} />
            <div className="my-2 flex flex-col">
                <small className="font-semibold text-cyan-600">
                    Name of services
                </small>
                <input type="text" name="isi bang" id="name" value={name} onChange={e => setName(e.target.value)}
                    className="w-full border rounded p-2" />
            </div>
            {/* min */}
            <div className="my-2 flex flex-col">
                <small className="font-semibold text-cyan-600">
                    Minimum usage
                </small>
                <input type="number" name="min" id="min" value={min_usage.toString()} onChange={e => setMin_usage(Number(e.target.value))}
                    className="w-full border rounded p-2" />
            </div>
            {/* max */}
            <div className="my-2 flex flex-col">
                <small className="font-semibold text-cyan-600">
                    Max usage
                </small>
                <input type="number" name="max" id="max" value={max_usage.toString()} onChange={e => setMax_usage(Number(e.target.value))}
                    className="w-full border rounded p-2" />
            </div>
            {/* price */}
            <div className="my-2 flex flex-col">
                <small className="font-semibold text-cyan-600">
                    price
                </small>
                <input type="number" name="price" id="price" value={price.toString()} onChange={e => setPrice(Number(e.target.value))}
                    className="w-full border rounded p-2" />
            </div>
            <button type="submit" className="text-red-600 bg-sky-100 py-1 border rounded border-blue-600 px-3">
                create services
            </button>

        </form>
    )
}
