"use client"

import Link from 'next/link'
import React from 'react'
import ButtonFooter from './ButtonFooter'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-black">
      <div className="text-center font-['Oxanium'] mb-[-0.6rem] sm:mb-[-1rem] md:mb-[-1.3rem] lg:mb-[-1.8rem] xl:mb-[-2.2rem] text-[8vw] font-bold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_37%,_#1c1c1c_80%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1] px-2 whitespace-nowrap">The CodeBreakers Club</div>
        <div className='w-full h-auto flex flex-col relative justify-center items-center p-5 sm:p-8 md:p-10 px-5 sm:px-10 md:px-15 lg:px-20 pb-5 border-t-[1px] border-solid border-[#434343] bg-white/6 rounded-t-[20px] sm:rounded-t-[30px] md:rounded-t-[40px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_61px_121px_38px_rgba(0,_0,_0,_0.04),_22px_43px_29px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(15px)] '>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-15 justify-center items-center'>
            <div className="flex flex-row justify-center md:justify-start items-center gap-2 md:gap-3">
              <img src="tcb.webp" alt="the CodeBreakers Club Logo" className="aspect-square h-12 sm:h-14 md:h-10 lg:h-15"/>
              <div className="font-['Montserrat'] font-bold text-xl sm:text-2xl md:text-xl lg:text-3xl leading-[1] text-center md:text-left"><span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Breaking codes,</span><br /><span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Creating minds.</span></div>
            </div>
            <div className='hidden md:flex justify-center items-center'>
              <img src="tcb-characters.webp" alt="" className='h-auto w-48 sm:w-60 md:w-40 lg:w-70'/>
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-start lg:justify-center items-center md:items-start gap-8 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-18'>
              <div className='flex flex-col gap-2 md:gap-2.5 lg:gap-3 justify-start items-center md:items-start'>
                <div className='font-["Oxanium"] font-bold text-xl sm:text-2xl md:text-lg lg:text-2xl text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>Explore</div>
                <ul className='text-sm md:text-xs lg:text-base text-center md:text-left space-y-2 md:space-y-1.5 lg:space-y-2'>
                  <li className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"><Link href="/">Home</Link></li>
                  <li className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"><Link href="/about">About</Link></li>
                  <li className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"><Link href="/achievements">Achievements</Link></li>
                  <li className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"><Link href="/events">Events</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2 md:gap-2.5 lg:gap-3 justify-start items-center md:items-start'>
                <div className='font-["Oxanium"] font-bold text-xl sm:text-2xl md:text-lg lg:text-2xl text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>Follow Us</div>
                <ul className='flex flex-col gap-2 sm:gap-2.5'>
                  <li><Link href="https://www.instagram.com/thecodebreakers/" target="_blank" rel="noopener noreferrer"><ButtonFooter image="instagramFooter.svg" text="@thecodebreakers" /></Link></li>
                  <li><Link href="https://www.linkedin.com/company/thecodebreakers-rcoem/" target="_blank" rel="noopener noreferrer"><ButtonFooter image="LinkedInFooter.svg" text="@thecodebreakers" /></Link></li>
                  <li><Link href="https://x.com/CodebreakersRBU" target="_blank" rel="noopener noreferrer"><ButtonFooter image="xFooter.svg" text="@CodebreakersRBU" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full text-center pt-6 text-xs sm:text-sm md:text-base font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#ffffff_0%,_#999999_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>© 2025 TheCodeBreakers All rights reserved.</div>
        </div>
    </footer>
  )
}

export default Footer
