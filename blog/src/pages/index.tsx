import  Layout from "../components/layout/layout";
import Card from "@/components/card/card";

export const getStaticProps = async () => {
  const res = await fetch('https://raw.githubusercontent.com/aarunvignesh/didactic-octo-waddle/master/public/blog_home/content.json')
  const data = await res.json()
  return { props: { home_page_data: data } }
}

export default function Home({home_page_data}:{home_page_data: any}) {
  return (
      <Layout>
        <div className={`container md:mt-12 p-8 md:p-0`}>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12`}>
            {home_page_data.cards.map((x:any, i: number) => {
              return <div key={`card-${i}`} className={`w-full h-56 md:w-56 lg:w-72`}>
                          <Card imageUrl={x.image_src} title={x.title} ctaUrl={x.href} />
                     </div>
            })}
          </div>
        </div>
      </Layout>
  );
}
