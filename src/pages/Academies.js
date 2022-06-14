import React from 'react';
import { GrSearch } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";

import academies from '../Components/images/img12.jpg';
import Pop from '../Components/Modal';


export default function Academies() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='flex flex-col  w-full'>


      <div className='flex md:flex-row md:justify-between lg:w-3/4 flex-col w-full mx-auto lg:px-10 px-3 gap-3 py-4  items-start '>

        <div className='flex lg:flex-row  items-center  gap-2 '>
          <h1 className='text-gray-500 font-serif text-xl '>Cricket Academies in</h1>

          <a className=' text-red-700 font-medium text-sm italic underline-offset-1  underline'>(Location).</a>
        </div>

        <div className='flex flex-row items-center gap-2 '>
          <input placeholder='Search' className='border pl-4 py-1 rounded-md '></input>
          <GrSearch />
        </div>

      </div>



      <div className='grid lg:grid-cols-3 md:grid-cols-2  lg:w-3/4 lg:mx-auto w-full  gap-8   lg:px-10 px-3  '>

        <div onClick={() => setOpen(true)} className='flex  flex-col   lg:h-56 border  shadow-xl '>
          <div>
            <img className=' w-full mx-auto ' src={academies} />
          </div>

          <div className='flex flex-row h-20 w-full justify-between  py-2 divide-x'>
            <div className='pl-2 font-serif text-lg'>
              A One Cricket Aca...
            </div>
            <div className='px-3  leading-8'>
              <h1 className=' font-light text-base'>Starting from</h1>
              <a className='text-red-700 font-semibold text-xl'>$ 1000/1m</a>
            </div>
          </div>

          <div className='flex  text-xs gap-2  pl-1'>
            <IoLocationSharp className='text-lg text-gray-500' />
            G 4 Shivalik Square Ramipark Dindoli Surat, . . .
          </div>
        </div>


        <div className='flex  flex-col   lg:h-56 border  shadow-xl '>
          <div>
            <img className=' w-full mx-auto ' src={academies} />
          </div>

          <div className='flex flex-row h-20 w-full justify-between  py-2 divide-x'>
            <div className='pl-2 font-serif text-lg'>
              A One Cricket Aca...
            </div>
            <div className='px-3  leading-8'>
              <h1 className=' font-light text-base'>Starting from</h1>
              <a className='text-red-700 font-semibold text-xl'>$ 1000/1m</a>
            </div>
          </div>

          <div className='flex  text-xs gap-2  pl-1'>
            <IoLocationSharp className='text-lg text-gray-500' />
            G 4 Shivalik Square Ramipark Dindoli Surat, . . .
          </div>
        </div>


        <div className='flex  flex-col   lg:h-56 border  shadow-xl '>
          <div>
            <img className=' w-full mx-auto ' src={academies} />
          </div>

          <div className='flex flex-row h-20 w-full justify-between  py-2 divide-x'>
            <div className='pl-2 font-serif text-lg'>
              A One Cricket Aca...
            </div>
            <div className='px-3  leading-8'>
              <h1 className=' font-light text-base'>Starting from</h1>
              <a className='text-red-700 font-semibold text-xl'>$ 1000/1m</a>
            </div>
          </div>

          <div className='flex  text-xs gap-2  pl-1'>
            <IoLocationSharp className='text-lg text-gray-500' />
            G 4 Shivalik Square Ramipark Dindoli Surat, . . .
          </div>
        </div>

        <div className='flex  flex-col   lg:h-56 border  shadow-xl '>
          <div>
            <img className=' w-full mx-auto ' src={academies} />
          </div>

          <div className='flex flex-row h-20 w-full justify-between  py-2 divide-x'>
            <div className='pl-2 font-serif text-lg'>
              A One Cricket Aca...
            </div>
            <div className='px-3  leading-8'>
              <h1 className=' font-light text-base'>Starting from</h1>
              <a className='text-red-700 font-semibold text-xl'>$ 1000/1m</a>
            </div>
          </div>

          <div className='flex  text-xs gap-2  pl-1'>
            <IoLocationSharp className='text-lg text-gray-500' />
            G 4 Shivalik Square Ramipark Dindoli Surat, . . .
          </div>
        </div>
      </div>
      <Pop setOpen={setOpen} open={open} />

    </div>

  )
}
