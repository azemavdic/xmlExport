import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import bs from 'date-fns/locale/bs'
import 'react-datepicker/dist/react-datepicker.css'
registerLocale('bs', bs)

interface Props {
  text: string
  value: Date
  setValue: React.Dispatch<React.SetStateAction<Date>>
}

const DateField = ({ text, value, setValue }: Props) => {
  return (
    <div className='w-60'>
      <div className='flex flex-col w-full p-2'>
        <label className='font-semibold'>{text}</label>
        <div>
          <DatePicker
            autoComplete='off'
            selected={value}
            onChange={(date: Date) => setValue(date)}
            locale='bs'
            dateFormat='dd.MM.yyyy'
            className='z-50 border-slate-500 w-full px-1 py-1 text-gray-700 border rounded bg-gray-50 focus:outline-none focus:bg-white focus:drop-shadow-lg focus:shadow-cyan-100'
            strictParsing
            placeholderText={'dan.mjesec.godina'}
          />
        </div>
      </div>
    </div>
  )
}

export default DateField
