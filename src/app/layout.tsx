import './globals.css'
import { fontMont, fontOpen } from '@/app/styles/fonts'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
export const metadata = {
    title: 'Impressionable Gifts',
    description:
        'Wall Décor - Ladies Clothing - Jewellery - Accent Furniture - Accessories',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`${fontOpen.className} ${fontMont.variable}`}
        >
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
