import Image from "next/image";

export default function Banner({src, alt, title}:{src: string, alt :string, title:string}) {
    return <div className="w-full h-auto flex flex-col">
        <Image width={200} height={200} src={src} alt={alt} className={`w-full max-h-[500px] h-4/5 object-fill`}></Image>
        <div className={`w-full h-auto 1/5`}>
            <h1 className={`w-auto text-center font-bold m-10 text-4xl `}>{title}</h1>
        </div>
    </div>
    
}