import Link from 'next/link';
import WavyText from '@/components/WavyText';
import styles from './page.module.css';

export const metadata = { title: 'Tác động — RescuePlate' };

export default function ImpactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrg1} />
        <div className={styles.heroOrg2} />
        <div className={styles.heroInner}>
          <span className="sec-label" style={{ color: 'rgba(255,255,255,0.55)' }}>Tác động môi trường</span>
          <h1 className={styles.heroH1}>Tác động <em>chung</em><br />của chúng ta</h1>
          <p className={styles.heroP}>Cùng nhau, chúng ta đang tạo ra sự khác biệt thực sự trong việc giảm lãng phí thực phẩm và bảo vệ hành tinh.</p>
          <div className={styles.bigStats}>
            {[
              { num: '2.5M kg', lbl: 'Thực phẩm đã cứu'       },
              { num: '850K L',  lbl: 'Nước tiết kiệm'           },
              { num: '1.2M kg', lbl: 'CO₂ ngăn chặn'           },
              { num: '50K+',    lbl: 'Cuộc sống được cải thiện' },
            ].map(s => (
              <div key={s.lbl} className={styles.bsCard}>
                <div className={styles.bsNum}>{s.num}</div>
                <div className={styles.bsLbl}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className={styles.whySec}>
        <span className="sec-label">Tại sao điều này quan trọng</span>
        <h2 className="sec-title">Ba lý do để <em>hành động ngay</em></h2>
        <div className={styles.whyGrid}>
          {[
            {
              icon: '🌡',
              title: 'Tác động khí hậu',
              desc:  'Lãng phí thực phẩm chiếm 8–10% lượng khí thải nhà kính toàn cầu. Mỗi bữa ăn được cứu trực tiếp giúp chống biến đổi khí hậu và bảo vệ tương lai.',
              accent: 'var(--green)',
            },
            {
              icon: '💧',
              title: 'Bảo tồn nước',
              desc:  'Nông nghiệp sử dụng 70% nước ngọt toàn cầu. Khi chúng ta cứu thực phẩm, chúng ta cũng cứu lượng nước khổng lồ đã được dùng để trồng trọt và chế biến nó.',
              accent: 'var(--green-l)',
            },
            {
              icon: '⚡',
              title: 'Hiệu quả tài nguyên',
              desc:  'Bằng cách cứu thực phẩm dư thừa, chúng ta tối đa hóa việc sử dụng đất đai, năng lượng và tài nguyên đã đầu tư vào toàn bộ chuỗi sản xuất lương thực.',
              accent: 'var(--green-xl)',
            },
          ].map(c => (
            <div key={c.title} className={styles.whyCard} style={{ borderLeftColor: c.accent }}>
              <div className={styles.whyIcon}>{c.icon}</div>
              <h3 className={styles.whyH3}>{c.title}</h3>
              <p className={styles.whyP}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRESS ── */}
      <section className={styles.progSec}>
        <h2 className={styles.progTitle}>Tiến độ hướng tới <em>mục tiêu 2025</em></h2>
        {[
          { label: 'Bữa ăn đã cứu',         curr: '50K',   goal: '75K',   pct: 67 },
          { label: 'Cửa hàng đối tác',       curr: '1,200', goal: '2,000', pct: 60 },
          { label: 'Thành phố hoạt động',    curr: '10',    goal: '30',    pct: 33 },
          { label: 'CO₂ ngăn chặn (tấn)',    curr: '1,200', goal: '1,500', pct: 80 },
        ].map(p => (
          <div key={p.label} className={styles.progItem}>
            <div className={styles.progLabel}>
              <span>{p.label}</span>
              <span>{p.curr} / {p.goal} mục tiêu</span>
            </div>
            <div className={styles.progBg}>
              <div className={styles.progFill} style={{ width: `${p.pct}%` }} />
            </div>
          </div>
        ))}
      </section>

      {/* ── PROVIDER LIST — editorial rows ── */}
      <section className={styles.listSec}>
        <span className="sec-label">Đóng góp theo lĩnh vực</span>
        <h2 className="sec-title">Ai đang cùng <em>giải cứu</em></h2>
        <div className="provider-list" style={{ marginTop: '1.5rem' }}>
          {[
            { type: 'Nhà hàng & Quán ăn',     desc: '38% tổng lượng thực phẩm được cứu · 620+ đối tác đang hoạt động', hi: true  },
            { type: 'Siêu thị & Cửa hàng',    desc: '27% tổng lượng thực phẩm được cứu · 310+ đối tác đang hoạt động', hi: false },
            { type: 'Tiệm bánh & Quán cà phê', desc: '21% tổng lượng thực phẩm được cứu · 195+ đối tác đang hoạt động', hi: false },
            { type: 'Nhà máy thực phẩm',       desc: '14% tổng lượng thực phẩm được cứu · 75+ đối tác đang hoạt động',  hi: false },
          ].map(r => (
            <div key={r.type} className={`provider-row ${r.hi ? 'highlight' : ''}`}>
              <span className="pr-type">{r.type}</span>
              <span className="pr-desc">{r.desc}</span>
              <span className="pr-arr">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL BLEED CTA ── */}
      <div className="fullbleed" style={{ height: '300px' }}>
        <div className="fb-circle" style={{ width: '260px', height: '260px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="fb-org" style={{ width: '300px', height: '300px', borderRadius: '40% 60% 55% 45%/50% 45% 55% 50%', top: '10%', right: '3%' }} />
        <div className="fb-text">
          <h2>Hãy trở thành một phần của <em>giải pháp.</em><br />Mỗi bữa ăn đều quan trọng.</h2>
          <Link href="/join" className="btn-white">Tham gia ngay</Link>
        </div>
      </div>

      <WavyText />

      {/* ── CTA STRIP ── */}
      <div className="cta-strip">
        <h2>Cùng nhau tạo ra <em>tác động lớn hơn</em></h2>
        <div className="cta-btns">
          <Link href="/join"     className="btn-primary">Đăng ký ngay</Link>
          <Link href="/partners" className="btn-outline">Trở thành đối tác</Link>
        </div>
      </div>
    </>
  );
}
