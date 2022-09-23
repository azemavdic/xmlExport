import React from 'react'

interface Props {
  text: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const SelectField = ({ text, value, setValue }: Props) => {
  return (
    <div className='w-60'>
      <div className='flex flex-col p-2'>
        <label className='font-semibold'>{text}</label>
        <div className='flex flex-col'>
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-full px-1 py-1 text-gray-700 border rounded border-slate-500 bg-gray-50 focus:outline-none focus:bg-white focus:drop-shadow-lg focus:shadow-cyan-100'
          >
            <option value='Prijava_od_strane_poreznog_obveznika' selected>
              Prijava_od_strane_poreznog_obveznika
            </option>
            <option value='Prijava_u_ime_poreznog_obveznika'>Prijava_u_ime_poreznog_obveznika</option>
            <option value='Izmjena'>Izmjena</option>
            <option value='Izmjenjena_prijava_poreske_uprave'>Izmjenjena_prijava_poreske_uprave</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SelectField
