import { customer } from "./page";

type prup = {
    custom: customer
}

export default function Card1page(Prop: prup) {
    return (
        <div>
            {/* nyoba uiveerse.io */}
        <div 
      
      className="group relative block max-w-75 max-h-80 overflow-hidden rounded-[10px] bg-linear-to-b from-[#c3e6ec] to-[#a7d1d9] p-[2em_1.2em] m-3 no-underline font-sans z-0"
    >
      {/* Efek Lingkaran Latar Belakang */}
      <div className="absolute -top-4 -right-4 z-[-1] h-8 w-8 origin-center rounded-full bg-linear-to-br from-[#364a60] to-[#384c6c] transition-transform duration-350 ease-out group-hover:scale-[28]" />

      {/* Pojok Kanan Atas (Corner Decor) */}
      <div className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center overflow-hidden rounded-[0_4px_0_32px] bg-linear-to-br from-[#6293c8] to-[#384c6c]">
        <span className="-mt-1 -mr-1 text-white font-mono">💀</span>
      </div>

      {/* Konten Teks */}
      <h3 className="mb-2 text-[1.5em] font-bold leading-normal text-[#262626] transition-colors duration-500 group-hover:text-white">
        {Prop.custom.name}
      </h3>
      
      <p className="text-[1em] font-normal  leading-[1.5em] text-[#452c2c] transition-colors duration-500 group-hover:text-white/80 p-3.5">
        

        No: {Prop.custom.phone}
        <br />
        Alamat: {Prop.custom.address}
        <br />
        no rumah: {Prop.custom.id}
      </p>
    </div>

        </div>
    )

}