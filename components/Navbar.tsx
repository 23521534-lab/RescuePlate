'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const links = [
  { href: '/',         label: 'Trang chủ' },
  { href: '/impact',   label: 'Tác động'  },
  { href: '/partners', label: 'Đối tác'   },
  { href: '/join',     label: 'Tham gia'  },
  { href: '/about',    label: 'Về chúng tôi' },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <header className={styles.shell}>
      <div className={styles.pill}>
        <Link href="/" className={styles.logo}>
          Rescue<span>Plate</span>
        </Link>
        <nav className={styles.links}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${path === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/join" className={styles.cta}>Bắt đầu ngay</Link>
      </div>
    </header>
  );
}
