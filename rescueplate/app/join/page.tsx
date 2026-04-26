'use client';
import Link from 'next/link';
import styles from './page.module.css';

export default function JoinPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrg1} />
        <div className={styles.heroOrg2} />
        <div className={styles.heroInner}>
          <span className="sec-label" style={{ color: 'rgba(255,255,255,0.55)' }}>Tham gia phong trào</span>
          <h1 className={styles.heroH1}>Bắt đầu tạo ra<br /><em>sự khác biệt</em></h1>
          <p className={styles.heroP}>Dù bạn là người yêu ẩm thực muốn tiết kiệm tiền hay doanh nghiệp muốn biến rác thải thành doanh thu — luôn có chỗ cho bạn trong cộng đồng RescuePlate.</p>
        </div>
      </section>

      {/* ── TWO OPTION CARDS ── */}
      <section className={styles.cardsSec}>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <div className={styles.cardShape} />
              <span style={{ fontSize: '3rem' }}>🥗</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTag}>Dành cho người dùng</span>
              <h2 className={styles.cardH2}>Tham gia cộng đồng</h2>
              <p className={styles.cardP}>Khám phá ưu đãi thực phẩm gần bạn và bắt đầu tiết kiệm tiền trong khi bảo vệ môi trường Việt Nam.</p>
              <ul className={styles.cardList}>
                {[
                  'Duyệt ưu đãi gần bạn theo thời gian thực',
                  'Tiết kiệm đến 70% cho bữa ăn ngon',
                  'Theo dõi tác động môi trường cá nhân',
                  'Nhận điểm thưởng khi giải cứu thực phẩm',
                  'Khám phá món ăn mới từ các đối tác địa phương',
                ].map(i => <li key={i}>{i}</li>)}
              </ul>
              <Link href="#signup-form" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Đăng ký miễn phí</Link>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardFeat}`}>
            <div className={`${styles.cardImg} ${styles.cardImgDark}`}>
              <div className={styles.cardShape} />
              <span style={{ fontSize: '3rem' }}>🏪</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTag}>Dành cho doanh nghiệp</span>
              <h2 className={styles.cardH2}>Trở thành đối tác</h2>
              <p className={styles.cardP}>Biến thực phẩm dư thừa thành doanh thu và thể hiện cam kết bền vững của thương hiệu bạn với khách hàng.</p>
              <ul className={styles.cardList}>
                {[
                  'Đăng thực phẩm dư thừa trong vài phút',
                  'Tiếp cận 25,000+ người dùng địa phương',
                  'Kiếm thêm trung bình 8.5 triệu VNĐ/tháng',
                  'Nhận chứng nhận doanh nghiệp xanh',
                  'Hỗ trợ kỹ thuật 24/7 từ đội ngũ chúng tôi',
                ].map(i => <li key={i}>{i}</li>)}
              </ul>
              <Link href="#signup-form" className="btn-white" style={{ display: 'block', textAlign: 'center' }}>Đăng ký làm đối tác</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGN UP FORM ── */}
      <section className={styles.formSec} id="signup-form">
        <div className={styles.formWrap}>
          <span className="sec-label">Danh sách chờ</span>
          <h2 className={styles.formH2}>Nhận thông báo <em>sớm nhất</em></h2>
          <p className={styles.formP}>Được cập nhật về các đối tác mới, mẹo bền vững và ưu đãi đặc biệt tại thành phố của bạn.</p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.fg}>
                <label className={styles.label}>Họ và tên</label>
                <input type="text" placeholder="VD: Nguyễn Thị Lan" className={styles.input} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label}>Email</label>
                <input type="email" placeholder="lan@example.com" className={styles.input} />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.fg}>
                <label className={styles.label}>Số điện thoại</label>
                <input type="tel" placeholder="VD: 0901 234 567" className={styles.input} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label}>Thành phố</label>
                <input type="text" placeholder="VD: TP. Hồ Chí Minh" className={styles.input} />
              </div>
            </div>
            <div className={styles.fg}>
              <label className={styles.label}>Tôi muốn tham gia với tư cách...</label>
              <select className={styles.select}>
                <option>Người dùng / Yêu ẩm thực</option>
                <option>Chủ nhà hàng / Quán ăn</option>
                <option>Siêu thị / Cửa hàng</option>
                <option>Tiệm bánh / Quán cà phê</option>
                <option>Nhà máy thực phẩm</option>
                <option>Khác</option>
              </select>
            </div>
            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              Đăng ký danh sách chờ →
            </button>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.listSec}>
        <span className="sec-label">Câu hỏi thường gặp</span>
        <h2 className="sec-title">Bạn muốn <em>biết thêm?</em></h2>
        <div className="provider-list" style={{ marginTop: '1.5rem' }}>
          {[
            { type: 'RescuePlate hoàn toàn miễn phí?',           desc: 'Đúng vậy. Đăng ký tài khoản người dùng hoàn toàn miễn phí. Đối tác chỉ trả hoa hồng nhỏ khi có giao dịch.', hi: true  },
            { type: 'Thực phẩm có đảm bảo chất lượng?',          desc: 'Tất cả đối tác đều được xác minh và tuân thủ tiêu chuẩn an toàn thực phẩm. Chúng tôi kiểm tra định kỳ.',    hi: false },
            { type: 'Có thể hủy đơn hàng không?',                desc: 'Có, bạn có thể hủy tối thiểu 2 giờ trước giờ lấy hàng. Điều này giúp đối tác điều chỉnh kịp thời.',          hi: false },
            { type: 'Doanh nghiệp ở tỉnh lẻ có được không?',     desc: 'Hiện tại chúng tôi phục vụ 10 thành phố lớn và đang mở rộng. Đăng ký để được ưu tiên khi có mặt ở khu vực bạn.', hi: false },
          ].map(r => (
            <div key={r.type} className={`provider-row ${r.hi ? 'highlight' : ''}`}>
              <span className="pr-type">{r.type}</span>
              <span className="pr-desc">{r.desc}</span>
              <span className="pr-arr">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-strip">
        <h2>Có câu hỏi? Chúng tôi luôn <em>sẵn sàng hỗ trợ.</em></h2>
        <div className="cta-btns">
          <a href="mailto:support@rescueplate.vn" className="btn-primary">Liên hệ chúng tôi</a>
          <Link href="/about" className="btn-outline">Về chúng tôi</Link>
        </div>
      </div>
    </>
  );
}
