import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'NeoCash',
  description: 'NeoCash Solutions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={montserrat.variable}>
      <body className="font-[montserrat]">{children}</body>
    </html>
  )
}
