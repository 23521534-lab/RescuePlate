import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Đối tác — RescuePlate' };

export default function PartnersPage() {
  return (
    <>
      {/* ── HERO — full bleed with text on bg ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrg1} />
        <div className={styles.heroOrg2} />
        <div className={styles.heroContent}>
          <span className="sec-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Chương trình đối tác</span>
          <h1 className={styles.heroH1}>Biến dư thừa<br />thành <em>cơ hội</em></h1>
          <p className={styles.heroP}>Tham gia cùng hơn 1,200 doanh nghiệp đang hợp tác với RescuePlate. Biến rác thực phẩm thành doanh thu bổ sung trong khi xây dựng thương hiệu bền vững.</p>
          <div className={styles.heroStats}>
            {[
              { n: '1,200+', l: 'Cửa hàng đối tác'         },
              { n: '-70%',   l: 'Giảm rác thực phẩm TB'     },
              { n: '8.5tr',  l: 'Doanh thu thêm/tháng (VNĐ)'},
              { n: '4.8★',   l: 'Đánh giá đối tác'          },
            ].map(s => (
              <div key={s.l} className={styles.heroStat}>
                <div className={styles.heroStatN}>{s.n}</div>
                <div className={styles.heroStatL}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className={styles.heroActions}>
            <Link href="/join" className="btn-white">Đăng ký làm đối tác</Link>
            <button className="btn-white-outline">Đặt lịch demo</button>
          </div>
        </div>
      </section>

      {/* ── BENEFITS LIST — editorial rows ── */}
      <section className={styles.benefitsSec}>
        <span className="sec-label">Tại sao hợp tác với chúng tôi</span>
        <h2 className="sec-title">Lợi ích cho <em>doanh nghiệp</em> của bạn</h2>
        <div className="provider-list" style={{ marginTop: '1.5rem' }}>
          {[
            { type: 'Tăng doanh thu',         desc: 'Tạo thu nhập bổ sung từ thực phẩm dư thừa thay vì phải đổ bỏ mỗi ngày sau giờ đóng cửa', hi: true  },
            { type: 'Thu hút khách hàng mới', desc: 'Tiếp cận 25,000+ người dùng quan tâm đến bền vững và tiết kiệm chi phí trong khu vực của bạn', hi: false },
            { type: 'Xây dựng thương hiệu',   desc: 'Được gắn nhãn "Doanh nghiệp xanh" và nhận chứng nhận bền vững từ RescuePlate để trưng bày', hi: false },
            { type: 'Tích hợp dễ dàng',       desc: 'Bảng điều khiển đơn giản, hỗ trợ thiết lập trong 24 giờ, không phí ẩn, không hợp đồng dài hạn', hi: false },
          ].map(r => (
            <div key={r.type} className={`provider-row ${r.hi ? 'highlight' : ''}`}>
              <span className="pr-type">{r.type}</span>
              <span className="pr-desc">{r.desc}</span>
              <span className="pr-arr">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUSINESS TYPES — image cards ── */}
      <section className={styles.bizSec}>
        <span className="sec-label" style={{ color: 'var(--green-xl)' }}>Ai có thể tham gia</span>
        <h2 className={styles.bizTitle}>Phù hợp với mọi <em>doanh nghiệp</em> thực phẩm</h2>
        <div className={styles.bizGrid}>
          {[
            { icon: '🍜', title: 'Nhà hàng & Quán ăn',     desc: 'Cơm, phở, bún và các món ăn đặc sản cuối ngày. Giảm rác bếp trong khi kiếm thêm thu nhập mỗi tối.', dark: false },
            { icon: '🛒', title: 'Siêu thị & Cửa hàng',    desc: 'Rau củ tươi và hàng hóa gần ngày hết hạn — bán trước khi lãng phí. Đơn giản và minh bạch.',           dark: true  },
            { icon: '🥐', title: 'Tiệm bánh & Quán cà phê', desc: 'Bánh mì, bánh ngọt nướng mỗi ngày. Tìm nhà cho mỗi ổ bánh trước giờ đóng cửa buổi tối.',             dark: false },
          ].map(c => (
            <div key={c.title} className={styles.bizCard}>
              <div className={`${styles.bizImg} ${c.dark ? styles.bizImgDark : ''}`}>
                <div className={styles.bizShape} />
                <span style={{ fontSize: '2.4rem' }}>{c.icon}</span>
              </div>
              <div className={styles.bizBody}>
                <h3 className={styles.bizH3}>{c.title}</h3>
                <p className={styles.bizP}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW TO JOIN — steps ── */}
      <section className={styles.stepsSec}>
        <span className="sec-label">Quy trình</span>
        <h2 className="sec-title">Bắt đầu chỉ trong <em>3 bước</em></h2>
        <div className={styles.stepsGrid}>
          {[
            { n: '01', title: 'Nộp đơn đăng ký',    desc: 'Điền thông tin doanh nghiệp của bạn vào mẫu đơn trực tuyến. Chỉ mất 5 phút.' },
            { n: '02', title: 'Xác minh & Kết nối',  desc: 'Đội ngũ của chúng tôi liên hệ trong 24 giờ để thiết lập tài khoản và hướng dẫn sử dụng.' },
            { n: '03', title: 'Bắt đầu kiếm thêm',   desc: 'Đăng thực phẩm dư thừa, nhận đơn hàng và bắt đầu tạo doanh thu bổ sung ngay hôm nay.' },
          ].map(s => (
            <div key={s.n} className={styles.stepCard}>
              <div className={styles.stepNum}>{s.n}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="cta-strip">
        <h2>Sẵn sàng kiếm thêm từ thực phẩm <em>dư thừa?</em></h2>
        <div className="cta-btns">
          <Link href="/join" className="btn-primary">Đăng ký ngay</Link>
          <button className="btn-outline">Đặt lịch demo</button>
        </div>
      </div>
    </>
  );
}
