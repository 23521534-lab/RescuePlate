# RescuePlate — Next.js Website

Website giải cứu thực phẩm dành cho người Việt Nam, xây dựng bằng Next.js 14 với App Router, TypeScript và CSS Modules.

## Cài đặt & Chạy

```bash
# 1. Cài dependencies
npm install

# 2. Chạy development server
npm run dev
```

Mở http://localhost:3000 trên trình duyệt.

## Deploy lên Vercel

```bash
# Cài Vercel CLI (nếu chưa có)
npm i -g vercel

# Deploy
vercel
```

Hoặc kết nối repo GitHub với Vercel dashboard — Vercel sẽ tự detect Next.js và deploy tự động.

## Cấu trúc project

```
rescueplate/
├── app/
│   ├── layout.tsx          ← Root layout (Navbar + Footer)
│   ├── globals.css         ← Global styles + color variables
│   ├── page.tsx            ← Trang chủ (/)
│   ├── page.module.css
│   ├── impact/
│   │   ├── page.tsx        ← Trang tác động (/impact)
│   │   └── page.module.css
│   ├── partners/
│   │   ├── page.tsx        ← Trang đối tác (/partners)
│   │   └── page.module.css
│   ├── join/
│   │   ├── page.tsx        ← Trang tham gia (/join)
│   │   └── page.module.css
│   └── about/
│       ├── page.tsx        ← Về chúng tôi (/about)
│       └── page.module.css
├── components/
│   ├── Navbar.tsx          ← Pill-shaped navigation bar
│   ├── Navbar.module.css
│   ├── Footer.tsx          ← Footer chung
│   ├── Marquee.tsx         ← Scrolling text banner
│   └── WavyText.tsx        ← SVG curved wavy text
└── public/
    └── images/             ← Đặt ảnh thực tế vào đây
```

## Màu sắc chính

Tất cả màu được định nghĩa trong `app/globals.css`:

```css
--green:       #3d8b37   /* Màu xanh chính — vivid, popped */
--green-d:     #2a6325   /* Xanh đậm */
--green-dd:    #1a3d17   /* Xanh rất đậm */
--green-l:     #5aaa53   /* Xanh nhạt hơn */
--green-xl:    #7ec478   /* Xanh nhạt nhất */
--green-pale:  #d4edcf   /* Xanh rất nhạt */
--green-faint: #edf7eb   /* Background xanh cực nhạt */
--cream:       #f5f2eb   /* Nền kem */
--warm:        #eae5d8   /* Nền ấm */
--dark:        #142010   /* Chữ tối */
```

## Thêm ảnh thực tế

Đặt ảnh vào thư mục `public/images/` và dùng trong code:

```tsx
import Image from 'next/image';
<Image src="/images/ten-anh.jpg" alt="..." width={800} height={600} />
```

## Fonts

- **Playfair Display** — font chữ tiêu đề (editorial, serif)
- **Be Vietnam Pro** — font chữ thân (clean, hỗ trợ tiếng Việt tốt)

Fonts được load từ Google Fonts trong `globals.css`.
