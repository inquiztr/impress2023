import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header/Header'

const font = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

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
        <html lang="en">
            <body className={font.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
