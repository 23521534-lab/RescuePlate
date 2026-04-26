import Link from 'next/link';
import Marquee from '@/components/Marquee';
import WavyText from '@/components/WavyText';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ── HERO — full bleed with text ON image ── */}
      <section className={styles.hero}>
        <div className={styles.heroFrame}>
          <div className={styles.heroOrg1} />
          <div className={styles.heroOrg2} />
          <div className={styles.heroFrameCard}>
            <div className={styles.hfcRow}>
              <span className={styles.hfcDot} />
              <span className={styles.hfcText}>Ưu đãi gần bạn ngay hôm nay</span>
            </div>
            <div className={styles.foodTags}>
              {['Phở bò — 45k', 'Bánh mì — 18k', 'Cơm tấm — 35k', 'Bún bò — 40k'].map(t => (
                <span key={t} className={styles.foodTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Dành cho người Việt Nam</span>
          <h1 className={styles.heroH1}>
            Giải cứu<br />thực <em>phẩm,</em><br />cứu hành tinh
          </h1>
          <p className={styles.heroSub}>
            Kết nối với nhà hàng, quán ăn và cửa hàng địa phương đang cung cấp thực phẩm dư thừa với giá ưu đãi đến 70%. Mỗi bữa ăn được cứu là một bước tiến tới Việt Nam xanh hơn.
          </p>
          <div className={styles.heroActions}>
            <Link href="/join" className="btn-white">Đăng ký ngay</Link>
            <Link href="/impact" className="btn-white-outline">Xem tác động →</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <div className={styles.statsRow}>
        {[
          { num: '50K+',   lbl: 'Bữa ăn đã cứu'    },
          { num: '1,200+', lbl: 'Cửa hàng đối tác'  },
          { num: '25K+',   lbl: 'Người dùng'         },
          { num: '10',     lbl: 'Thành phố'          },
        ].map(s => (
          <div key={s.lbl} className={styles.statItem}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLbl}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── HOW IT WORKS ── */}
      <section className={styles.hiw}>
        <h2 className={styles.hiwTitle}>Vài bước để <em>bắt đầu</em></h2>
        <div className={styles.hiwGrid}>
          {[
            { n: '01', title: 'Đăng ký tài khoản', desc: 'Tạo tài khoản miễn phí và nhập thành phố của bạn để xem ngay các ưu đãi gần bạn.', dark: false },
            { n: '02', title: 'Khám phá ưu đãi',   desc: 'Duyệt qua hàng chục nhà hàng, quán cà phê và siêu thị có thực phẩm dư thừa giảm giá.', dark: true  },
            { n: '03', title: 'Nhận thực phẩm',     desc: 'Đặt hàng trực tuyến và đến lấy tại cửa hàng. Đơn giản, nhanh chóng, tiết kiệm đến 70%.', dark: false },
          ].map(c => (
            <div key={c.n} className={`${styles.hiwCard} ${c.dark ? styles.hiwCardDark : ''}`}>
              <div className={styles.hiwNum}>{c.n}</div>
              <div className={styles.hiwTitle2}>{c.title}</div>
              <div className={styles.hiwDesc}>{c.desc}</div>
              <div className={styles.hiwArrow}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNER LIST — editorial rows ── */}
      <section className={styles.providersSec}>
        <h2 className={styles.providersTitle}>Gặp gỡ <em>đối tác</em> của chúng tôi</h2>
        <p className={styles.providersSub}>Các doanh nghiệp được xác minh đang cùng chúng tôi giảm lãng phí thực phẩm tại Việt Nam</p>
        <div className="provider-list">
          {[
            { type: 'Nhà hàng & Quán ăn',    desc: 'Cơm, phở, bún, mì và các món ăn đặc sản cuối ngày · Giảm đến 70%', hi: true  },
            { type: 'Siêu thị & Cửa hàng',   desc: 'Rau củ tươi, trái cây, thực phẩm đóng gói gần ngày hết hạn · Giảm đến 60%', hi: false },
            { type: 'Tiệm bánh & Quán cà phê', desc: 'Bánh mì, bánh ngọt, cà phê và đồ uống cuối ngày · Giảm đến 65%', hi: false },
            { type: 'Nhà máy thực phẩm',     desc: 'Lô hàng dư thừa, sản phẩm lỗi bao bì vẫn đảm bảo chất lượng · Giảm đến 80%', hi: false },
          ].map(r => (
            <div key={r.type} className={`provider-row ${r.hi ? 'highlight' : ''}`}>
              <span className="pr-type">{r.type}</span>
              <span className="pr-desc">{r.desc}</span>
              <span className="pr-arr">→</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/partners" className="btn-primary">Xem tất cả đối tác →</Link>
        </div>
      </section>

      {/* ── FORMAT CARDS — image stacked over text ── */}
      <section className={styles.formatSec}>
        <h2 className={styles.formatTitle}>Hình thức <em>giải cứu</em></h2>
        <div className={styles.formatGrid}>
          <div className={styles.fmtCard}>
            <div className={styles.fmtImg}>
              <div className={styles.fmtImgShape} />
              <span style={{ fontSize: '2.5rem' }}>🍜</span>
            </div>
            <div className={styles.fmtBody}>
              <h3 className={styles.fmtH3}>Đặt hàng <em>trực tuyến</em></h3>
              <p className={styles.fmtP}>Duyệt ưu đãi trên website, đặt hàng và thanh toán trực tuyến. Đến lấy tại cửa hàng vào khung giờ quy định.</p>
              <div className={styles.fmtArrow}>→</div>
            </div>
          </div>
          <div className={styles.fmtCard}>
            <div className={`${styles.fmtImg} ${styles.fmtImgDark}`}>
              <div className={styles.fmtImgShape} />
              <span style={{ fontSize: '2.5rem' }}>🤝</span>
            </div>
            <div className={styles.fmtBody}>
              <h3 className={styles.fmtH3}>Hộp <em>bất ngờ</em></h3>
              <p className={styles.fmtP}>Đăng ký nhận hộp thực phẩm ngẫu nhiên từ đối tác với giá cố định ưu đãi. Bất ngờ mỗi ngày — luôn ngon và tươi.</p>
              <div className={styles.fmtArrow}>→</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL BLEED — text ON background ── */}
      <div className="fullbleed" style={{ height: '360px' }}>
        <div className="fb-circle" style={{ width: '280px', height: '280px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="fb-circle" style={{ width: '180px', height: '180px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="fb-org" style={{ width: '300px', height: '300px', borderRadius: '40% 60% 55% 45%/50% 45% 55% 50%', top: '10%', right: '5%' }} />
        <div className="fb-org" style={{ width: '200px', height: '200px', borderRadius: '55% 45% 40% 60%/40% 60% 40% 60%', bottom: '5%', left: '5%' }} />
        <div className="fb-text">
          <h2>Lãng phí thực phẩm <em>không phải là</em><br />số phận — mà là lựa chọn</h2>
          <Link href="/impact" className="btn-white" style={{ marginTop: '0' }}>Xem tác động của chúng tôi</Link>
        </div>
      </div>

      {/* ── WAVY TEXT ── */}
      <WavyText />

      {/* ── IMPACT STRIP ── */}
      <section className={styles.impactStrip}>
        <div className={styles.impactLeft}>
          <h2 className={styles.impactH2}>Cùng nhau chúng ta tạo ra sự <em>thay đổi thật sự</em></h2>
          <p className={styles.impactP}>Mỗi bữa ăn được cứu là một chiến thắng nhỏ cho hành tinh của chúng ta. Hãy xem những gì cộng đồng RescuePlate đã đạt được.</p>
          <Link href="/impact" className="btn-white">Xem báo cáo tác động</Link>
        </div>
        <div className={styles.impactStats}>
          {[
            { num: '2.5M kg', lbl: 'Thực phẩm đã cứu'       },
            { num: '1.2M kg', lbl: 'CO₂ ngăn chặn'           },
            { num: '850K L',  lbl: 'Nước tiết kiệm'           },
            { num: '50K+',    lbl: 'Cuộc sống được cải thiện' },
          ].map(s => (
            <div key={s.lbl} className={styles.isCard}>
              <div className={styles.isNum}>{s.num}</div>
              <div className={styles.isLbl}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testiSec}>
        <div className="sec-label">Cộng đồng nói gì</div>
        <h2 className="sec-title">Người Việt <em>yêu thích</em> RescuePlate</h2>
        <div className={styles.testiGrid}>
          {[
            { init: 'LH', name: 'Lan Hương',   city: 'Hà Nội · 2 tháng trước',         text: '"Tôi tiết kiệm được hơn 500k mỗi tuần. Đồ ăn vẫn rất ngon và tươi — không thể tin được đây là thực phẩm dư thừa!"' },
            { init: 'TM', name: 'Trần Minh',   city: 'Đối tác TP.HCM · 4 tháng trước', text: '"Quán cà phê của tôi đã giảm được 80% rác thực phẩm và còn kiếm thêm doanh thu. Tuyệt vời cho cả môi trường lẫn kinh doanh!"' },
            { init: 'NQ', name: 'Nguyễn Quân', city: 'Đà Nẵng · 1 tuần trước',          text: '"Ý tưởng rất hay và phù hợp với văn hóa người Việt. Chúng ta không lãng phí — giờ có nơi để thực hành điều đó."' },
          ].map(t => (
            <div key={t.name} className={styles.tCard}>
              <div className={styles.tStars}>★ ★ ★ ★ ★</div>
              <p className={styles.tText}>{t.text}</p>
              <div className={styles.tAuth}>
                <div className={styles.tAv}>{t.init}</div>
                <div>
                  <div className={styles.tName}>{t.name}</div>
                  <div className={styles.tCity}>{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="cta-strip">
        <h2>Sẵn sàng bắt đầu hành trình <em>giải cứu thực phẩm?</em></h2>
        <div className="cta-btns">
          <Link href="/join"     className="btn-primary">Đăng ký ngay</Link>
          <Link href="/partners" className="btn-outline">Trở thành đối tác</Link>
        </div>
      </div>
    </>
  );
}
