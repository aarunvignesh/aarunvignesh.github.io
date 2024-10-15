
import Image from "next/image"
import Layout from "../components/layout/layout" 
export default function ProfilePage(){
    return <Layout>
        <div className={`container`}>
            <div className={`w-full h-auto mt-10 flex flex-row flex-wrap-reverse`}>
                <div className={`w-full md:w-1/3`}>
                    <Image className={`m-auto`} src="./assets/img/arun.jpg" alt="Profile Image" width="200" height="200"/>
                </div>
                <div className={`w-full md:w-2/3 m-6 md:m-0`}>
                    <span>
                       I’m Arun Vignesh, Full Stack Polglot Developer with a deep passion for building scalable, high-performance applications. With extensive backend experience in Node.js, Typescript, Go, and Java, I’ve worked with various backend frameworks like Express JS, Nest JS, and Spring. I also have strong frontend skills, including Anglar, React, HTML, CSS, and TypeScript. <br/><br/>My expertise spans cloud services, particularly AWS (S3, Lambda, CloudFront), and infrastructure-as-code tools like Terraform and Pulumi. I’ve worked extensively with databases such as MongoDB, DynamoDB, and Postgres, and have implemented microservices architectures utilizing design patterns like CQRS and Saga. My experience also includes working with messaging systems such as Kafka and Kinesis to handle event-driven microservices, and integrating workflow management tools with backend systems. I’m proficient in ORM tools like Prisma and TypeORM, and have successfully managed production database migrations. Beyond my professional work, I’m passionate about solving complex technical challenges and mentoring teams to deliver high-quality solutions.<br/><br/> When I’m not coding, you can find me looking up at the stars or catching up on the latest space news—astronomy has always been a personal hobby of mine.
                    </span>
                    <br/>
                    <br/>
                    <span>
                        
                        <span><b>Tech stack of this website</b></span>
                        <span className={'flex flex-row flex-wrap gap-2'}>
                            <Image className={`w-14 h-14`} src='/assets/img/git.png' alt='Git' height={200} width={200}/>
                            <Image className={`w-14 h-14`} src='/assets/img/github-actions.png' alt='Github Actions' height={200} width={200}/>
                            <Image className={`w-14 h-14`} src='/assets/img/nextjs.png' alt='Next JS' height={200} width={200}/>
                            <Image className={`w-14 h-14`} src='/assets/img/react.png' alt='React' height={200} width={200}/>
                            <Image className={`w-14 h-14`} src='/assets/img/webpack.jpg' alt='Webpack' height={200} width={200}/>
                            <Image className={`w-14 h-14`} src='/assets/img/tailwind.png' alt='Tailwind CSS' height={200} width={200}/>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </Layout>
} 