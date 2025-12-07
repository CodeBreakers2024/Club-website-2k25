"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Capsule from "@/components/home/Capsule";
import Bento from "@/components/home/Bento";
import Carousel from "@/components/home/Carousel";
import LiquidEther from "@/components/home/LiquidEther";

const icons = [
    { src: "/icons/react.svg", x: -450, y: 50, mobileX: -130, mobileY: -140, showOnMobile: true },
    { src: "/icons/java.svg", x: 550, y: -120, mobileX: 130, mobileY: -140, showOnMobile: true },
    { src: "/icons/nodejs.svg", x: -300, y: 250, mobileX: -130, mobileY: 180, showOnMobile: true },
    { src: "/icons/figma.svg", x: 650, y: 250, mobileX: 130, mobileY: 180, showOnMobile: true },
    { src: "/icons/rust.svg", x: -100, y: -100, mobileX: 0, mobileY: 0, showOnMobile: false },
    { src: "/icons/python.svg", x: 350, y: 250, mobileX: 0, mobileY: 0, showOnMobile: false },
];

export default function HomePage() {
    const [activeTab, setActiveTab] = useState("tech");
    const iconRefs = useRef([]);
    const floatTimelinesRef = useRef([]);

    // Memoize scroll handler
    const handleExploreClick = useCallback(() => {
        document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        iconRefs.current.forEach((el, i) => {
            if (!el) return;

            // Skip animation for mobile-hidden icons
            if (isMobile && !icons[i].showOnMobile) {
                gsap.set(el, { opacity: 0, scale: 0 });
                return;
            }

            const targetX = isMobile ? icons[i].mobileX : icons[i].x;
            const targetY = isMobile ? icons[i].mobileY : icons[i].y;

            // Snap quickly from center to final position
            gsap.set(el, { x: 0, y: 0, opacity: 0, scale: 0 });
            gsap.to(el, {
                x: targetX,
                y: targetY,
                opacity: 1,
                scale: 1,
                delay: i * 0.1,
                duration: 0.8,
                ease: "back.out(1.7)",
            });

            // Subtle random floating around final position
            const float = () => {
                const tl = gsap.to(el, {
                    x: targetX + gsap.utils.random(-15, 15),
                    y: targetY + gsap.utils.random(-15, 15),
                    rotation: gsap.utils.random(-8, 8),
                    duration: 1 + Math.random() * 0.5,
                    ease: "sine.inOut",
                    onComplete: float,
                });
                floatTimelinesRef.current.push(tl);
            };
            float();

            // Hover effects (desktop only) with cleanup
            if (!isMobile) {
                const handleMouseEnter = () => {
                    gsap.to(el, { scale: 1.1, duration: 0.3, ease: "power2.out" });
                };
                const handleMouseLeave = () => {
                    gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
                };
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    el.removeEventListener("mouseenter", handleMouseEnter);
                    el.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        });

        // Cleanup all animations on unmount
        return () => {
            floatTimelinesRef.current.forEach(tl => tl?.kill());
            floatTimelinesRef.current = [];
        };
    }, []);

    // Memoize LiquidEther config with mobile optimizations
    const liquidEtherConfig = useMemo(() => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const isLowEnd = typeof navigator !== 'undefined' &&
            (navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4);

        return {
            colors: ['#073445', '#41bfb7', '#073445'],
            mouseForce: isMobile ? 15 : 20,
            cursorSize: isMobile ? 80 : 100,
            isViscous: true,
            viscous: isMobile ? 20 : 30,
            iterationsViscous: isMobile ? 16 : 32,
            iterationsPoisson: isMobile ? 16 : 32,
            resolution: isMobile || isLowEnd ? 0.35 : 0.5,
            isBounce: true,
            autoDemo: true,
            autoSpeed: 0.3,
            autoIntensity: isMobile ? 2 : 3,
            takeoverDuration: 1,
            autoResumeDelay: 1000,
            autoRampDuration: 0.6,
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <main
                className="relative flex items-center justify-center min-h-screen h-screen bg-black overflow-hidden text-white bg-cover"
            >
                {/* Floating Tech Icons */}
                <div className="absolute w-full h-full flex items-center justify-center z-9">
                    {icons.map((icon, i) => (
                        <div
                            key={icon.src}
                            ref={(el) => (iconRefs.current[i] = el)}
                            className="absolute cursor-pointer hidden md:block"
                        >
                            <Image
                                src={icon.src}
                                alt={`${icon.src.split('/').pop().split('.')[0]} icon`}
                                width={300}
                                height={300}
                                className="drop-shadow-lg select-none w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-[300px] xl:h-[300px] opacity-60 sm:opacity-65 md:opacity-70 lg:opacity-80"
                                draggable="false"
                                loading="eager"
                                priority={i < 2}
                            />
                        </div>
                    ))}
                </div>

                {/* Hero Text */}
                <div className="text-center flex flex-col items-center z-10 px-4 sm:px-8 md:px-6 gap-4 sm:gap-5 md:gap-6 w-full max-w-screen-xl mx-auto">
                    <h1
                        className={`font-['Oxanium'] text-[1.75rem] leading-[1.15] xs:text-[2rem] sm:text-[2.5rem] md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-[linear-gradient(60deg,_#02232A,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#02232A)] bg-clip-text text-transparent whitespace-nowrap`}
                    >
                        The Codebreakers Club
                    </h1>
                    <p
                        className={`font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_70%)] bg-clip-text px-2 sm:px-0`}
                    >
                        Breaking Codes, Creating Minds
                    </p>
                    <button
                        onClick={handleExploreClick}
                        className="flex gap-1 justify-center items-center relative py-2.5 px-4.5 lg:py-2.5 lg:px-4.5 rounded-3xl w-fit hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer touch-manipulation min-h-[44px]"
                        aria-label="Explore more about The Codebreakers Club"
                    >
                        <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonBorder"></div>
                        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-3xl m-[1.2px] bg-black"></div>
                        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                        <p className="font-['Montserrat'] text-sm font-semibold text-white z-4">Explore Now</p>
                    </button>
                </div>
                <div className="absolute w-full h-full flex items-center justify-center">
                    <LiquidEther {...liquidEtherConfig} />
                </div>
            </main>

            {/* Who We Are Section */}
            <div id="who-we-are" className="lg:py-20 max-lg:py-12 bg-black max-lg:px-4">
                <h1
                    className={`font-['Oxanium'] lg:text-5xl max-lg:text-3xl font-bold lg:mb-10 max-lg:mb-6 text-center text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_70%)] bg-clip-text`}
                >
                    Who We Are
                </h1>

                <div className="m-auto flex gap-1 justify-center items-center relative py-2.5 px-4.5 lg:rounded-[3rem] max-lg:rounded-[2rem] lg:w-fit max-lg:w-full">
                    <div className="absolute left-0 right-0 top-0 bottom-0 z-1 lg:rounded-[3rem] max-lg:rounded-[2rem] divBorder"></div>
                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 lg:rounded-[3rem] max-lg:rounded-[2rem] m-[1.2px] bg-black"></div>
                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 lg:rounded-[3rem] max-lg:rounded-[2rem] m-[1.2px] overflow-hidden bg-[#0000000d] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]">
                        <div className="absolute -translate-x-70 -top-20 w-160 h-60 bg-[rgba(68,164,161,0.60)] blur-[150px] z-3 max-lg:hidden" />
                        <div className="absolute right-0 translate-x-50 -bottom-40 w-160 h-60 bg-[rgba(68,164,161,0.60)] blur-[150px] z-3 max-lg:hidden" />
                    </div>
                    <div className="mx-auto max-w-6xl lg:rounded-[3rem] max-lg:rounded-[2rem] flex max-md:flex-col-reverse md:flex-row items-center lg:p-12 max-lg:p-6 lg:gap-8 max-lg:gap-6 z-4">
                        <div className="flex-1 flex flex-col max-lg:items-center lg:items-start">
                            <p
                                className={`font-['Montserrat'] lg:text-xl max-lg:text-base font-bold mb-6 text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_#999_95%)] max-lg:text-center`}
                            >
                                The CodeBreakers is a passionate student community empowering members
                                across all backgrounds to discover, learn, and shine in tech and
                                creative fields. Whether you’re into coding, design, content, or
                                event planning, you’ll find your place—and your people—right here.
                            </p>
                            <Link href="/team">
                                <button className="flex gap-1 justify-center items-center relative py-2.5 px-4.5 rounded-3xl w-fit hover:scale-105 transition-transform duration-200">
                                    <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonBorder"></div>
                                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-3xl m-[1.2px] bg-black"></div>
                                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                                    <p className="font-['Montserrat'] text-sm font-semibold text-white z-4">Our Team →</p>
                                </button>
                            </Link>
                        </div>

                        <div className="flex-1 flex justify-end max-md:justify-center">
                            <div className="lg:h-74 lg:w-auto rounded-3xl overflow-hidden">
                                <Image
                                    src="/IMG_6635.jpg"
                                    alt="The Codebreakers Club team photo"
                                    width={296}
                                    height={296}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 296px"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Domains Section */}
            <div className="lg:py-20 max-lg:py-12 bg-black text-[#C1C1C1] text-center max-lg:px-4">
                <h1
                    className={`font-['Oxanium'] lg:text-5xl max-lg:text-2xl font-bold lg:mb-4 max-lg:mb-4 text-center text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_70%)] bg-clip-text px-2`}
                >
                    Explore Domains at TheCodeBreakers
                </h1>
                <p
                    className={`font-['Montserrat'] lg:text-xl max-lg:text-sm lg:w-[700px] max-lg:max-w-full mx-auto font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_90%)] px-2 max-lg:mb-2`}
                >
                    A vibrant space for every passion—whether you&apos;re a coder, designer,
                    writer, or event wizard.
                </p>

                <Capsule activeTab={activeTab} setActiveTab={setActiveTab} />

                <Bento
                    key={activeTab}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="21, 231, 225"
                    activeTab={activeTab}
                />
            </div>

            {/* Moments Section */}
            <div className="lg:py-20 max-lg:py-12 bg-black text-[#C1C1C1] text-center max-lg:px-4">
                <h1
                    className={`font-['Oxanium'] lg:text-5xl max-lg:text-3xl font-bold lg:mb-4 max-lg:mb-6 text-center text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_70%)] bg-clip-text`}
                >
                    Moments at TheCodeBreakers
                </h1>
                <Carousel />
            </div>
        </>
    );
}
