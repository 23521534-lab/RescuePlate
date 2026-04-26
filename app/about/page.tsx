import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Về chúng tôi — RescuePlate' };

export default function AboutPage() {
  return (
    <>
      {/* ── HERO — split: text left, image right ── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className="sec-label">Câu chuyện của chúng tôi</span>
          <h1 className={styles.heroH1}>Sứ mệnh xuất phát<br />từ <em>trái tim</em></h1>
          <p className={styles.heroP}>RescuePlate được sinh ra từ một quan sát đơn giản: hàng tấn thực phẩm ngon đang bị đổ bỏ mỗi đêm ở Việt Nam trong khi nhiều gia đình vẫn cần đến nó. Chúng tôi quyết định thay đổi điều đó — một bữa ăn một lúc.</p>
        </div>
        <div className={styles.heroImg}>
          <div className={styles.heroOrg1} />
          <div className={styles.heroOrg2} />
          <div className={styles.heroImgCard}>
            <div className={styles.hicStat}>
              <div className={styles.hicNum}>2023</div>
              <div className={styles.hicLbl}>Năm thành lập</div>
            </div>
            <div className={styles.hicDivider} />
            <div className={styles.hicStat}>
              <div className={styles.hicNum}>10</div>
              <div className={styles.hicLbl}>Thành phố</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION SPLIT ── */}
      <div className={styles.missionSplit}>
        <div className={styles.msLeft}>
          <h2 className={styles.msH2}>Sứ mệnh của chúng tôi</h2>
          <p className={styles.msP}>Chúng tôi tin rằng một Việt Nam không có lãng phí thực phẩm là hoàn toàn có thể. Bằng cách kết nối thực phẩm dư thừa với những người cần nó, chúng tôi đang xây dựng một nền kinh tế thực phẩm tuần hoàn mang lại lợi ích cho tất cả — doanh nghiệp, người tiêu dùng và hành tinh.</p>
          <p className={styles.msP} style={{ marginTop: '1rem' }}>Được thành lập năm 2023 tại TP. Hồ Chí Minh, chúng tôi đã mở rộng ra 10 thành phố lớn, giải cứu hơn 2.5 triệu kg thực phẩm và ngăn chặn hơn 1.2 triệu kg lượng khí thải CO₂. Và chúng tôi mới chỉ bắt đầu.</p>
        </div>
        <div className={styles.msRight}>
          <h2 className={styles.msRH2}>Giá trị của chúng tôi</h2>
          {[
            { icon: '🌱', title: 'Bền vững là ưu tiên hàng đầu', desc: 'Mọi quyết định của chúng tôi đều được định hướng bởi tác động đến môi trường và các thế hệ tương lai của Việt Nam.' },
            { icon: '🤝', title: 'Được dẫn dắt bởi cộng đồng',   desc: 'Chúng tôi phát triển nhờ sự tin tưởng và tham gia của người dùng, đối tác và cộng đồng địa phương trên cả nước.' },
            { icon: '📊', title: 'Minh bạch tuyệt đối',           desc: 'Chúng tôi công bố số liệu tác động một cách công khai, tự chịu trách nhiệm về kết quả thực tế chứ không chỉ là lời hứa.' },
          ].map(v => (
            <div key={v.title} className={styles.vi}>
              <div className={styles.viIcon}>{v.icon}</div>
              <div>
                <div className={styles.viTitle}>{v.title}</div>
                <div className={styles.viDesc}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── JOURNEY TIMELINE ── */}
      <section className={styles.timelineSec}>
        <span className="sec-label">Hành trình của chúng tôi</span>
        <h2 className="sec-title">Từ ý tưởng đến <em>tác động</em></h2>
        <div className={styles.timeline}>
          {[
            { year: '2023 Q1', title: 'Thành lập tại TP.HCM',      desc: 'RescuePlate ra đời với 5 đối tác đầu tiên và 200 người dùng thử nghiệm.' },
            { year: '2023 Q3', title: 'Mở rộng ra Hà Nội',         desc: 'Sau thành công tại TP.HCM, chúng tôi mở rộng ra thủ đô với 80 đối tác mới.' },
            { year: '2024 Q1', title: '10 thành phố — 1,000 đối tác', desc: 'Đạt cột mốc 1,000 đối tác và 10 thành phố trên toàn quốc.' },
            { year: '2024 Q3', title: '50K bữa ăn được cứu',        desc: 'Vượt mốc 50,000 bữa ăn được cứu và 25,000 người dùng tích cực.' },
          ].map((t, i) => (
            <div key={t.year} className={styles.tlItem}>
              <div className={styles.tlDot} />
              {i < 3 && <div className={styles.tlLine} />}
              <div className={styles.tlYear}>{t.year}</div>
              <div className={styles.tlTitle}>{t.title}</div>
              <div className={styles.tlDesc}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.teamSec}>
        <span className="sec-label">Đội ngũ</span>
        <h2 className="sec-title">Những người đứng sau <em>RescuePlate</em></h2>
        <div className={styles.teamGrid}>
          {[
            { init: 'AL', name: 'Anh Linh',   role: 'Đồng sáng lập & CEO',      bio: '10 năm kinh nghiệm trong ngành thực phẩm và công nghệ. Từng làm việc tại Grab và VNG.' },
            { init: 'MH', name: 'Minh Hải',   role: 'Đồng sáng lập & CTO',      bio: 'Kỹ sư phần mềm với đam mê về sustainability tech. Tốt nghiệp ĐH Bách Khoa TP.HCM.' },
            { init: 'TN', name: 'Thu Ngân',   role: 'Trưởng phòng Đối tác',     bio: 'Chuyên gia quan hệ đối tác với mạng lưới hơn 500 doanh nghiệp F&B trên toàn quốc.' },
            { init: 'PL', name: 'Phúc Long',  role: 'Trưởng phòng Marketing',   bio: 'Chuyên gia digital marketing với 8 năm kinh nghiệm xây dựng thương hiệu tiêu dùng.' },
            { init: 'HV', name: 'Hà Vi',      role: 'Trưởng phòng Vận hành',    bio: 'Quản lý vận hành có kinh nghiệm mở rộng startup từ 1 lên 10 thành phố.' },
            { init: 'BK', name: 'Bảo Khoa',   role: 'Trưởng phòng Kỹ thuật',    bio: 'Full-stack developer với kinh nghiệm xây dựng các nền tảng thương mại điện tử lớn.' },
          ].map(m => (
            <div key={m.name} className={styles.teamCard}>
              <div className={styles.teamAv}>{m.init}</div>
              <div className={styles.teamName}>{m.name}</div>
              <div className={styles.teamRole}>{m.role}</div>
              <div className={styles.teamBio}>{m.bio}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROVIDER LIST — press / recognition ── */}
      <section className={styles.pressSec}>
        <span className="sec-label">Được công nhận bởi</span>
        <h2 className="sec-title">Báo chí & <em>Giải thưởng</em></h2>
        <div className="provider-list" style={{ marginTop: '1.5rem' }}>
          {[
            { type: 'Vietnam Startup Award 2024',    desc: 'Giải thưởng Khởi nghiệp Xanh của năm · Hội đồng Khởi nghiệp Quốc gia', hi: true  },
            { type: 'Tuổi Trẻ Online',               desc: '"RescuePlate đang thay đổi cách người Việt nhìn nhận về lãng phí thực phẩm" — Tháng 6, 2024', hi: false },
            { type: 'VnExpress Kinh doanh',          desc: '"Startup giải cứu thực phẩm gọi được 2 triệu USD vòng seed" — Tháng 3, 2024', hi: false },
            { type: 'Forbes Vietnam Under 30',       desc: 'Hai đồng sáng lập được Forbes Vietnam vinh danh trong danh sách Under 30 năm 2024', hi: false },
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
        <h2>Cùng chúng tôi xây dựng Việt Nam <em>không lãng phí thực phẩm.</em></h2>
        <div className="cta-btns">
          <Link href="/join"     className="btn-primary">Bắt đầu ngay</Link>
          <Link href="/partners" className="btn-outline">Hợp tác với chúng tôi</Link>
        </div>
      </div>
    </>
  );
}
