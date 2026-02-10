import { Water } from "./page";
type Props = {
    // Add the appropriate fields for Service
    
    service: Water
};


export default function CardService(props : Props ) { 
    return (
        <div className="w-full md:w-72 p-5 rounded shadow bg-sky-100">
            <div className="flex flex-wrap gap-x-7">
                <strong>Service</strong>
                <div className="bg-sky-600 text-white rounded px-3 py-1 text-sm">
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
        </div>
    )
}