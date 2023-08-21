import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1060px] py-4 mx-auto'>
            <Link to='/'>
                <img src={Logo} alt='Logo' width={160} height={32} loading='lazy'/>
            </Link>
        <nav>
            <ul className='flex gap-5 text-white'>
                <li >
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>
        <div className='flex text-richblack-100 items-center gap-5'>
            { !isLoggedIn &&
                <Link to='/login'>
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
                </Link>
            }

            { !isLoggedIn &&
                <Link to='/signup'>
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Signup</button>
                </Link>
            }

            { isLoggedIn &&
                <Link to='/'>
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Loged Out Successfully");
                    }}>Log Out</button>
                </Link>
            }

            {  isLoggedIn &&
                <Link to='/dashboard'>
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link>
            }
        </div>    
    </div>
  )
}

export default Navbar