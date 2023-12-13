import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { FaAd  } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  iconItem,
  BestSellerItem,
  flashSaleItem,
  recommendedItem,
  shopeeMallItem,
  categorie,
} from "../model/mockData";

export default function ShopeeHomePage() {
  const [visibleItem, setVisibleItem] = useState(18);

  const handleShowMoreItem = () => {
    if (visibleItem < recommendedItem.length) {
      setVisibleItem((prev) => prev + 6);
    }
  };

  return (
    <div className="px-80 flex flex-col gap-3 bg-gray-100">
      {/* Promotion */}
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
              className="flex flex-col items-center max-w-[150px] p-5 cursor-pointer flex-1"
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
        <div className="border-b">
          <p className="p-5">หมวดหมู่</p>
        </div>

        <Carousel placeholder={"test"}>
          <div className="grid grid-cols-10 grid-rows-2">
            {categorie.map((item, index) => (
              <button className="p-5 bg-white border border-gray-100 hover:shadow-xl hover:border-gray-300">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-10 grid-rows-2">
            {categorie.map((item, index) => (
              <button className="p-5 bg-white border-gray-100 hover:shadow-xl">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </button>
            ))}
          </div>
        </Carousel>
      </section>

      {/* Flash Sale */}
      <section className="bg-white p-4">
        <div className="flex justify-between">
          <p className="text-orange-500 font-bold text-xl">FLASH SALE</p>
          <p>ดูทั้งหมด</p>
        </div>

        <div className="flex">
          <Carousel placeholder={"asdasd"}>
            <div className="grid grid-cols-6">
              {flashSaleItem.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex flex-col items-center"
                >
                  <img src={item.img} alt="" />
                  <p className="text-orange-700">&#3647; {item.price}</p>
                  <div className="bg-primary rounded-xl px-12 text-center text-white">
                    ขายแล้ว {item.amount}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-6">
              {flashSaleItem.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex flex-col items-center"
                >
                  <img src={item.img} alt="" />
                  <p className="text-orange-700">&#3647; {item.price}</p>
                  <div className="bg-primary rounded-xl px-12 text-center text-white">
                    <p>ขายแล้ว {item.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* Promotioms Detail */}
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

      {/* Shopee Mall */}
      <section className="bg-white">
        <div className="flex justify-between p-4">
          <div className="flex gap-3">
            <p className="text-red-500">SHOPEE MALL</p>
            <p>ดีลพิเศษแบรนด์ชั้นนำ</p>
            <p>ของแท้ 100 %</p>
            <p>คืนเงิน/สินค้าใน 15 วัน</p>
          </div>
          <p>ดูเพิ่มเติม</p>
        </div>

        <div className="flex">
          <div className="">
            <img
              src="https://cf.shopee.co.th/file/th-50009109-79996e4f0871b6eac7c5833274be2117"
              alt=""
              className="h-[50vh] w-full object-contain"
            />
          </div>

          <div className="flex flex-1 gap-2">
            <Carousel placeholder={"asdasd"}>
              <div className="grid grid-cols-4 grid-rows-2">
                {shopeeMallItem.map((item, index) => (
                  <div key={item.id}>
                    <div className="text-center">
                      <img src={item.img} alt="" />
                      <p className="text-red-500 font-semibold">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 grid-rows-2">
                {shopeeMallItem.map((item, index) => (
                  <div key={item.id}>
                    <div className="text-center">
                      <img src={item.img} alt="" />
                      <p className="text-red-500 font-semibold">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="flex justify-between p-5 border-b">
          <p>ขายดีประจำสัปดาห์</p>
          <p>ดูทั้งหมด</p>
        </div>

        <Carousel placeholder={"asdasd"}>
          <div className="grid grid-cols-6">
            {BestSellerItem.map((item) => (
              <div key={item.id}>
                <button className="p-5 bg-white  hover:shadow-md">
                  <img src={item.img} alt="" />
                  <p className="p-2 bg-gray-500 opacity-50 text-white">
                    ยอดขายต่อเดือน {item.amount}
                  </p>
                  <p className="text-start py-2 font-semibold">{item.type}</p>
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-6">
            {BestSellerItem.map((item) => (
              <div key={item.id}>
                <button className="p-5 bg-white  hover:shadow-md">
                  <img src={item.img} alt="" />
                  <p className="p-2 bg-gray-500 opacity-50 text-white">
                    ยอดขายต่อเดือน {item.amount}
                  </p>
                  <p className="text-start py-2 font-semibold">{item.type}</p>
                </button>
              </div>
            ))}
          </div>
        </Carousel>
      </section>

      <section>
        <div className="border-b-4 border-orange-600">
          <p className="text-center p-5 bg-white">สินค้าแนะนำประจำวัน</p>
        </div>
        <div className="grid grid-cols-6 grid-rows-3 gap-3  my-3">
          {recommendedItem.slice(0, visibleItem).map((item) => (
            <div key={item.id} className="bg-white p-2 hover:border border-orange-700">
              <img src={item.img} alt="" />
              <p>{item.detail}</p>
              <div className="flex justify-between">
                <p>{item.price}</p>
                <p>ขายแล้ว {item.amount}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          {visibleItem < recommendedItem.length ? (
            <button className="p-2 bg-white mt-3" onClick={handleShowMoreItem}>
              ดูเพิ่มเติม
            </button>
          ) : undefined}
        </div>
      </section>
    </div>
  );
}
