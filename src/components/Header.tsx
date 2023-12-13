import { HeaderTextButton } from "./HeaderTextButton";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const names: string[] = [
    "Seller Centre",
    "เริ่มต้นขายสินค้า",
    "ดาวน์โหลด",
    "ติดตามเราบน",
  ];

  const headerName: string[] = [
    "การแจ้งเตือน",
    "ช่วยเหลือ",
    "ไทย",
    "สมัครใหม่",
    "เข้าสู่ระบบ",
  ];

  const headerButtomName: string[] = [
    "ฟรีลูกค้าใหม่",
    "ของฟรี",
    "ไอโฟน1บาท",
    "สินค้า 1 บาท",
    "ลูกค้าใหม่",
    "เครื่องใช้ไฟฟ้า",
    "รองเท้าผ้าใบ1บาท",
    "แจกฟรี",
    "สกอร์ถูกๆ",
    "เสื้อ 1 บาท",
    "0 บาท",
    "ลูกค้าใหม่",
    "เสื้อกันหนาว",
  ];

  return (
    <div className="bg-primary  px-80">
      <section className="flex justify-between">
        <div className="flex gap-4 p-2">
          {names.map((item, index) => (
            <HeaderTextButton key={`${item}-${index}`} name={item} />
          ))}
        </div>

        <div className="flex gap-4 p-2">
          {headerName.map((item, index) => (
            <HeaderTextButton key={`${item}-${index}`} name={item} />
          ))}
        </div>
      </section>

      <section className="flex justify-between items-center">
        <img
          src={`https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepagefe/26c9324913c021677768c36975d635ef.png`}
          alt=""
          className="w-[8vw] cursor-pointer"
        />
        <div className="w-full">
          <div className="flex">
            <input
              type="text"
              name=""
              className="h-[4vh] w-full p-3"
              placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี*"
            />
            <button className="border-2 border-white min-w-[70px] flex justify-center items-center">
              <FaSearch color="white"/>
            </button>
          </div>
          <div className="text-white flex gap-4 justify-between p-2">
            {headerButtomName.map((item,index)=> (<HeaderTextButton key={`${item}-${index}`} name={item}/>))}
          </div>
        </div>
        <div className="min-w-[150px] h-[80px] flex items-center justify-center">
          <FaShoppingCart size={30} color="white"/>
        </div>
      </section>
    </div>
  );
}
