import Image from 'next/image';
import Link from 'next/link';

export default function Card({title, imageUrl, ctaUrl}:{title: string, imageUrl: string, ctaUrl: string}){
    return <div className={`w-full h-full flex flex-col hover:ease-in hover:-translate-y-1 duration-300 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
        <Image
            src={imageUrl}
            width={200}
            height={200}
            className={`w-full h-3/5 contain-size object-fill`}
            alt={`${title} - image`}
            />
        <Link className={`w-full flex flex-row h-2/5 p-2`} href={ctaUrl}>
            <h3 className={`flex w-4/5`}>{title}</h3>
            <div className={`w-1/5 text-end align-bottom`}> <span className={`block mt-12 font-bold text-gray-500 `}> &gt;</span> </div>
        </Link>
    </div>
} 