"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import data from "@/data/achievementsData.json"

const achievementsData = data.achievements
const placementData = data.placements
const hackathonsData = data.hackathons

const AchievementCard = ({ imageUrl, gridClass }) => {
  return (
    <div className={`${gridClass} relative w-full h-full`}>
      <div className="absolute top-[0px] left-[0px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[20px] max-sm:rounded-[10px] overflow-hidden z-[5]">
        <Image src={imageUrl} alt="Achievement" fill className="object-cover block" />
      </div>
    </div>
  )
}

const PlacementCard = ({ data }) => {
  return (
    <div className="m-auto flex gap-1 justify-center items-center relative p-1 max-sm:p-[2.5px] rounded-[2.5rem] max-sm:rounded-[1.5rem] w-fit font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[2.5rem] max-sm:rounded-[1.5rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[2.5rem] max-sm:rounded-[1.5rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[2.5rem] max-sm:rounded-[1.5rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-x-[40%] -bottom-10 w-60 max-sm:w-32 h-25 max-sm:h-16 bg-[rgba(52,148,145,0.70)] blur-[100px] max-sm:blur-[70px] z-3" />
        <div className="absolute translate-x-[30%] -top-10 right-0 w-60 max-sm:w-32 h-25 max-sm:h-16 bg-[rgba(52,148,145,0.70)] blur-[100px] max-sm:blur-[70px] z-3" />
      </div>
      <div className="rounded-[2.5rem] max-sm:rounded-[1.4rem] overflow-hidden relative p-2 max-sm:p-1.5 z-4 w-full h-full flex flex-col">
        <div className="backdrop-blur-[7.5px] backdrop-filter overflow-hidden rounded-[2.5rem] max-sm:rounded-[1.25rem] w-[100%] aspect-square relative mb-4 max-sm:mb-3">
          <Image src={data.imageUrl} alt={data.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-2.5 p-5 max-sm:px-3 max-sm:py-0">
          <div className="flex flex-col gap-2 max-sm:gap-1 max-sm:text-center">
            <h3 className={`text-white text-[24px] max-sm:text-[14px] font-semibold m-0 leading-tight`}>{data.name}</h3>
            <p className={`text-[#ebebeb] text-[14px] max-sm:text-[10px] font-normal m-0 leading-[1.5] max-sm:line-clamp-2 opacity-90`}>{data.role}</p>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2.5">
            <div className="flex items-center gap-2 max-sm:gap-2">
              <Link href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/github.svg" alt="GitHub" width={21} height={21} className="w-[21px] h-[21px] max-sm:w-[18px] max-sm:h-[18px] cursor-pointer" />
              </Link>
              <Link href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/linkedin.svg" alt="LinkedIn" width={21} height={21} className="w-[21px] h-[21px] max-sm:w-[18px] max-sm:h-[18px] cursor-pointer" />
              </Link>
            </div>
            <div className="flex gap-1 justify-center items-center relative py-2.5 px-4.5 max-sm:py-1.5 max-sm:px-3 rounded-full w-fit">
              <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"></div>
              <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-black"></div>
              <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
              <p className="font-['Montserrat'] text-sm max-sm:text-[9px] font-semibold text-white z-4 whitespace-nowrap">Accenture - 12 LPA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HackathonCard = ({ data, onViewMore }) => {
  return (
    <div className="m-auto flex gap-1 justify-center items-center relative p-1 max-sm:p-[2.5px] rounded-[2.5rem] max-sm:rounded-[1.5rem] w-fit font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[2.5rem] max-sm:rounded-[1.5rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[2.5rem] max-sm:rounded-[1.5rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[2.5rem] max-sm:rounded-[1.5rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-x-[40%] -bottom-10 w-60 max-sm:w-32 h-25 max-sm:h-16 bg-[rgba(52,148,145,0.70)] blur-[100px] max-sm:blur-[70px] z-3" />
        <div className="absolute translate-x-[30%] -top-10 right-0 w-60 max-sm:w-32 h-25 max-sm:h-16 bg-[rgba(52,148,145,0.70)] blur-[100px] max-sm:blur-[70px] z-3" />
      </div>
      <div className="rounded-[2.5rem] max-sm:rounded-[1.4rem] overflow-hidden relative p-2 max-sm:p-1.5 z-4 w-full h-full flex flex-col">
        <div className="backdrop-blur-[7.5px] backdrop-filter overflow-hidden rounded-[2.5rem] max-sm:rounded-[1.25rem] w-[100%] aspect-square relative mb-4 max-sm:mb-3">
          <Image src={data.imageUrl} alt={data.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-2.5 p-5 max-sm:px-3 max-sm:py-0 max-sm:pb-2.5">
          <div className="flex flex-col gap-2 max-sm:gap-1 max-sm:text-center">
            <h3 className={`text-white text-[24px] max-sm:text-[14px] font-semibold m-0 leading-tight`}>{data.name}</h3>
            <p className={`text-[#ebebeb] text-[14px] max-sm:text-[10px] font-normal m-0 leading-[1.5] max-sm:line-clamp-2 opacity-90`}>{data.role}</p>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2.5">
            <div className="flex items-center gap-2 max-sm:gap-2">
              <Link href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/github.svg" alt="GitHub" width={21} height={21} className="w-[21px] h-[21px] max-sm:w-[18px] max-sm:h-[18px] cursor-pointer" />
              </Link>
              <Link href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/linkedin.svg" alt="LinkedIn" width={21} height={21} className="w-[21px] h-[21px] max-sm:w-[18px] max-sm:h-[18px] cursor-pointer" />
              </Link>
            </div>
            <button onClick={() => onViewMore(data)} className="flex gap-1 justify-center items-center relative py-2.5 px-4.5 max-sm:py-1.5 max-sm:px-3 rounded-full w-fit hover:scale-102 transition-transform duration-200 cursor-pointer">
              <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"></div>
              <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-black"></div>
              <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
              <p className="font-['Montserrat'] text-sm max-sm:text-[9px] font-semibold text-white z-4">View More +</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const AchievementsPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleViewMore = (data) => {
    setSelectedCard(data)
  }

  const handleClose = () => {
    setSelectedCard(null)
  }

  return (
    <div className={`font-['montserrat'] flex flex-col w-full bg-[#030505] antialiased`}>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden text-white">
        {/* Layered Gradient Background - Variation 1 */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#073445] via-black to-[#041a21] opacity-50" />
          
          {/* Center spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#41bfb7] rounded-full blur-[180px] opacity-10" />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#15e7e1] rounded-full blur-[100px] opacity-8" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#073445] rounded-full blur-[120px] opacity-22" />
          
          {/* Radial grid */}
          <div className="absolute inset-0 opacity-12">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(65,191,183,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(65,191,183,0.2)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]" />
          </div>
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)]" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 text-center flex flex-col items-center lg:py-24 max-lg:py-16 px-4 sm:px-8 gap-6 w-full max-w-screen-xl mx-auto">
          <h1 className="font-['Oxanium'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-[linear-gradient(60deg,_#02232A,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#02232A)] bg-clip-text text-transparent">
            Achievements & Success Stories
          </h1>
          <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_100%)] bg-clip-text leading-relaxed">
            Celebrating the wins of TheCodeBreakers community.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,_transparent_0%,_#000000_100%)]" />
      </section>

      {/* OLD Desktop Header - COMMENTED OUT */}
      {/* <section className="w-full hidden lg:block">
        <div className="w-full py-[40px] px-[20px] flex justify-center">
          <div className="grid grid-flow-col grid-cols-9 auto-rows-[60.188px] auto-cols-[120.102px] gap-[20px] mx-auto max-w-[1560px] w-full relative">
            <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-4 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-5 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-6 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-7 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-8 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-9 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>

            <AchievementCard imageUrl={achievementsData[0].imageUrl} gridClass="col-start-1 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[1].imageUrl} gridClass="col-start-2 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[2].imageUrl} gridClass="col-start-3 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[3].imageUrl} gridClass="col-start-4 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[4].imageUrl} gridClass="col-start-5 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[5].imageUrl} gridClass="col-start-6 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[6].imageUrl} gridClass="col-start-7 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[7].imageUrl} gridClass="col-start-8 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[8].imageUrl} gridClass="col-start-9 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[9].imageUrl} gridClass="col-start-1 col-span-1 row-start-6 row-span-3" />
            <AchievementCard imageUrl={achievementsData[10].imageUrl} gridClass="col-start-2 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[11].imageUrl} gridClass="col-start-8 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[12].imageUrl} gridClass="col-start-9 col-span-1 row-start-6 row-span-3" />

            <div className="col-start-4 col-span-3 row-start-6 row-span-2 text-white text-center flex flex-col justify-center items-center z-[10] pointer-events-none">
              <h1 className={`font-['oxanium'] m-0 leading-[1.2] text-[3.2rem] font-bold whitespace-nowrap bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#999_100%)]`}>Achievements & Success Stories</h1>
              <p className={`font-['montserrat'] text-[1.2rem] opacity-80 text-center justify-center items-center whitespace-nowrap font-extrabold bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#999_100%)]`}>
                Celebrating the wins of TheCodeBreakers community.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* OLD Mobile/Tablet Header - COMMENTED OUT */}
      {/*
      <section className="w-full lg:hidden pt-24 sm:pt-28 pb-6 sm:pb-10 px-5">
        <div className="max-w-[500px] mx-auto text-center">
          <h1 className={`font-['oxanium'] text-[1.5rem] sm:text-[2.25rem] font-bold mb-2 leading-[1.2] bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#999_100%)]`}>
            Achievements & Success Stories
          </h1>
          <p className={`font-['montserrat'] text-[0.75rem] sm:text-base text-white/70 font-medium`}>
            Celebrating the wins of TheCodeBreakers community.
          </p>
        </div>
      </section> */}

      {/* Placements Section */}
      <section className="w-full pt-[20px] sm:pt-[40px] lg:pt-[50px] pb-[30px] sm:pb-[70px] lg:pb-[100px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-[25px]">
          <h1 className={`font-['oxanium'] text-white text-[1.375rem] sm:text-3xl lg:text-[3rem] mb-5 sm:mb-[40px] lg:mb-[50px] text-center sm:text-left font-bold`}>Placements & Offers</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
            {placementData.map((data) => (
              <PlacementCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section className="w-full pt-[20px] sm:pt-[40px] lg:pt-[50px] pb-[30px] sm:pb-[70px] lg:pb-[100px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-[25px]">
          <h1 className={`font-['oxanium'] text-white text-[1.375rem] sm:text-3xl lg:text-[3rem] mb-5 sm:mb-[40px] lg:mb-[50px] text-center sm:text-left font-bold`}>Hackathons & Internships</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
            {hackathonsData.map((data) => (
              <HackathonCard key={data.id} data={data} onViewMore={handleViewMore} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/80 p-3 sm:p-4">
          <div className="relative w-full max-w-[95vw] sm:max-w-[780px]">
            <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[1.5rem] sm:rounded-[2.5rem] placementCardBorder"></div>
            <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[1.5rem] sm:rounded-[2.5rem] m-[1.2px] bg-black"></div>
            <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[1.5rem] sm:rounded-[2.5rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
              <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
              <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
            </div>
            <div className="relative z-4 rounded-[1.5rem] sm:rounded-[2.5rem] p-3 sm:p-6 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-56 md:w-64 aspect-square rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden flex-shrink-0 mx-auto sm:mx-0 relative backdrop-blur-[7.5px] max-sm:max-w-[180px]">
                <Image src={selectedCard.imageUrl} alt={selectedCard.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col flex-1 min-h-0 text-white">
                <h3 className="text-base sm:text-2xl font-semibold mb-2 sm:mb-4 line-clamp-1 max-sm:text-center">{selectedCard.name}</h3>
                <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-5 space-y-1 sm:space-y-2 text-xs sm:text-lg text-[#ebebeb] flex-1 overflow-y-auto">
                  {selectedCard.achievements?.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-row justify-between items-center mt-auto border-t border-white/10 pt-3 sm:pt-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Link href={selectedCard.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Image src="/github.svg" alt="GitHub" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                    </Link>
                    <Link href={selectedCard.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                    </Link>
                  </div>
                  <div className="flex gap-1 justify-center items-center relative py-1.5 px-3 sm:py-2 sm:px-4 rounded-3xl w-fit">
                    <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonBorder"></div>
                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-3xl m-[1.2px] bg-black"></div>
                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                    <p className="font-['Montserrat'] text-[10px] sm:text-sm font-semibold text-white z-4 whitespace-nowrap">{selectedCard.company}</p>
                  </div>
                </div>
              </div>
              <button onClick={handleClose} className="absolute top-2 right-2 sm:top-5 sm:right-5 text-white text-lg sm:text-2xl hover:opacity-70 transition-opacity duration-200 bg-black/50 rounded-full w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center z-[100] backdrop-blur-sm border border-white/20">
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AchievementsPage