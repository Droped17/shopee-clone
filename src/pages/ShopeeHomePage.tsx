import { Carousel } from "@material-tailwind/react";
import { FaAd } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ShopeeHomePage() {
  type IconItem = {
    img: string;
    name: string;
  };
  const iconItem: IconItem[] = [
    {
      name: "ส่งฟรีไม่อั้น",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "แฟชั่น",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "Shopee Mall ลดสูงสุด 90 %",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "อิเล็กทรอนิกส์",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "Hobbies & Lifestyle",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "ลูกค้าใหม่ รับโค้ด หรือของขวัญฟรี",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "ซูเปอร์มาเก็ต",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "เก็บคอยน์แลกโค้ด",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "ช้อปปี้โฮม",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      name: "ช้อปปี้ถูกชัวร์",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
  ];

  type Categories = {
    img: string;
    name: string;
  };
  const categorie: Categories[] = [
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
    {
      img: "https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b",
      name: "ความงาม",
    },
  ];

  return (
    <div className="px-80 flex flex-col gap-3 bg-gray-100">
      <section className="flex justify-between h-[30vh] mt-8 gap-2">
        <Carousel className="w-[80vw]" placeholder={""}>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt=""
            className="h-[30vh] w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt=""
            className="h-[30vh] w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt=""
            className="h-[30vh] w-full object-cover"
          />
        </Carousel>
        <div className="flex flex-col w-[40vw] h-[30vh] gap-2">
          <img
            src="https://down-th.img.susercontent.com/file/th-50009109-31de2665fd2a9ff7b17918c1ac301abf"
            alt=""
            className="h-[49%]"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt=""
            className="h-[49%]"
          />
        </div>
      </section>

      {/* Menu Component */}
      <section className="bg-white">
        <div className="flex justify-between">
          {iconItem.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex flex-col items-center max-w-[150px] p-5 cursor-pointer"
            >
              <div className="border rounded-xl p-3">
                <FaAd />
              </div>
              <p className="text-xs text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full">
        <img
          src="https://cf.shopee.co.th/file/th-50009109-4511584405faf59f920c914b3bee8be5"
          alt=""
          className="w-full cursor-pointer"
        />
      </section>

      {/* 12.12 Promotions */}
      <section>
        <div className="border-orange-900 border-4">
          <img
            src="https://down-th.img.susercontent.com/file/th-50009109-8703cbb82e66d8e9a28101a67a201455"
            alt=""
            className="w-full"
          />
          <div className="bg-secondary flex justify-between gap-2 p-2">
            <div className="flex flex-col flex-1">
              <div className="flex justify-between">
                <p>12.12 สินค้าขายดี</p>
                <p>ดูเพิ่มเติม</p>
              </div>
              <div className="flex">
                <button className="p-5 bg-white">
                  <img
                    src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                    alt=""
                  />
                </button>
                <button className="p-5 bg-white">
                  <img
                    src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                    alt=""
                  />
                </button>
                <button className="p-5 bg-white">
                  <img
                    src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between">
                <p>12.12 สินค้าขายดี</p>
                <p>ดูเพิ่มเติม</p>
              </div>
              <div className="flex">
                <button className="p-5 bg-white">
                  <img
                    src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                    alt=""
                  />
                </button>
                <button className="p-5 bg-white">
                  <img
                    src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                    alt=""
                  />
                </button>
                <button className="p-5 bg-white">
                  <img
                    src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white w-full">
        <p className="p-5">หมวดหมู่</p>

        <Carousel placeholder={"test"}>
          <div className="grid grid-cols-10 grid-rows-2">
            {categorie.map((item, index) => (
              <button className="p-5 bg-white border hover:shadow-md">
                <img
                  src={item.img}
                  alt=""
                />
                <p>{item.name}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-10 grid-rows-2">
            {categorie.map((item, index) => (
              <button className="p-5 bg-white border hover:shadow-md">
                <img
                  src={item.img}
                  alt=""
                />
                <p>{item.name}</p>
              </button>
            ))}
          </div>
        </Carousel>
      </section>

      <section className="bg-white">
        <div className="flex justify-between">
          <p className="text-orange-500 font-bold">FLASH SALE</p>
          <p>ดูทั้งหมด</p>
        </div>

        <div className="flex">
          <Carousel className="w-[80vw]" placeholder={"asdasd"}>
            <div>
              <button className="p-5 bg-white w-[5vw] border hover:shadow-md">
                <img
                  src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="p-5 bg-white w-[5vw] border hover:shadow-md">
                <img
                  src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                  alt=""
                />
              </button>
            </div>
          </Carousel>
        </div>
      </section>

      <section className="relative">
        <img
          src="https://cf.shopee.co.th/file/sg-50009109-d2ef13a8d13438ad7961a7070e6fffab"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="flex w-full absolute top-0 h-full">
          <Link to="/" className="flex-1 h-full"></Link>
          <Link to="/" className="flex-1 h-full"></Link>
          <Link to="/" className="flex-1 h-full"></Link>
        </div>
      </section>

      <section className="flex justify-between h-[30vh] mt-8 gap-2">
        <Carousel className="w-[30vw]" placeholder={"asdasd"}>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt=""
            className="h-[30vh] w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt=""
            className="h-[30vh] w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt=""
            className="h-[30vh] w-full object-cover"
          />
        </Carousel>
        <div className="flex flex-col w-[60vw] h-[30vh] gap-2 bg-black">
          <Carousel placeholder={"asdasd"}>
            <button className="p-5 bg-white w-[5vw] border hover:shadow-md">
              <img
                src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
                alt=""
              />
            </button>
            <div>Hello</div>
          </Carousel>
        </div>
      </section>

      <section className="bg-white">
        <div className="flex justify-between p-5">
          <p>ขายดีประจำสัปดาห์</p>
          <p>ดูทั้งหมด</p>
        </div>

        <Carousel placeholder={"asdasd"}>
          <button className="p-5 bg-white w-[5vw] border hover:shadow-md">
            <img
              src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lp0n5y8hyv0e8b"
              alt=""
            />
          </button>
          <div>Hello</div>
        </Carousel>
      </section>

      <section className="bg-white">
        <div className="border-b-4 border-orange-600">
          <p className="text-center p-5">สินค้าแนะนำประจำวัน</p>
        </div>
        <div className="grid grid-cols-6">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </section>

      <footer className="bg-gray-300 flex">
        <div className="flex-1">1</div>
        <div className="flex-1">2</div>
        <div className="flex-1">3</div>
        <div className="flex-1">4</div>
        <div className="flex-1">5</div>
      </footer>
    </div>
  );
}
