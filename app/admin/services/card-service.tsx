import Dropservices from "./drop";
import { Water } from "./page";
import Link from "next/link";
type Props = {
    // Add the appropriate fields for Service
    
    service: Water
};


export default function CardService(props : Props ) { 
    return (
        <div className="w-full md:w-72 p-5 rounded shadow bg-sky-100">
            <div className="flex flex-col items-center mb-2">
                <strong className="text-black text-center">
                    {props.service.name}
                </strong>
                <div className="bg-sky-600 text-white rounded px-3 py-1 text-sm w-fit text-center mt-1">
                    Rp {props.service.price}
                </div>
            </div>
            <div className="flex justify-between items-center">
            <div className="bg-slate-300 text-slate-700 text-sm font-medium px-3 py-1 rounded">
                Min: {props.service.min_usage}
                </div>
            <div className="bg-slate-300 text-slate-700 text-sm font-medium px-3 py-1 rounded">
                Max: {props.service.max_usage}
                </div>
            </div>

              <div className="my-3 flex gap-1 items-center">

                <Link href={`/admin/services/edit/${props.service.id}`}
                    className="relative inline-block text-sm font-medium text-white group"
                >
                    <span className="absolute inset-0 border border-black">

                    </span>

                    <button type="button" className="block bg-blue-600 border border-sky-200 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" >
                        ubah service
                    </button>

                </Link>
                <Dropservices id={props.service.id} />
            </div>
        </div>
    )
}