"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/teamData.json";

function TeamMemberCard({ member }) {
  return (
    <div className="m-auto flex gap-1 justify-center items-center relative p-1 rounded-[1.25rem] lg:w-[262px] lg:h-[390px] max-lg:w-[220px] max-lg:h-[340px] flex-shrink-0 font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[1.25rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[1.25rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[1.25rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
        <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
      </div>
      <div className="rounded-[1.25rem] overflow-hidden relative lg:p-6 max-lg:p-4 z-4 w-full h-full flex flex-col items-center justify-center">
        {/* Profile Image */}
        <div className="backdrop-blur-[7.5px] backdrop-filter overflow-hidden rounded-full lg:w-[141px] lg:h-[141px] max-lg:w-[110px] max-lg:h-[110px] relative lg:mb-6 max-lg:mb-4">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name and Role */}
        <div className="flex flex-col lg:gap-2 max-lg:gap-1.5 text-center lg:mb-6 max-lg:mb-4">
          <h3 className="text-white lg:text-[24px] max-lg:text-[20px] font-medium m-0 leading-normal">
            {member.name}
          </h3>
          <p className="text-[#cfcfcf] lg:text-[13px] max-lg:text-[11px] font-normal m-0 leading-[1.4]">
            {member.role}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center lg:gap-5 max-lg:gap-3">
          <Link href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
            <Image src="/github.svg" alt="GitHub" width={20} height={20} className="lg:w-5 lg:h-5 max-lg:w-4 max-lg:h-4" />
          </Link>
          <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="lg:w-5 lg:h-5 max-lg:w-4 max-lg:h-4" />
          </Link>
          <Link href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
            <Image src="/instagram.svg" alt="Instagram" width={20} height={20} className="lg:w-5 lg:h-5 max-lg:w-4 max-lg:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TeamCategoryCard({ title }) {
  return (
    <div className="m-auto flex gap-1 justify-center items-center relative p-1 rounded-[1.25rem] lg:w-[262px] lg:h-[390px] max-lg:w-[220px] max-lg:h-[340px] flex-shrink-0 font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[1.25rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[1.25rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[1.25rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
        <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
      </div>
      <div className="rounded-[1.25rem] overflow-hidden relative lg:p-6 max-lg:p-4 z-4 w-full h-full flex items-center justify-center">
        <p className="font-['Oxanium'] font-bold lg:text-3xl max-lg:text-2xl text-center leading-normal px-4 text-transparent bg-[linear-gradient(180deg,#FFF_0%,#999_100%)] bg-clip-text">
          {title}
        </p>
      </div>
    </div>
  );
}


export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden text-white">
        {/* Layered Gradient Background */}
        <div className="absolute inset-0">
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#073445] via-black to-black opacity-40" />
          
          {/* Cyan glow top left */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#41bfb7] rounded-full blur-[120px] opacity-12" />
          
          {/* Teal glow top right */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#15e7e1] rounded-full blur-[120px] opacity-10" />
          
          {/* Bottom left accent */}
          <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-[#41bfb7] rounded-full blur-[140px] opacity-8" />
          
          {/* Bottom right accent */}
          <div className="absolute -bottom-20 -right-40 w-[500px] h-[500px] bg-[#073445] rounded-full blur-[140px] opacity-18" />
          
          {/* Center accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#073445] rounded-full blur-[150px] opacity-28" />
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(65,191,183,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(65,191,183,0.18)_1px,transparent_1px)] bg-[size:100px_100px]" />
          </div>
          
          {/* Diagonal accent lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_48%,rgba(65,191,183,0.3)_49%,rgba(65,191,183,0.3)_51%,transparent_52%)] bg-[size:300px_300px]" />
          </div>
          
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 text-center flex flex-col items-center lg:py-24 max-lg:py-16 px-4 sm:px-8 gap-6 w-full max-w-screen-xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-['Oxanium'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-[linear-gradient(60deg,_#02232A,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#02232A)] bg-clip-text text-transparent">
            Our Team
          </h1>

          {/* Description */}
          <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_100%)] bg-clip-text leading-relaxed">
            Passionate individuals united by innovation, dedication, and a shared vision to break codes and create minds.
          </p>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,_transparent_0%,_#000000_100%)]" />
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="bg-black lg:py-20 max-lg:py-12 lg:pl-12 max-lg:pl-4 pr-0">
        <h2 className="font-['Oxanium'] lg:text-5xl max-lg:text-2xl font-bold lg:mb-10 max-lg:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#999] lg:px-8 max-lg:px-0">
          Our Team
        </h2>

        {/* Core Team */}
        <div className="flex lg:gap-4 max-lg:gap-3 lg:mb-[70px] max-lg:mb-12 overflow-x-auto pb-4 no-scrollbar lg:px-8 max-lg:px-0">
          <TeamCategoryCard title="Core Team" />
          {data.coreTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* Tech Team */}
        <div className="flex lg:gap-4 max-lg:gap-3 lg:mb-[70px] max-lg:mb-12 overflow-x-auto pb-4 no-scrollbar lg:px-8 max-lg:px-0">
          <TeamCategoryCard title="Tech Team" />
          {data.techTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* Socials Team */}
        <div className="flex lg:gap-4 max-lg:gap-3 overflow-x-auto pb-4 no-scrollbar lg:px-8 max-lg:px-0">
          <TeamCategoryCard title="Graphic, Publicity & Social Media Team" />
          {data.socialsTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
