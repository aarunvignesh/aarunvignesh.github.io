import { Inter } from "next/font/google";
import Header from "../header/header"
import { Sidebar } from "../sidebar/sidebar"

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}:{children?: any}) {
   return  <div>
                <Sidebar/>
                <Header/>
                <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className} justify-center `}>
                    {children}
                </main>
            </div> 
}