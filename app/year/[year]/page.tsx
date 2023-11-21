
"use client"
import Image from 'next/image'
import logo_small from '../../../assets/images/logo_small.svg'
import { Years } from '@/app/const'
import { useState } from 'react';
import icon_fb from "../../../assets/images/icon_fb.svg"
import icon_yt from "../../../assets/images/icon_yt.svg"
import icon_ig from "../../../assets/images/icon_ig.svg"

export default function Page({ params }: { params: { year: string } }) {

  const [isSelect, setIsSelect] = useState(false);
  return <>
    <main className="container h-screen w-full md:w-96 lg:w-full mx-auto ">
      <div className=" w-full h-[66px] px-3 py-6">
        <header className="header flex items-center">
          <div className="flex justify-between w-max">
            <div >  <Image src={logo_small} alt="Logo" /></div>
            <div className='font-ms text-[28px] text-primary '>台灣歷年總統 都幾？</div>
          </div>

          <div className="options m-auto flex items-center">
            <div className="t">選擇年份：</div>
            <div className="relative inline-block">
              <button className="flex justify-center bg-gray w-[172px] rounded-[500px] p-3 font-bold  " onClick={() => { setIsSelect(!isSelect) }}>
                <span className="text-base">  {params.year}</span>
                <span className="text-lg">&#9660;</span>
              </button>
              <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-lg	 bg-white ${isSelect ? "" : "hidden"}`}>
                {Years.map((item, index) => (
                  <>  <li className="py-2 px-4 cursor-pointer hover:bg-gray"> {item.year}</li>
                  </>)
                )}
              </ul>
            </div>
            <div className="locations">
              <div className="relative inline-block">
                <button className="flex justify-center bg-gray w-[172px] rounded-[500px] p-3 font-bold  " onClick={() => { setIsSelect(!isSelect) }}>
                  <span className="text-base">  全部</span>
                  <span className="text-lg">&#9660;</span>
                </button>
                <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-lg	 bg-white ${isSelect ? "" : "hidden"}`}>
                  {Years.map((item, index) => (
                    <>  <li className="py-2 px-4 cursor-pointer hover:bg-gray"> {item.year}</li>
                    </>)
                  )}
                </ul>
              </div>
              <div className="relative inline-block">
                <button className="flex justify-center bg-gray w-[172px] rounded-[500px] p-3 font-bold  " onClick={() => { setIsSelect(!isSelect) }}>
                  <span className="text-base">  選擇區域</span>
                  <span className="text-lg">&#9660;</span>
                </button>
                <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-lg	 bg-white ${isSelect ? "" : "hidden"}`}>
                  {Years.map((item, index) => (
                    <>  <li className="py-2 px-4 cursor-pointer hover:bg-gray"> {item.year}</li>
                    </>)
                  )}
                </ul>
              </div>
              <div className="relative inline-block">
                <button className="flex justify-center bg-gray w-[172px] rounded-[500px] p-3 font-bold  " onClick={() => { setIsSelect(!isSelect) }}>
                  <span className="text-base">  選擇里</span>
                  <span className="text-lg">&#9660;</span>
                </button>
                <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-lg	 bg-white ${isSelect ? "" : "hidden"}`}>
                  {Years.map((item, index) => (
                    <>  <li className="py-2 px-4 cursor-pointer hover:bg-gray"> {item.year}</li>
                    </>)
                  )}
                </ul>
              </div>
            </div>

          </div>


          <div className="flex items-center">分享

            <div> <Image src={icon_fb} alt="icon_fb" /></div>
            <div> <Image src={icon_ig} alt="icon_ig" /></div>
            <div> <Image src={icon_yt} alt="icon_yt" /> </div>


          </div>
        </header>


      </div>
    </main>

  </>



}