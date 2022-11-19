import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className='p-2 flex justify-between  bg-slate-100 border-b-4 border-b-orange-200'>
      <div className=''><img src='https://loremflickr.com/300/300/pizza' className='w-12 h-12'/></div>
      <div>
        <ul className='flex w-fit justify-between pt-3 text-lg font-medium'>
           <Link to={'/'} className='mx-2'> <li className={`${pathname=="/"?"text-orange-500":"text-slate-500"}`} >Home</li></Link>
           <Link to={'/myjobs'}  className='mx-2'> <li  className={`${pathname=="/myjobs"?"text-orange-500":"text-slate-500"}`} >My Jobs</li></Link>
           <Link to={'/mypayment'}  className='mx-2'> <li  className={`${pathname=="/mypayment"?"text-orange-500":"text-slate-500"}`}  >My Payment</li></Link>
           <Link to={'/myofferletter'}  className='mx-2'> <li  className={`${pathname=="/myofferletter"?"text-orange-500":"text-slate-500"}`}  >My Offerletter</li></Link>
           <Link to={'/mycertificates'}  className='mx-2'> <li  className={`${pathname=="/mycertificates"?"text-orange-500":"text-slate-500"}`}  >My Certificate</li></Link>
           
        </ul>
      </div>
      <div className=''><img src='https://loremflickr.com/300/300/pizza' className='w-12 h-12 rounded-full'/></div>
    </div>
  )
}

export default Navbar
