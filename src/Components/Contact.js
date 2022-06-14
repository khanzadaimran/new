//import logo from './logo.svg';
//import './App.css';
//import academies from '../src/images/cricket_academies.png';
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";



function Contact() {
  return (




    <div className='flex flex-col  w-full  '>


      <div className='flex flex-col gap-4 w-full bg-red-800 h-52 py-10   text-white '>

        <div className='  font-serif font-semibold  text-5xl text-center  '>
          Contact us
        </div>
        <div className='text-lg lg:text-2xl font-light text-center '>
          Need help? Tell us more and we'll be happy to assist you.
        </div>
      </div>


      <div className='  grid lg:grid-cols-3  grid-cols-1 lg:w-3/4   mx-auto lg:gap-8 gap-5 pt-12 lg:px-8 px-2 py-10' >


        <div className=' p-10 rounded-sm border-white  bg-gray-100  shadow-xl'>

          <div className='py-5 '>
            <h1 className='text-2xl font-bold font-serif leading-5'>Association</h1>
            <p className=' text-base'>  For partnering with us </p>
          </div>

          <div className='flex flex-col gap-2'>

            <div className='text-base flex items-center gap-3  cursor-pointer'>
            <div className=' rounded-full border border-slate-300 p-1 border-solid text-base'>
            <IoMailOutline />
            </div>partnerships@cricheroes.in</div>
            
            <div className='text-base flex items-center gap-3 cursor-pointer '>
            <div className='  rounded-full border border-slate-300 p-1 border-solid text-base'>
            <FiPhoneCall/></div>
              +91 7861816001
            </div>

          </div>


          <button className='border-red-800 hover:bg-gray-900 border  w-fit text-white bg-red-800 rounded-sm mx-auto px-5 py-1 mt-16'>
            BOOK A DEMO
          </button>

        </div>




        <div className=' p-10 rounded-sm border-white  bg-gray-100  shadow-xl'>

          <div className='py-5 '>
            <h1 className='text-2xl font-bold font-serif leading-5'>Support</h1>
            <p className=' text-base'>  For player queries</p>
          </div>

          <div className='flex flex-col gap-2'>

            <div className='text-base flex items-center gap-3  cursor-pointer'>
            <div className=' rounded-full border border-slate-300 p-1 border-solid text-base'>
            <IoMailOutline />
            </div>support@cricheroes.in</div>
            
            <div className='text-base flex items-center gap-3 cursor-pointer '>
            <div className='  rounded-full border border-slate-300 p-1 border-solid text-base'>
            <FiPhoneCall/></div>
            +91 8141665555
            </div>

          </div>


          <button className='border-red-800 hover:bg-gray-900 border  w-fit text-white bg-red-800 rounded-sm mx-auto px-5 py-1 mt-16'>
            WHATSAPP
          </button>

        </div>


        <div className=' p-10 rounded-sm border-white  bg-gray-100  shadow-xl'>

          <div className='py-5 '>
            <h1 className='text-2xl font-bold font-serif leading-5'>Sales</h1>
            <p className=' text-base'>  For value added services</p>
          </div>

          <div className='flex flex-col gap-2'>

            <div className='text-base flex items-center gap-3  cursor-pointer'>
            <div className=' rounded-full border border-slate-300 p-1 border-solid text-base'>
            <IoMailOutline />
            </div>sales@cricheroes.in</div>
            
            <div className='text-base flex items-center gap-3 cursor-pointer '>
            <div className='  rounded-full border border-slate-300 p-1 border-solid text-base'>
            <FiPhoneCall/></div>
            +91 8141665533
            </div>

          </div>


          <button className='border-red-800 hover:bg-gray-900 border  w-fit text-white bg-red-800 rounded-sm mx-auto px-5 py-1 mt-16'>
            REACH OUT
          </button>

        </div>
     
     
     
        </div>

     

      <div className='flex flex-col lg:gap-4 lg:w-full   bg-[#eac7c1] py-10   text-black '>

      <div className='  font-serif font-semibold  text-[28px] text-center lg:leading-3  '>
      We want you to Grow With Us!
      </div>
      <div className=' lg:text-[16px] font-normal     text-center  lg:leading-3 '>
      At CricHeroes, we are builidng a culture where passionate people (like you) can grow.
      </div>
      <button className='border-red-800 hover:bg-gray-900 border  w-fit text-white bg-red-800 rounded-sm mx-auto px-5 py-1 mt-5'>
      SEE ALL OPEN POSITIONS
          </button>
    </div>

      </div>


    
  );
}

export default Contact;
