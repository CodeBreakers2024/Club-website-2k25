import Image from "next/image";
import React from "react";

// Data object for all bento cards
const bentoData = {
    tech: [
        [
            {
                title: "Web Development",
                description: "Bring your ideas to life by building modern web apps and Master the tools real developers use. Build fast, responsive sites and apps with React, Next.js, and Tailwind CSS.",
                image: "/bento/webdev.svg",
                glow: "top-[-55%] left-[-50%]",
                borderGradient: "bg-[linear-gradient(135deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            },
            {
                title: "Competitive Programming",
                description: "Enhances coding skills through hands-on problems and timed contests .Each challenge builds sharper logic, smarter code, and stronger problem-solving ability.",
                glow: "top-[-60%] right-[-80%]",
                borderGradient: "bg-[linear-gradient(225deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            }
        ],
        [
            {
                title: "Machine Learning",
                description: "Dive into the world of intelligent systems with hands-on projects. Use Python and TensorFlow to explore data, build models, and see how machines learn from experience.",
                glow: "bottom-[-60%] left-[-90%]",
                borderGradient: "bg-[linear-gradient(45deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            },
            {
                title: "Blockchain",
                description: "Discover how blockchain powers cryptocurrencies, decentralized apps, and smart contracts . Emphasizes its role in creating trust and security across online networks.",
                image: "/bento/blockchain.svg",
                glow: "bottom-[-55%] right-[-50%]",
                borderGradient: "bg-[linear-gradient(315deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            }
        ]
    ],
    nontech: [
        [
            {
                title: "Content Writing",
                description: "We craft words that give voice to creativity and transform thoughts into impactful content that engages readers and builds connections.",
                glow: "top-[-60%] left-[-80%]",
                borderGradient: "bg-[linear-gradient(135deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            },
            {
                title: "Event Management",
                description: "Be the creative force behind the magic! Plan, organize, and execute events that bring energy, creativity, and excitement to the club from brainstorming to the big day.",
                image: "/bento/events.svg",
                glow: "top-[-55%] right-[-50%]",
                borderGradient: "bg-[linear-gradient(225deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            }
        ],
        [
            {
                title: "Graphic Designing",
                description: "Design what language can’t articulate.Create visuals that highlight ideas and create a lasting impression by combining colors, concepts, and creativity.",
                image: "/bento/graphics.svg",
                glow: "bottom-[-55%] left-[-50%]",
                borderGradient: "bg-[linear-gradient(45deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            },
            {
                title: "PR & Marketing",
                description: "Spread the word, build the vibe. It shape how people see and experience our club through creative  and strong communication.",
                glow: "bottom-[-60%] right-[-100%]",
                borderGradient: "bg-[linear-gradient(315deg,rgba(0,0,0,0.06)_0%,rgb(34,34,34)_70%,#848484b9_98%)]"
            }
        ]
    ]
};

// Reusable BentoCard component - Memoized for performance
const BentoCard = React.memo(({ title, description, image, isLarge, glow, borderGradient }) => (
    <div className={`m-auto flex gap-1 justify-center items-center relative p-[1px] rounded-[20px] sm:rounded-[24px] w-full ${isLarge ? 'md:flex-[1.625]' : 'md:flex-1'}`}>
        <div className={`absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[20px] sm:rounded-[24px] ${borderGradient}`}></div>
        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[20px] sm:rounded-[24px] m-[1.2px] bg-black"></div>
    <div
        className={`bg-[rgba(0,0,0,0.06)] rounded-[20px] sm:rounded-[24px] z-3 text-white flex flex-col justify-start items-start overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 shadow-[28px_55px_35px_0_rgba(0,0,0,0.10),_80px_155px_50px_0_rgba(0,0,0,0.04),_0_5px_5px_0_rgba(0,0,0,0.25)] backdrop-blur-[14px] w-full min-h-[200px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] relative ${isLarge ? 'md:flex-[1.625]' : 'md:flex-1'}`}
    >
        <div className={`flex flex-col justify-start gap-2 sm:gap-3 h-full w-full p-5 sm:p-6 lg:p-7 z-10 ${image ? 'relative' : ''}`}>
            <h3 className={`font-["Montserrat"] text-start text-xl sm:text-2xl lg:text-3xl font-semibold z-10 leading-tight ${image ? 'relative' : ''}`}>
                {title}
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed text-start opacity-90 mt-1 sm:mt-2 lg:mt-3 ${image ? 'max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] relative z-10' : ''}`}>
                {description}
            </p>
            {image && (
                <Image 
                    src={image} 
                    alt={`${title} illustration`} 
                    className='absolute top-0 right-0 opacity-60 pointer-events-none z-10 w-32 h-auto sm:w-44 md:w-56 lg:w-[250px] hidden md:block' 
                    width={250} 
                    height={270}
                    loading="lazy"
                    sizes="(max-width: 768px) 0px, (max-width: 1024px) 224px, 250px"
                />
            )}
            <div className={`absolute ${glow} w-120 sm:w-140 lg:w-155 h-50 sm:h-60 lg:h-70 blur-[120px] sm:blur-[140px] lg:blur-[150px] bg-[rgba(68,164,161,0.60)] z-5`} />
        </div>
    </div>
    </div>
    
));

BentoCard.displayName = 'BentoCard';

const Bento = React.memo(({ activeTab }) => {
    const rows = bentoData[activeTab] || [];

    return (
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 select-none">
            <div className="w-full max-w-[1050px] flex flex-col gap-3 sm:gap-4">
                {rows.map((row, rowIndex) => (
                    <div 
                        key={rowIndex}
                        className="flex justify-center gap-3 sm:gap-4 md:flex-row flex-col w-full"
                    >
                        {row.map((card, cardIndex) => (
                            <BentoCard 
                                key={cardIndex}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                isLarge={card.image !== undefined}
                                glow={card.glow}
                                borderGradient={card.borderGradient}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
});

Bento.displayName = 'Bento';

export default Bento;