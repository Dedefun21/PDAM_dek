"use client";

import { useState} from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getCookies } from "@/helper/cookies";

export default function Formcustomer () {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const router = useRouter();

    /* create function to send  request into backend */

    async function handlesave(e:FormEvent) {
        try {
            e.preventDefault();
            const url = `https://learn.smktelkom-mlg.sch.id/pdam/customers`;
            const request = {
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
                
            }
        }
        catch (error) {
            console.log(error);
        }

    }

}