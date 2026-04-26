import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'RescuePlate — Giải cứu thực phẩm, cứu hành tinh',
  description: 'Kết nối với nhà hàng và cửa hàng địa phương đang cung cấp thực phẩm dư thừa với giá ưu đãi đến 70%. Dành cho người Việt Nam.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
