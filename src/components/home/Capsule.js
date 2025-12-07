'use client'

import { motion } from 'framer-motion'

export default function Capsule({activeTab, setActiveTab}) {

  return(
    <div className="flex justify-center lg:mb-6 max-lg:mb-4 lg:mt-8 max-lg:mt-4">
                    <div className="relative flex bg-[rgba(91,91,91,0.06)] rounded-full p-1 border-2 border-white/25 overflow-hidden shadow-[10px_10px_40px_10px_rgba(255,255,255,0.07)_inset,0_10px_40px_2px_rgba(0,0,0,0.07)]">
                        <button
                            onClick={() => setActiveTab("tech")}
                            className={`relative lg:px-7 max-lg:px-5 lg:py-2 max-lg:py-1.5 rounded-full transition-all max-lg:touch-manipulation max-lg:min-h-[40px] lg:text-base max-lg:text-sm ${activeTab === "tech"
                                ? "text-white font-semibold transition-transform duration-200"
                                : "text-white hover:text-gray-300 "
                                }`}
                        >
                            {activeTab === "tech" && (
                                <>
                                    <motion.div 
                                        layoutId="buttonBorder"
                                        className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                    <motion.div 
                                        layoutId="buttonBg"
                                        className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-black"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                    <motion.div 
                                        layoutId="buttonGradient"
                                        className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                </>
                            )}
                            <span className="relative z-4">Tech</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("nontech")}
                            className={`relative lg:px-7 max-lg:px-5 lg:py-2 max-lg:py-1.5 rounded-full transition-all max-lg:touch-manipulation max-lg:min-h-[40px] lg:text-base max-lg:text-sm ${activeTab === "nontech"
                                ? "text-white font-semibold transition-transform duration-200"
                                : "text-white hover:text-gray-300"
                                }`}
                        >
                            {activeTab === "nontech" && (
                                <>
                                    <motion.div 
                                        layoutId="buttonBorder"
                                        className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                    <motion.div 
                                        layoutId="buttonBg"
                                        className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-black"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                    <motion.div 
                                        layoutId="buttonGradient"
                                        className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                </>
                            )}
                            <span className="relative z-4">Non Tech</span>
                        </button>
                    </div>
                </div>

  )
}