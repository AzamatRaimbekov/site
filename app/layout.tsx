import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Investment Consulting Projects | Профессиональный инвестиционный консалтинг',
  description: 'Комплексное сопровождение инвестиций: правовое консультирование, финансовый анализ, управление проектами. Снижаем риски и повышаем эффективность на каждом этапе.',
  keywords: 'инвестиционный консалтинг, правовое сопровождение, due diligence, ESG, управление проектами, корпоративное право',
  openGraph: {
    title: 'Investment Consulting Projects',
    description: 'Комплексное сопровождение инвестиций от стратегии до реализации',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Consulting Projects',
    description: 'Комплексное сопровождение инвестиций от стратегии до реализации',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
