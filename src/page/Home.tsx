import React from 'react'
import { Tab } from '@headlessui/react'
import Obrazac19 from './Obrazac19'
import Obrazac20 from './Obrazac20'
import Obrazac12 from './Obrazac12'
import Obrazac13 from './Obrazac13'

const Home = () => {
  const data = [
    {
      name: 'OBRAZAC 19 KMO ISA',
    },
    {
      name: 'OBRAZAC 20 KGON ISK',
    },
    {
      name: 'OBRAZAC 12 SDRA',
    },
    {
      name: 'OBRAZAC 13 PSEB',
    },
  ]
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className='flex flex-col items-center justify-center w-full p-3 bg-slate-300/30'>
      <div className='w-full'>
        <Tab.Group>
          <Tab.List className='flex w-full p-1 space-x-1 bg-slate-600 rounded-xl'>
            {data.map((key) => (
              <Tab
                key={key.name}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-slate-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {key.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='self-start overflow-y-auto h-[88vh]'>
            <Tab.Panel>
              {/* OBRAZAC 19 KMO ISA */}
              <section className='flex flex-wrap items-center justify-start w-full'>
                <Obrazac19 />
              </section>
            </Tab.Panel>
            <Tab.Panel>
              {/* OBRAZAC 20 KGON ISK */}
              <section className='flex flex-wrap items-center justify-start w-full'>
                <Obrazac20 />
              </section>
            </Tab.Panel>
            <Tab.Panel>
              {/* OBRAZAC 12 SDRA */}
              <section className='flex flex-wrap items-center justify-start w-full'>
                <Obrazac12 />
              </section>
            </Tab.Panel>
            <Tab.Panel>
              {/* OBRAZAC 13 PSEB I 14 PSMB */}
              <section className='flex flex-wrap items-center justify-start w-full'>
                <Obrazac13 />
              </section>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default Home
