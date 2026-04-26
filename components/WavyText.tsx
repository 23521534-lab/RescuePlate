export default function WavyText() {
  return (
    <div className="wavy-wrap">
      <svg width="100%" height="54" viewBox="0 0 1000 54" preserveAspectRatio="none">
        <defs>
          <path id="wave1" d="M0,32 C150,8 300,50 500,24 C700,4 850,46 1000,20" />
          <path id="wave2" d="M0,36 C120,56 280,18 480,38 C660,56 820,20 1000,36" />
        </defs>
        <text>
          <textPath href="#wave1" startOffset="0%">
            Thực phẩm ngon · Giá tốt · Vì môi trường · Dành cho Việt Nam · Giải cứu mỗi ngày ·&nbsp;
          </textPath>
        </text>
        <text>
          <textPath href="#wave2" startOffset="25%">
            Save food · Save money · Save the planet · Cùng nhau thay đổi · Rescue every day ·&nbsp;
          </textPath>
        </text>
      </svg>
    </div>
  );
}
