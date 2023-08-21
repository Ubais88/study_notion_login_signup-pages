import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'
import frame from "../assets/frame.png"
import {FcGoogle} from "react-icons/fc"

const Templete = ({title,desc1 , desc2, image, formtype, setIsLoggedIn}) => {

  return (
    <div className='flex w-11/12 justify-between max-w-[1060px] py-12 mx-auto gap-x-12 gap-y-0' >
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-3xl'>{title}</h1>
            <p className=' flex flex-col text-[1.125rem] leading-[1.625rem] mt-4 '>
                <span className='text-richblack-100'>{desc1}</span>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {formtype === "signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-richblack-700 w-full' ></div>
                <p className='text-richblack-700 font-medium leading-[1.25rem]'>OR</p>
                <div className='h-[1px] bg-richblack-700 w-full' ></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6' >
            <FcGoogle/>
                <p>Sign In with Google</p>
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px] mx-auto md:mx-0 '>
            <img
            src={frame}
            alt="patter"
            width={558}
            height={504}
            loading="lazy"
            />
            
            <img
            src={image}
            alt="patter"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4 "
            />
        </div>
    </div>
  )
}

export default Templete