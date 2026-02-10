import FormAddService from "./form";

export default async function Addservice() {
    return (
        <div className="w-full p-5">
            <h1 className="text-2xl font-bold">
                Add tambah service
            </h1>
            <p className="text-white">
                halaman ini untuk menambahkan service baru
            </p>
           
            <FormAddService/>
        </div>
    )    
}