import parse from 'html-react-parser';

export default function Paragraph({align, content, key}:{align: string, content: string, key: string}){
    
    return <div className={`text-${align} text-xl`} >
        {parse(content)}
    </div> 
}