import React from 'react'

interface Props {
  text: string
  name: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, i: number) => void
  ind: number
  [x: string]: any
}

const TextFieldDynamic = ({ text, name, ind, handleChange, ...props }: Props) => {
  return (
    <div className='w-60'>
      <div className='flex flex-col p-2'>
        <label className='font-semibold'>{text}</label>
        <div className='flex flex-col'>
          <input
            name={name}
            onChange={(e) => handleChange(e, ind)}
            className='w-full px-1 py-1 text-gray-700 border rounded border-slate-500 bg-gray-50 focus:outline-none focus:bg-white focus:drop-shadow-lg focus:shadow-cyan-100'
            autoComplete='off'
            {...props}
          />
        </div>
      </div>
    </div>
  )
}

export default TextFieldDynamic
