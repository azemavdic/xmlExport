import React from 'react'

interface Props {
  text: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextField = ({ text, value, setValue }: Props) => {
  return (
    <div className='w-60'>
      <div className='flex flex-col p-2'>
        <label className='font-semibold'>{text}</label>
        <div className='flex flex-col'>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='px-1 border-slate-500 py-1 w-full text-gray-700 bg-gray-50 border rounded focus:outline-none focus:bg-white focus:drop-shadow-lg focus:shadow-cyan-100'
            autoComplete='off'
          />
        </div>
      </div>
    </div>
  )
}

export default TextField
