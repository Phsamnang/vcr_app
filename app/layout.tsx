import type {Metadata} from 'next'
import {Inter, Poppins} from 'next/font/google'
import './globals.css'
import Provider from "@/components/layout/provider/Provider";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {SideBar} from "@/components/sidbar/SideBar";


const inter = Inter({subsets: ['latin']})
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {


    return (
        <html lang="en">
        <head>
            <title>VCR Menu</title>

        </head>

        <body className={poppins.className}>
        <Provider>
            <div className="container-fluid">
                <div className="row">
                    <SideBar/>
                    <div className="col-sm p-3 min-vh-100">
                        {children}
                    </div>

                </div>
            </div>
        </Provider>
        </body>
        </html>
    )
}
