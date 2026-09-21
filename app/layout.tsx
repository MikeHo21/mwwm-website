import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MWWM (HONG KONG) LIMITED',
  description: '為您的業務提供專業且高效的最佳解決方案',
  icons: {
    icon: '/images/mwwm-logo.svg', // 讓瀏覽器分頁顯示你的 Logo
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}