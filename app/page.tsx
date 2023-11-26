import Image from 'next/image'

import Link from "next/link";
import React from 'react'
import { Years } from './const'


function YearList() {

  return (

    <div className="flex justify-center flex-wrap	gap-4">
      {Years.map((item, index) => (
        <div key={index}>
          <Link href={`/year/${item.year}`}>
            <div className='flex justify-center bg-gray-150 w-[172px] rounded-[500px] p-3 font-bold  '>
              {item.year}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

}



export default function Home() {
  return (
    <>

      <main className="3xl:container  w-full  mx-auto bg-white h-screen">
        <div className="content  mx-auto h-full flex justify-start flex-col items-center gap-6 p-1">
          <div className="mt-24 flex items-center flex-col">
            <div >  <Image src="/images/logo.svg" width="138" height="86" alt="Logo" /></div>

            <h1 className='font-ms  text-primary text-3xl/lh150 md:text-[60px]'>台灣歷年總統 都幾？</h1>

          </div>
          <div className='text-xl   md:text-2xl/lh150 text-pink-150 font-bold'>選擇查詢年份</div>
          <YearList />
          <div className="m-b-96"></div>
        </div>

        <div className=" container fixed bottom-0 flex   -translate-x-1/2	left-1/2 justify-center ">
          <div className='hidden md:block' >        <Image src="/images/person1.png" width="280" height="258" alt="person" /></div>
          <div className='hidden md:block'>         <Image src="/images/person2.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person3.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person4.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person5.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person6.png" width="280" height="258" alt="person" /></div>

        </div>
      </main >
    </>
  )
}
