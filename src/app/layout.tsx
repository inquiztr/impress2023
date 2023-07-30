import './globals.css'
import { fontMont, fontMontReg, fontOpen } from '@/app/styles/fonts'
import Header from '@/components/Header/Header'

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
            </body>
        </html>
    )
}
