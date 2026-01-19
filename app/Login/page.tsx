import Link from "next/link";
export default function Login() {
    return (
        <div className="w-full h-dvh ">
            <main className="flex flex-col justify-center items-center w-full h-full">
            <div className=" bg-white p-12 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center  ">


            <h1 className=" font-bold text-black text-2xl mb-8 text-center">Login</h1>

            <input type="text" placeholder="Email"
            className="w-full p-2 border text-black"
            ></input>
            <input type="password" className="w-full p-2 border mt-4 text-black" placeholder="password" />
         <Link href="/dashboard" className="w-full" >
            <button className=" bg-green-600 text-white rounded mt-6 px-4 py-2 w-full hover:bg-green-800 active:scale-[0.96] transition-all duration-200">
                Masuk
            </button>
         </Link>
           <Link href="/regis" className="w-full" >
             <button className=" bg-blue-600 text-white rounded mt-3 px-4 py-2 w-full hover:bg-blue-800 active:scale-[0.96] transition-all duration-200">
                Sign-up
            </button>
           </Link>
            </div>
            </main>
        </div>
    )
}