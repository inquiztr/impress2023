import './globals.css'
import { fontOpen } from '@/components/utils/fonts'
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
        <html lang="en">
            <body className={fontOpen.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
