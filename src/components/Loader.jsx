"use client";
import React, { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setFadeOut(true);
                        setTimeout(() => {
                            onComplete();
                        }, 600);
                    }, 400);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(7,52,69,0.15)_0%,_transparent_70%)]" />
            
            {/* Loader container */}
            <div className="relative flex flex-col items-center gap-12 z-10">
                {/* Logo with elegant animation */}
                <div className="relative">
                    <h1 className="font-['Oxanium'] text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-[linear-gradient(135deg,_#41bfb7,_#15e7e1,_#41bfb7)] bg-clip-text">
                        TheCodeBreakers
                    </h1>
                    {/* Underline animation */}
                    <div className="absolute -bottom-2 left-0 h-[2px] bg-[linear-gradient(90deg,_transparent,_#41bfb7,_transparent)] loaderUnderline"></div>
                </div>

                {/* Minimal spinner bars */}
                <div className="flex gap-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="w-1.5 h-12 bg-[linear-gradient(180deg,_#073445,_#41bfb7)] rounded-full loaderBar"
                            style={{
                                animationDelay: `${i * 0.15}s`,
                                opacity: 0.6
                            }}
                        />
                    ))}
                </div>

                {/* Clean progress indicator */}
                <div className="flex flex-col items-center gap-3 min-w-[280px]">
                    {/* Progress bar */}
                    <div className="relative w-full h-[3px] bg-[rgba(65,191,183,0.1)] rounded-full overflow-hidden">
                        <div 
                            className="absolute inset-y-0 left-0 bg-[linear-gradient(90deg,_#41bfb7,_#15e7e1)] rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent,_rgba(255,255,255,0.4),_transparent)] loaderShimmer"></div>
                        </div>
                    </div>
                    
                    {/* Progress text */}
                    <p className="font-['Montserrat'] text-xs font-medium text-[#41bfb7] tracking-widest">
                        LOADING {progress}%
                    </p>
                </div>
            </div>
        </div>
    );
}
