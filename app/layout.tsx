import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'VELOCÉ — Temukan mobil impianmu', description: 'Showroom mobil premium, dalam dimensi baru.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}</body></html> }
