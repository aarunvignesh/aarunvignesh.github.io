import Paragraph from "@/components/blog-components/paragraph/paragraph";
import Layout from "../../components/layout/layout";
import Banner from "@/components/blog-components/banner/banner";
import Image from "next/image";
import ImageAndText from "@/components/blog-components/image-and-text/image-and-text";
import Subheading from "@/components/blog-components/sub-heading/sub-heading";
import Quotation from "@/components/blog-components/quotation/quotation";

export async function getStaticPaths() {
    const res = await fetch('https://raw.githubusercontent.com/aarunvignesh/didactic-octo-waddle/master/public/blog_home/content.json');
    const data = await res.json();
  
    const paths = data.cards.map((blog:any) => ({
      params: { blog: blog.href.replace("./blog/","") },
    }));
    return { paths, fallback: false};
  }

export const getStaticProps = async ({params}:{params:any}) => {
    const blog = params.blog;
    const res = await fetch(`https://raw.githubusercontent.com/aarunvignesh/didactic-octo-waddle/master/public/blogs/${blog}/content.json`)
    const data = await res.json()
    return { props: { page_data: data } }
}

export default function BlogPage({page_data}:{page_data: any}){
    console.log(page_data)
    return <Layout>
                <div className={`container  md:mt-10 text-gray-900 space-y-12`}>
                    <Banner src={page_data.head.image} alt={page_data.head.title} title={page_data.head.title}></Banner>
                    {page_data.body.blog.content.map((module:any) => {
                        switch(module.module){
                            case "paragraph":
                                return <Paragraph align={module.align} content={module.value} />
                            case "image":
                                return <Image src={module.value} width={200} height={200} className={`w-auto h-auto max-h-[500px] m-auto p-3`} alt={module.alt} />
                            case "image_and_text":
                                return <ImageAndText content={module.value} img_src={module.img_src} align_image={module.align_image}/>
                            case "sub_heading":
                                return <Subheading content={module.value} module_type={module.module}/>
                            case "inner_sub_heading":
                                return <Subheading content={module.value} module_type={module.module}/>
                            case "quotation":
                                return <Quotation content={module.value}/>
                            case "break":
                                    return <div className={`w-full h-8 border-b-2 border-gray-400`}></div>
                        }
                    })}
                </div>
                
            </Layout>
} 