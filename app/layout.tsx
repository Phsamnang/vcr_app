import type {Metadata} from 'next'
import {Inter, Poppins} from 'next/font/google'
import './globals.css'
import Provider from "@/components/layout/provider/Provider";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {SideBar} from "@/components/sidbar/SideBar";
import NextAuthProvider from "@/components/layout/provider/NextAuthProvider";
import Protected from "@/components/protected/Protected";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Toaster} from "react-hot-toast";

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
            <title>ចូលកម្មវិធី </title>
        </head>

        <body className={poppins.className}>
        <Toaster position="top-center"/>
        <NextAuthProvider>
            <Provider>
                <Protected>
                    <div className="container-fluid">
                        <div className="row">
                            <SideBar/>
                            <div className="col-sm p-3 min-vh-100">
                                {children}
                            </div>
                        </div>
                    </div>
                </Protected>
            </Provider>
        </NextAuthProvider>
        </body>
        </html>
    )
}
