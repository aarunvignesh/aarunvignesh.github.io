export default function Subheading({content, module_type}:{ content: string, module_type: string}){
    const type = module_type;
    return  type == 'sub_heading' ? <h3 className={`text-2xl font-bold `} dangerouslySetInnerHTML={{ __html: content }}>
    </h3> : <h4 className={`text-xl font-bold `} dangerouslySetInnerHTML={{ __html: content }}>
    </h4> 
}