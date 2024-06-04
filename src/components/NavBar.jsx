import React,{useState} from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { SiXcode } from "react-icons/si";


function NavBar() {
    const [menu, setmenu] = useState(false);
    const navItems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        }
    ]
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed left-0 top-0 right-0 z-50 bg-green-500 text-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            {/* <img src={pic} className="h-12 w-12 rounded-full" alt="" /> */}
            <SiXcode className="mt-2 w-10 h-10" />

            <h1 className="font-semibold text-xl cursor-pointer">
              Naseem <span className="text-blue-700 text-2xl">Ali</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
            {
                navItems.map(({id,text})=>(
                    <li className="hover:scale-105 duration-200 cursor-pointer font-semibold" key={id}>
                     
                      <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      >{text} </Link>

                      </li>
                ))
            }
            </ul>
            <div onClick={()=>setmenu(!menu)} className="md:hidden">
                {menu?<IoCloseSharp size={24} />:<AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (

        <div className="bg-white">
          <ul className="md:hidden flex flex-col items-center justify-center h-screen space-3 text-xl ">
          {
                navItems.map(({id,text})=>(
                    <li className="hover:scale-105 duration-200 cursor-pointer font-semibold" key={id}>
                     <Link 
                     onClick={()=>setmenu(!menu)}
                     to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      >{text} </Link>
                      </li>
                ))
            }
          </ul>
        </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
