import React from 'react'
import { Kazino } from '../page/Obrazac20'

interface Props {
  removeField: (ind: number) => void
  ind: number
}

const ButtonRemove = ({ removeField, ind }: Props) => {
  return (
    <div className='flex flex-col p-2 mt-5'>
      <button className='bg-red-700 w-24 mr-2 text-red-100 rounded' onClick={() => removeField(ind)} type='button'>
        -
      </button>
    </div>
  )
}

export default ButtonRemove
