export default function Paragraph({align, content}:{align: string, content: string}){
    return <p className={`text-${align} text-xl`} dangerouslySetInnerHTML={{ __html: content }}>
    </p> 
}