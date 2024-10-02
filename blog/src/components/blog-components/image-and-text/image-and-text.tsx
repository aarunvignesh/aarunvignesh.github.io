import Image from "next/image";
import Paragraph from "../paragraph/paragraph";

export default function ImageAndText({align_image, img_src, content, key}:{align_image:string, img_src:string, content: string, key: string}){
    return <div className={`flex ${align_image=='right'? 'flex-row': 'flex-row-reverse'} `}>
        <div className={`flex w-1/2`}> 
            <Image className={`mx-auto w-[calc(100%-20px)] h-auto object-contain object-top`} src={img_src} alt={"Image and text"} width={200} height={200}></Image>
        </div>
        <div className={`flex w-1/2`}> 
            <Paragraph align="justify" content={content} key="{key}"></Paragraph>
        </div>
    </div>
}