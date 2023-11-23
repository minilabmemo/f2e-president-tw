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

      <main className="container  w-full md:w-96 lg:w-full mx-auto bg-white h-screen">
        <div className="content  mx-auto h-full flex justify-start flex-col items-center gap-6">
          <div className="mt-24 flex items-center flex-col">
            <div >  <Image src="/images/logo.svg" width="138" height="86" alt="Logo" /></div>

            <h1 className='font-ms text-[60px] text-primary '>台灣歷年總統 都幾？</h1>

          </div>
          <div className='f-s-24 text-pink font-bold'>選擇查詢年份</div>
          <YearList />
          <div className="m-b-96"></div>
        </div>

        <div className="fixed bottom-0 flex">
          <div >        <Image src="/images/person1.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person2.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person3.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person4.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person5.png" width="280" height="258" alt="person" /></div>
          <div>         <Image src="/images/person6.png" width="280" height="258" alt="person" /></div>

        </div>
      </main >
    </>
  )
}
