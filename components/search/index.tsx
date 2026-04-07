"use client"

import { useRouter } from "next/navigation";
import {useState, KeyboardEvent} from "react";

type loops = {
    keyword: string
}

export default function Searchcomponent (prop : loops){
    const router = useRouter();
    const [search, setSearch] = useState<string>(prop.keyword)

    function handleSearch(e: KeyboardEvent<HTMLInputElement>) {
       e.preventDefault();
    //    jika pengguna menekan Enter
        if (e.key === `Enter`) {
            const params = new URLSearchParams(window.location.search)

            if (search === ``){
                params.delete(`keyword`)
                // menghapus params bernama "search" dari URL adress
            } else {
                params.set(`search`, search)
                // mengirim params bernama "search" ke URL adress
            }
            router.push(`?${params.toString()}`)
        }
    }

    return (
        <div>
            <input type="text" 
            id="search"
            className="w-1/4 p-2 border rounded"
            placeholder="Search in here"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyUp={handleSearch}
            />
        </div>
    )
}