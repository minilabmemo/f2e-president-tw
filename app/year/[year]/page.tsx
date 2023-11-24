
"use client"
import Image from 'next/image'
import { Years } from '@/app/const'
import { useState } from 'react';
import TaiwanMap from '../../components/TaiwanMap';
import Link from "next/link";

import React from 'react'
import Chart from '@/app/components/Chart';
import ChartLine from '@/app/components/ChartLine';
import { calcVotingResults } from '@/app/utility/city';
import { allVotes } from '@/app/utility/data';
const PersonsResult = ({ year }: { year: string }) => {
  const res = allVotes(year)
  const totalVotes = res.reduce((acc, item) => acc + item.total, 0);
  res.forEach(item => {
    const percentage = ((item.total / totalVotes) * 100).toFixed(2) + '%';
    item.percentage = percentage;
  });
  return (
    <>
      <div className=" flex flex-wrap justify-between items-center">

        {res
          .slice(0, 3)
          .map((item, index) => (
            <div className="person flex w-[170px] h-[70px] justify-around items-center " key={index}>
              <div className='w-max'> {item.imageNode}</div>
              <div className="flex flex-col w-max gap-1">
                <div className='text-secondary text-xs/lh150'>{item.party}</div>
                <div className='text-primary text-base/lh150'>{item.name}</div>
                <div className='text-primary text-base/lh150 font-bold'> <span>{item.total}</span> 票</div>
              </div>
            </div>

          ))}
      </div>
      <div className="bar rounded-[50px] h-[18px] w-full flex">
        {res
          .slice(0, 3)
          .map((item, index) => {
            const color = "bg-" + item.color;
            return (
              <div key={index} className={` h-full ${color}`} style={{ width: item.percentage }}></div>
            )
          }
          )}

      </div>
    </>
  )
}



const CitiesResultTable: React.FC<{ year: string }> = ({ year }) => {
  const res = calcVotingResults(year);

  return (
    <div className="container mx-auto mt-2">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-[14px] font-normal">
            <th className="border text-left p-2 font-normal">縣市</th>
            <th className="border text-left p-2 font-normal">得票率</th>
            <th className="border text-left p-2 font-normal">最高票候選人</th>
            <th className="border text-left p-2 font-normal">總體投票數</th>
            <th className="border text-left p-2 font-normal">總投票率</th>
          </tr>
        </thead>
        <tbody>
          {res.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b p-2 font-bold">{row.行政區別}</td>
              <td className="border-b p-2">
                {row.投票率統計[1].percentage}%/ {row.投票率統計[2].percentage}%/ {row.投票率統計[3].percentage}%</td>
              <td className="border-b p-2">   {row.勝出.name}</td>
              <td className="border-b p-2">{row.總計}</td>
              <td className="border-b p-2">{row.投票率}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Page({ params }: { params: { year: string } }) {
  const [currentCity, setCurrentCity] = useState("")
  const [isSelect, setIsSelect] = useState(false);




  return <>
    <main className="container h-full md:w-96 lg:w-full mx-auto bg-white">

      <header className="w-full h-[66px] px-6 py-6 flex items-center">
        <Link href={`/`} className="flex justify-between w-max gap-x-2">

          <div >  <Image src="/images/logo_small.svg" width="53" height="34" alt="Logo" /></div>
          <div className='font-ms text-[28px]  '>台灣歷年總統 都幾？</div>

        </Link>

        <div className="options mx-auto flex items-center">
          <div className="font-bold">選擇年份：</div>
          <div className="relative inline-block">
            <button className="flex  justify-evenly items-center bg-gray-150 w-[172px] rounded-[500px] p-3     " onClick={() => { setIsSelect(!isSelect) }}>
              <span className="text-base">  {params.year}</span>
              <span className="w-5 h-5 flex justify-center items-center"><Image src="/images/expand_more.svg" alt="expand_more" width="9" height="6"  ></Image></span>

            </button>
            <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-lg	 bg-white ${isSelect ? "" : "hidden"}`}>
              {Years.map((item, index) => (
                <div key={index}>  <li className="py-2 px-4 cursor-pointer hover:bg-gray"> {item.year}</li>  </div>)

              )}
            </ul>
          </div>
          <div className="condition">
            <div className="relative inline-block">
              <button className="flex  justify-evenly  items-center bg-gray-150 w-[172px] rounded-l-[500px] p-3 " onClick={() => { setIsSelect(!isSelect) }}>
                <span className="text-base">  全部</span>
                <span className="w-5 h-5 flex justify-center items-center"><Image src="/images/expand_more.svg" alt="expand_more" width="9" height="6"  ></Image></span>

              </button>
              <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-l-md	 bg-white ${isSelect ? "" : "hidden"}`}>

              </ul>
            </div>
            <div className="relative inline-block">
              <button className="flex justify-evenly n items-center bg-gray-150 w-[172px] p-3   " onClick={() => { setIsSelect(!isSelect) }}>
                <span className="text-base">  選擇區域</span>
                <span className="w-5 h-5 flex justify-center items-center"><Image src="/images/expand_more.svg" alt="expand_more" width="9" height="6"  ></Image></span>
              </button>
              <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-lg	 bg-white ${isSelect ? "" : "hidden"}`}>

              </ul>
            </div>
            <div className="relative inline-block">
              <button className="flex  justify-evenly  items-center bg-gray-150 w-[172px] rounded-r-[500px] p-3  " onClick={() => { setIsSelect(!isSelect) }}>
                <span className="text-base ">  選擇里</span>
                <span className="w-5 h-5 flex justify-center items-center"><Image src="/images/expand_more.svg" alt="expand_more" width="9" height="6"  ></Image></span>

              </button>
              <ul className={`absolute top-full left-0 mt-1 w-40 border border-gray rounded-lg	 bg-white ${isSelect ? "" : "hidden"}`}>

              </ul>
            </div>
          </div>

        </div>


        <div className="flex items-center gap-x-2">
          <span>分享</span>
          <div className="flex items-center gap-x-1">
            <div> <Image src="/images/icon_fb.svg" width="32" height="33" alt="icon_fb" /></div>
            <div> <Image src="/images/icon_ig.svg" width="32" height="33" alt="icon_ig" /></div>
            <div> <Image src="/images/icon_yt.svg" width="32" height="33" alt="icon_yt" /> </div></div>



        </div>
      </header>

      <div className="w-full  flex h-[calc(100vh-66px)]">
        <div className="w-1/3 h-full">
          <TaiwanMap year={params.year}></TaiwanMap>
        </div>

        <div className=" overflow-y-scroll w-2/3 px-16 pb-16 flex flex-col gap-y-6">
          <div>
            <div className="h-[86px] font-bold text-s28/lh150 flex items-center"> 全臺縣市總統得票</div>
            <div className="result-person bg-gray-50 rounded-xl px-4 pb-4">
              <div className="font-bold text-xl/lh150 p-4">總統得票數</div>
              <div className="flex gap-3 ">
                <div className="flex rounded-xl bg-white w-1/2 flex-col gap-3 items-center px-4 py-8">
                  <PersonsResult year={params.year} />

                </div>
                <div className="flex rounded-xl bg-white w-1/2 flex-wrap">
                  <div className="circle-chart flex justify-center h-full w-1/3 items-center">
                    <div className="relative w-[124px] h-[124px]">
                      <div
                        style={{
                          backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #ff69b4 0%, #ff69b4 75%, #ccc 75%, #ccc 100%)',
                          borderImageSlice: 1,
                        }}
                        className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
                      >
                        <div
                          className="absolute top-2 left-2 w-[108px] h-[108px] rounded-full"
                          style={{ backgroundColor: 'white' }}
                        ></div>
                        <div className="flex flex-col">
                          <span className="text-primary text-sm  z-10">投票率</span>
                          <span className="text-pink text-lg font-bold z-10">75%</span>
                        </div>


                      </div>
                    </div>

                  </div>

                  <div className="flex w-2/3 flex-col h-full justify-center gap-y-4">
                    <div className="flex w-full justify-start gap-x-10">
                      <div className="flex flex-col w-max gap-y-1">
                        <div className="text-secondary text-sm">投票數</div>
                        <div className="text-primary text-base font-bold">12,448,302</div>
                      </div>
                      <div className="flex flex-col w-max">
                        <div className="text-secondary text-sm">投票率</div>
                        <div className="text-primary text-base font-bold">68%</div>
                      </div>
                    </div>
                    <div className="flex w-full justify-start gap-x-10">
                      <div className="flex flex-col w-max gap-y-1">
                        <div className="text-secondary text-sm">投票數</div>
                        <div className="text-primary text-base font-bold">12,448,302</div>
                      </div>
                      <div className="flex flex-col w-max">
                        <div className="text-secondary text-sm">投票率</div>
                        <div className="text-primary text-base font-bold">68%</div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div className="result-party  rounded-xl">

            <div className="flex gap-3 items-center justify-center flex-col lg:flex-row">
              <div className="flex rounded-xl bg-white w-full lg:w-1/2 flex-col  px-4 py-8 border-[1px] border-gray-150">
                <div className="font-bold text-xl/lh150 p-4">歷屆政黨得票數</div>
                <div className="w-full h-[250px]">   <Chart></Chart></div>


              </div>
              <div className="flex rounded-xl bg-white  w-full lg:w-1/2  flex-col px-4 py-8 border-[1px] border-gray-150">
                <div className="font-bold text-xl/lh150 p-4">歷屆政黨得票率</div>

                <div className="w-full h-[250px]">   <ChartLine></ChartLine></div>


              </div>
            </div>
          </div>
          <div className="result-city">
            <div className="font-bold text-xl/lh150 ">各縣市投票總覽</div>
            <CitiesResultTable year={params.year}></CitiesResultTable>

          </div>
        </div>

      </div>

    </main>

  </>



}