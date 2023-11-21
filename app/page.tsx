import Image from 'next/image'

import logo from '../assets/images/logo.svg'
import person1 from '../assets/images/person1.png'
import person2 from '../assets/images/person2.png'
import person3 from '../assets/images/person3.png'
import person4 from '../assets/images/person4.png'
import person5 from '../assets/images/person5.png'
import person6 from '../assets/images/person6.png'
import Link from "next/link";
import React from 'react'
import { Years } from './const'


function YearList() {

  return (

    <div className="flex justify-center w-full flex-wrap	gap-4">
      {Years.map((item, index) => (
        <div key={index}>
          <Link href={`/year/${item.year}`}>
            <div className='flex justify-center bg-gray w-[172px] rounded-[500px] p-3 font-bold  '>
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

      <main className="container bg-white h-screen w-full md:w-96 lg:w-full mx-auto">
        <div className="content w-[calc((924/1920)*100vw)] mx-auto h-full flex justify-start flex-col items-center gap-6">
          <div className="mt-24 flex items-center flex-col">
            <div >  <Image src={logo} alt="Logo" /></div>

            <h1 className='font-ms text-[60px] text-primary '>台灣歷年總統 都幾？</h1>

          </div>
          <div className='f-s-24 text-pink font-bold'>選擇查詢年份</div>
          <YearList />
          <div className="m-b-96"></div>
        </div>

        <div className="fixed bottom-0 flex">
          <div >         <Image src={person1} alt="person" /></div>
          <div>         <Image src={person2} alt="person" /></div>
          <div>         <Image src={person3} alt="person" /></div>
          <div>         <Image src={person4} alt="person" /></div>
          <div>         <Image src={person5} alt="person" /></div>
          <div>         <Image src={person6} alt="person" /></div>

        </div>
      </main >
    </>
  )
}
