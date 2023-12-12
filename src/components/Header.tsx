export default function Header() {
  return (
    <div className="bg-primary px-80">
      <section className="flex justify-between">
        <div className="text-white flex gap-4">
          <p>Seller Centre</p>
          <p>เริ่มต้นขายสินค้า</p>
          <p>ดาวน์โหลด</p>
          <p>ติดตามเราบน</p>
        </div>
        <div className="text-white flex gap-4">
          <p>การแจ้งเตือน</p>
          <p>ช่วยเหลือ</p>
          <p>ไทย</p>
          <p>สมัครใหม่</p>
          <p>เข้าสู่ระบบ</p>
        </div>
      </section>

      <section className="flex justify-between items-center">
        <img
          src={`https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepagefe/26c9324913c021677768c36975d635ef.png`}
          alt=""
          className="w-[8vw] cursor-pointer"
        />
        <div className="w-full">
          <input type="text" name="" className="h-[4vh] w-full" />
          <div className="text-white flex gap-4 justify-between">
            <p>การแจ้งเตือน</p>
            <p>ช่วยเหลือ</p>
            <p>ไทย</p>
            <p>สมัครใหม่</p>
            <p>เข้าสู่ระบบ</p>
            <p>การแจ้งเตือน</p>
            <p>ช่วยเหลือ</p>
            <p>ไทย</p>
            <p>สมัครใหม่</p>
            <p>เข้าสู่ระบบ</p>
          </div>
        </div>
        <div>Cart logo</div>
      </section>
    </div>
  );
}
