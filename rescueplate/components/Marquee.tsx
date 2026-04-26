const items = [
  'Giảm lãng phí thực phẩm',
  'Tiết kiệm tiền',
  'Vì môi trường Việt Nam',
  '1,200+ đối tác',
  'Bảo vệ hành tinh',
  'Thực phẩm ngon · Giá tốt',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
