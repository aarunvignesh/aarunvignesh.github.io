export default function Quotation({content}:{ content: string}){
    return <div className={`text-center text-xl w-1/2 p-6 m-auto bg-stone-800 text-gray-200 `} >
        <span className={`m-auto`} dangerouslySetInnerHTML={{ __html: content }}></span>
    </div> 
}