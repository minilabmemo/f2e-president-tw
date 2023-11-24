import React from 'react'

export default function RateBar({ color, percentage, showText }: { color: string, percentage: string, showText: boolean }) {
  return (
    <div className={`group relative h-full first:rounded-l-[50px] last:rounded-r-[50px]  ${color}`} style={{ width: percentage }}>
      {showText && (<div className='absolute bg-transparent text-white text-xs -translate-x-1/2 left-1/2 ' >{percentage}</div>)}

      {parseFloat(percentage || '0') < 10 && (
        <div className='absolute bg-pink-150 px-1 rounded-xl text-white text-xs -translate-x-1/2 left-1/2 top-5 hidden group-hover:block'>{percentage}</div>
      )}
    </div>
  )
}
