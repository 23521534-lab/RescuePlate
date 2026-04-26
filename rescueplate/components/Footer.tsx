import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Rescue<span>Plate</span></div>
          <p>Kết nối cộng đồng để giảm lãng phí thực phẩm và tạo ra tương lai bền vững hơn cho Việt Nam, từng bữa ăn một.</p>
        </div>
        <div className="footer-col">
          <h4>Nền tảng</h4>
          <Link href="/">Trang chủ</Link>
          <Link href="/impact">Tác động</Link>
          <Link href="/partners">Đối tác</Link>
          <Link href="/join">Tham gia</Link>
          <Link href="/about">Về chúng tôi</Link>
        </div>
        <div className="footer-col">
          <h4>Hỗ trợ</h4>
          <Link href="#">Trung tâm trợ giúp</Link>
          <Link href="#">Liên hệ</Link>
          <Link href="#">Câu hỏi thường gặp</Link>
          <Link href="#">An toàn thực phẩm</Link>
          <Link href="#">Cộng đồng</Link>
        </div>
        <div className="footer-col">
          <h4>Liên hệ</h4>
          <a href="mailto:support@rescueplate.vn">support@rescueplate.vn</a>
          <span style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.45rem' }}>TP. Hồ Chí Minh</span>
          <span style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.45rem' }}>Hà Nội · Đà Nẵng</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 RescuePlate. Mọi quyền được bảo lưu. · <Link href="#" style={{ color: 'inherit' }}>Chính sách riêng tư</Link> · <Link href="#" style={{ color: 'inherit' }}>Điều khoản dịch vụ</Link></p>
        <div className="eco-badge">🌱 Chứng nhận trung hòa carbon</div>
      </div>
    </footer>
  );
}
