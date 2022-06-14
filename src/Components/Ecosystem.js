import academies from '../Components/images/cricket_academies.png';
import bat_manufacturers from '../Components/images/bat_manufacturers.png';
import coach_red from '../Components/images/coach_red.png';
import grounds from '../Components/images/cricket_grounds.png';
import commentators from '../Components/images/cricket_commentators.png';
import scorers from '../Components/images/cricket_scorers.png';
import shops from '../Components/images/cricket_shops.png';
import umpires from '../Components/images/cricket_umpires.png';
import live_stream_icon from '../Components/images/live_stream_icon.png';
import physio_icon from '../Components/images/physio_icon.png';
import shirt_vendors from '../Components/images/t-shirt_vendors.png';
import tournament_organizer from '../Components/images/tournament_organizer.png';
import trophy_vendors from '../Components/images/trophy_vendors.png';
import {Link, useNavigate} from "react-router-dom";
//import Contact from './Contact';


function Ecosystem() {



  return (
  


    <div className='flex flex-col  w-full'>


      <div className='flex flex-col gap-4 w-full bg-red-800 h-52 py-3   text-white '>

        <div className='  font-serif font-semibold  text-5xl text-center '>
          Ecosystem
        </div>
        <div className='text-lg lg:text-2xl font-light text-center '>
          Explore and connect with the people, who make grassroots Cricket possible.
        </div>
        <Link to="/contact" className='border-white hover:bg-white border  w-fit hover:text-yellow-400 rounded-sm mx-auto px-5 py-1'>
        REGISTER NOW
        </Link>
        
      </div>


      <div className='grid grid-cols-4 w-3/4 mx-auto gap-8  pt-12 px-10 py-3' >
       
      <Link to="/academies"   className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-xl'>
        <img className=' w-1/2 mx-auto' src={academies}/>

        Academies
        </Link>

        <Link to="/Grounds" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={grounds}/>
        Grounds
        </Link>

        <Link to="/Shops" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={shops}/>
        Shops
        </Link>

        <Link to="/Organisers" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={tournament_organizer}/>
        Organisers
        </Link>

        <Link to="/Scorers" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={scorers}/>
        Scorers
        </Link>

        <Link to="./Umpires" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={umpires}/>
        Umpires
        </Link>

        <Link to="/Commentators" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={commentators}/>
        Commentators
        </Link>

        <Link to="/Streamers" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={live_stream_icon}/>
        Streamers
        </Link>

        <Link to="/Tshirts" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={shirt_vendors}/>
        T-shirts Vendors
        </Link>

        <Link to="/Trophy" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={trophy_vendors}/>
        Trophy Vendors
        </Link>

        <Link to="/BatManufactures" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={bat_manufacturers}/>
        Bat Manufactures
        </Link>

        <Link to="/Physio" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={physio_icon}/>
        Physio and Fitness Trainer
        </Link>

        <Link to="/PersonalCoaching" className=' p-10 hover:bg-red-300 rounded-sm border-white text-center  shadow-2xl'>
        <img className=' w-1/2 mx-auto' src={coach_red}/>
        Personal Coaching
        </Link>
        

      </div>


    </div>
  );
}

export default Ecosystem;
