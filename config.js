// ======================================
// KML Map Viewer - Configuration
// แก้ไขค่าต่าง ๆ ตามข้อมูล GitHub ของคุณ
// ======================================

const CONFIG = {
  // ชื่อ GitHub Account ของคุณ เช่น 'johnsmith'
  owner: 'Kunch',

  // ชื่อ Repository เช่น 'my-map-site'
  repo: 'KML-Map-Viewer',

  // Branch หลัก (ปกติคือ main หรือ master)
  branch: 'main',

  // ตำแหน่งเริ่มต้นของแผนที่ [latitude, longitude]
  defaultCenter: [13.7563, 100.5018], // กรุงเทพมหานคร

  // ระดับ zoom เริ่มต้น (1–19)
  defaultZoom: 10,

  // ชื่อเว็บไซต์ (แสดงใน sidebar)
  siteName: 'KML Map Viewer'
};
