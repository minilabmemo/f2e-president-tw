
"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import TaiwanMap from '@/app/components/TaiwanMap';
import Link from "next/link";

import React from 'react'
import Chart from '@/app/components/Chart';
import ChartLine from '@/app/components/ChartLine';
import { calcVoteResultByCity, cities } from '@/app/utils/city';
import { OverallResult, allVotes } from '@/app/utils/overall';
import RateBar from '@/app/components/RateBar';
import { Years } from '@/app/utils/data';
import { getTownList } from '@/app/utils/town';
const PersonsResult = ({ result }: { result: OverallResult }) => {

  return (
    <div className='flex flex-col gap-2 '>
      <div className=" flex flex-wrap gap-1">
        {result.candidates
          .slice(0, 3)
          .map((item, index) => (
            <div key={index} className="person flex-1 flex  flex-wrap justify-around items-center gap-1">
              <div className=' '> {item.imageNode}</div>
              <div className=" flex flex-col  gap-1">
                <div className='text-secondary text-xs/lh150'>{item.party}</div>
                <div className='text-primary text-base/lh150'><span className="font-bold">{item.name}</span> / <span className="text-sm">{item.vice}</span></div>
                <div className='text-primary text-xs/lh150 font-bold'> <span>{item.total}</span> 票</div>
              </div>
            </div>

          ))}
      </div>

      <div className="bar relative  h-[18px] w-full flex ">

        {result.candidates
          .slice(0, 3)
          .map((item, index) => {
            const color = "bg-" + item.color;
            return (<React.Fragment key={index}>
              <RateBar color={color} percentage={item.percentage || '0'} showText></RateBar>
            </React.Fragment>
            )
          }
          )}
      </div>
    </div>
  )
}



const CitiesResultTable = ({ year }: { year: string }) => {
  const router = useRouter();
  const res = calcVoteResultByCity(year);

  return (
    <div className=" mt-2 ">
      <table className="min-w-full border-separate	border-spacing-0	 rounded-s overflow-hidden" >
        <thead className='bg-gray-200 '>
          <tr className="text-[14px] font-normal 	">
            <th className="border text-left p-2 font-normal ">地區</th>
            <th className="border text-left p-2 font-normal">得票率</th>
            <th className="border text-left p-2 font-normal hidden sm:table-cell">最高票候選人</th>
            <th className="border text-left p-2 font-normal hidden sm:table-cell">總體投票數</th>
            <th className="border text-left p-2 font-normal hidden sm:table-cell">總投票率</th>
            <th className="border text-left p-2 font-normal hidden sm:table-cell"></th>
          </tr>
        </thead>
        <tbody>
          {res.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b p-2 font-bold h-[76px]">{row.area}</td>
              <td className="border-b  px-2  w-3/4   h-[76px] sm:w-1/5">
                <div className="flex  h-full flex-col items-center justify-evenly">
                  <div className=" sm:hidden">
                    <div className="flex gap-2 items-center text-sm">最高票
                      <div className="w-8 h-8">{row.winner.imageNode}</div>
                      <span className="font-bold">{row.winner.name}</span> / <span className="text-sm">{row.winner.vice}</span>
                    </div>
                  </div>
                  <div className="flex h-[8px] w-full ">
                    <RateBar color={`bg-${row.voteRateByCandidate[1].color}`} percentage={`${row.voteRateByCandidate[1].percentage}`} showText={false} ></RateBar>
                    <RateBar color={`bg-${row.voteRateByCandidate[2].color}`} percentage={`${row.voteRateByCandidate[2].percentage}`} showText={false} ></RateBar>
                    <RateBar color={`bg-${row.voteRateByCandidate[3].color}`} percentage={`${row.voteRateByCandidate[3].percentage}`} showText={false} ></RateBar></div>

                </div>
              </td>
              <td className="border-b p-2 hidden sm:table-cell">
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8">{row.winner.imageNode}</div>
                  <span className="font-bold">{row.winner.name}</span> / <span className="text-sm">{row.winner.vice}</span>
                </div>
              </td>
              <td className="border-b p-2 hidden sm:table-cell">{row.total.toLocaleString()}</td>
              <td className="border-b p-2 hidden sm:table-cell">{row.voteRate.toFixed(2)}%</td>

              <td className="border-b hidden sm:table-cell" >
                {index !== 0 && (
                  <Link href={`/year/${year}?city=${row.area}`} className='block p-5'>  <Image src="/images/navigate_next.svg" alt="navigate_next" width="9" height="6" /></Link>)

                  //   <button type="button" onClick={() => router.push(`/year/${params.year}?test=1`)}>
                  //   Dashboard
                  // </button>
                }

              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

export default function Page({ params }: { params: { year: string } }) {

  const res = allVotes(params.year)
  const searchParams = useSearchParams()
  const paramCity = searchParams.get('city') || ""

  const townList = getTownList(paramCity);
  return <>
    <main className="3xl:container   mx-auto bg-white  h-screen flex flex-col">

      <header className="flex-shrink-0  border-[1px] border-gray-150 w-full  gap-3 px-4 py-6 sm:px-6 sm:py-6  sm:flex sm:justify-between">

        <div className='w-full grid grid-cols-[5fr_1fr] gap-3 items-center md:grid-cols-5 lg:grid-cols-3 lg:w-auto '>
          <div className="col-span-5 py-2 md:col-span-2  lg:col-span-1 ">
            <Link href={`/`} className=" flex w-max gap-x-2 ">
              <div className='w-[37px] sm:w-auto'>  <Image src="/images/logo_small.svg" width="53" height="34" alt="Logo" /></div>
              <div className='font-ms whitespace-nowrap text-[20px] sm:text-[28px]  '>台灣歷年總統 都幾？</div>
            </Link>

          </div>
          <div className='option-years col-span-1 md:col-span-1  lg:col-span-1 flex sm:ml-10 sm:items-center '>
            <div className="font-bold w-[100px] hidden lg:flex">選擇年份：</div>
            <div className="relative inline-block">
              <button className="group relative flex justify-evenly items-center bg-gray-150 w-[76px] rounded-[500px] px-3 py-1 sm:p-3 lg:p-2 lg:w-[172px]">
                <span className="text-xs sm:text-base">{params.year}</span>
                <span className="w-5 h-5 flex justify-center items-center"><Image src="/images/expand_more.svg" alt="expand_more" width="9" height="6" /></span>
                <div className={`absolute top-full p-2  right-3  w-auto sm:w-40  rounded-lg z-10 bg-transparent hidden group-hover:block`}>
                  <ul className={`border border-gray-150 bg-white text-left `}>
                    {Years.map((item, index) => (
                      <div key={index}>
                        <Link href={`/year/${item.year}`}>
                          <li className="py-2 px-4 cursor-pointer hover:bg-gray-150">{item.year}</li>
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div>
              </button>

            </div>
          </div>
          <div className="options-area col-span-6 md:col-span-2  lg:col-span-1 w-full  ">
            <div className="condition  w-full ">
              <div className="relative inline-block w-1/2 py-1   bg-gray-150 rounded-l-[500px]">
                <button className="group relative flex  justify-evenly  items-center  w-full px-3 py-1 sm:w-[172px]  sm:p-3 lg:p-2" >
                  <span className="text-xs sm:text-base leading-lh150">  {paramCity ? paramCity : "全部縣市"}</span>
                  <span className="w-5 h-5 flex justify-center items-center"><Image src="/images/expand_more.svg" alt="expand_more" width="9" height="6"  ></Image></span>
                  <div className={`absolute top-full p-2  left-0  w-40  rounded-lg z-10 bg-transparent hidden group-hover:block`}>
                    <ul className={`border border-gray-150 bg-white text-left  overflow-y-auto`}>
                      <Link href={`/year/${params.year}`}>
                        <li className="py-2 px-4 cursor-pointer hover:bg-gray-150">{"全部縣市"}</li>
                      </Link>
                      {cities.map((item, index) => (
                        <div key={index}>
                          <Link href={`/year/${params.year}?city=${item}`}>
                            <li className="py-2 px-4 cursor-pointer hover:bg-gray-150">{item}</li>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                </button>
              </div>
              <div className="relative inline-block w-1/2 py-1   bg-gray-150  rounded-r-[500px] " >
                <button className="group relative flex  justify-evenly  items-center  w-full px-3 py-1 sm:w-[172px]  sm:p-3 lg:p-2" >
                  <span className="text-xs sm:text-base">  選擇區域</span>
                  <span className="w-5 h-5 flex justify-center items-center"><Image src="/images/expand_more.svg" alt="expand_more" width="9" height="6"  ></Image></span>

                  {townList.length !== 0 && (<div className={`absolute top-full p-2  left-0  w-40  rounded-lg z-10 bg-transparent hidden group-hover:block`}>
                    <ul className={`border border-gray-150 bg-white text-left max-h-[30vh] overflow-y-auto`}>
                      {townList.map((item, index) => (
                        <div key={index}>
                          <li className="py-2 px-4 cursor-pointer hover:bg-gray-150">{item}</li>
                        </div>
                      ))}
                    </ul>
                  </div>)}

                </button>
              </div>

            </div>

          </div>
        </div>

        <div className="share items-center gap-x-2 hidden lg:flex">
          <span>分享</span>
          <div className="flex items-center gap-x-1">
            <div> <Image src="/images/icon_fb.svg" width="32" height="33" alt="icon_fb" /></div>
            <div> <Image src="/images/icon_ig.svg" width="32" height="33" alt="icon_ig" /></div>
            <div> <Image src="/images/icon_yt.svg" width="32" height="33" alt="icon_yt" /> </div></div>



        </div>
      </header>

      <div className=" flex-grow overflow-y-auto w-full  flex flex-col   lg:flex-row   ">
        <div className="hidden lg:block lg:w-1/3">
          {paramCity ? (<TaiwanMap year={params.year} reverse mapPath={"/files/TOWN.json"} area={paramCity}></TaiwanMap>) :
            (<TaiwanMap year={params.year} reverse mapPath={"/files/tw.json"}></TaiwanMap>)}
        </div>

        <div className=" overflow-y-scroll w-full lg:w-2/3 px-4 sm:px-16 pb-16 flex flex-col gap-y-6">

          <div className=" text-2xl  font-bold sm:text-s28/lh150 pt-4">
            {paramCity ? (<div className=' flex gap-2 '>
              <Link href={`/year/${params.year}`} ><Image src="/images/back.svg" width="36" height="36" alt={'back'} />

              </Link>{paramCity}
            </div>) : "全臺縣市總統得票"}</div>
          <section className="result-person  bg-gray-50 rounded-xl p-2 sm:p-3 flex flex-col">
            <div className="font-bold text-xl/lh150 p-4  ">總統得票數</div>
            <div className="flex items-stretch flex-col sm:flex-row justify-center    gap-3 ">
              <div className="flex-1 flex rounded-xl bg-white flex-col  justify-center p-4">
                <PersonsResult result={res} />

              </div>
              <div className=" flex-1  flex rounded-xl bg-white  flex-col justify-center items-center md:flex-row px-8 py-8 ">
                <div className="flex-1 circle-chart flex justify-center  items-center ">
                  <div className="relative w-[124px] h-[124px]">
                    <div
                      style={{
                        backgroundImage: `conic-gradient(from 0deg at 50% 50%, #ff69b4 0%, #ff69b4 ${res.voteRate.toFixed(0) + "%"}, #ccc ${res.voteRate.toFixed(0) + "%"}, #ccc 100%)`,
                        borderImageSlice: 1,
                      }}
                      className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden  "
                    >
                      <div
                        className="absolute top-2 left-2 w-[108px] h-[108px] rounded-full"
                        style={{ backgroundColor: 'white' }}
                      ></div>
                      <div className="flex flex-col">
                        <span className="text-primary text-sm  z-10">投票率</span>
                        <span className="text-pink text-lg font-bold z-10">{res.voteRate.toFixed(0)}%</span>
                      </div>


                    </div>
                  </div>

                </div>

                <div className="flex-[2] flex flex-col justify-start gap-y-4 items-center">
                  <div className="flex   justify-center gap-x-12">
                    <div className="flex flex-col  gap-y-1">
                      <div className="text-secondary text-sm">投票數</div>
                      <div className="text-primary text-base font-bold">{res.voteNumber}</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-secondary text-sm">投票率</div>
                      <div className="text-primary text-base font-bold">{res.voteRate.toFixed(2)}%</div>
                    </div>
                  </div>
                  <div className="flex  gap-x-10">
                    <div className="flex flex-col  gap-y-1">
                      <div className="text-secondary text-sm">有效投票數</div>
                      <div className="text-primary text-base font-bold">{res.ValidVoteNumber}</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-secondary text-sm">無效投票數</div>
                      <div className="text-primary text-base font-bold">{res.InvalidVoteNumber}</div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </section>

          <section className="result-party  rounded-xl">

            <div className="flex gap-3 items-center justify-center flex-col lg:flex-row">
              <div className="flex rounded-xl bg-white w-full lg:w-1/2 flex-col  px-4 py-8 border-[1px] border-gray-150">
                <div className="font-bold text-xl/lh150 p-4">歷屆總統政黨得票數</div>
                <div className="w-full h-[250px]">   <Chart></Chart></div>


              </div>
              <div className="flex rounded-xl bg-white  w-full lg:w-1/2  flex-col px-4 py-8 border-[1px] border-gray-150">
                <div className="font-bold text-xl/lh150 p-4">歷屆總統政黨得票率</div>

                <div className="w-full h-[250px]">   <ChartLine></ChartLine></div>


              </div>
            </div>
          </section>
          <section className="result-city">
            <div className="font-bold text-xl/lh150 ">各縣市投票總覽</div>
            {paramCity ? (<></>) : (<CitiesResultTable year={params.year}></CitiesResultTable>)}

          </section>
        </div>

      </div>

    </main>

  </>



}