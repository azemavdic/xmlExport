import React from 'react'

interface Props {
  addField: () => void
}

const ButtonAdd = ({ addField }: Props) => {
  return (
    <div className='flex flex-col p-2 mt-5'>
      <button type='button' className='bg-green-700 w-24 text-green-100 rounded' onClick={addField}>
        +
      </button>
    </div>
  )
}

export default ButtonAdd
