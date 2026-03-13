'use client'

import { Check } from 'lucide-react';
import React, { useState } from 'react'
const offersData = [
    {
        column: 1,
        items: [
            {
                title: "Private Yoga Sessions",
                value: "Private Yoga Session",
                img: "/offer/offer-1.png",
                height: "h-106 3xl:h-140",
                description:
                    "Experience a fully customized yoga practice designed to support you at any level. Whether you are seeking physical, mental and emotional balance, improved stress management, recovery from injury or illness, or a deeper exploration of your asana practice, each session is thoughtfully tailored to your unique needs. \n \nWith dedicated one-on-one attention, we will work together toward your specific goals through a personalized practice created just for you.",
                features: [
                    "Level of Difficulty: Designed to Individual needs.",
                    "Duration: 60-90 minutes",
                    "Mode: Online/in person.",
                ],
            },
            {
                title: "Yoga for Sportsperson & Artists",
                value: "Yoga for Sports & Artists",
                img: "/offer/offer-2.png",
                height: "h-106  3xl:h-140",
                description:
                    "Enhance your performance with a yoga program tailored specifically to your profession. Whether you are a football player, swimmer or athlete, this specialized practice is designed to support the physical demands of your field while cultivating balance between body and mind. \nThrough targeted strength, mobility, flexibility, and breathwork techniques, the program helps improve performance, increase focus, prevent injuries, and support faster recovery. At the same time, it addresses stress and performance-related anxiety.",
                features: [
                    "Level of Difficulty: Intermediate to advanced",
                    "Duration: 60-90 minutes",
                    "Mode: Online/in person.",
                ],
            },
        ],
    },
    {
        column: 2,
        items: [
            {
                title: "Family Yoga (Parents & Kids)",
                value: "Family Yoga",
                img: "/offer/offer-3.png",
                height: "h-[537px] 3xl:h-[630px]",
                description:
                    "Create meaningful moments of connection through a joyful and engaging family yoga practice designed for both parents and children. These sessions blend movement, breathwork, mindfulness, and playful activities to support physical health while strengthening family bonds. \n \nChildren develop coordination, focus, and emotional awareness, while parents benefit from stress relief, improved flexibility, and quality time shared with their little ones. Together, families learn simple tools for relaxation and communication that can be carried into everyday life.",
                features: [
                    "Level of Difficulty: Suitable for all",
                    "Duration: 60-90 minutes",
                    "Mode: Online/in person.",
                ],
            },
            {
                title: "Business/Corporate Yoga",
                value: "Corporate Yoga",
                img: "/offer/offer-4.png",
                height: "h-[418px]  3xl:h-[520px]",
                description:
                    "Bring the benefits of yoga and meditation directly to your workplace with convenient, stress-relieving sessions designed to support employee wellbeing. These classes help reduce tension, enhance focus, and cultivate a calmer, more balanced work environment. \nEach session can be customized to fit your team’s needs, goals, and schedule, making it easy to integrate wellness into the workday.",
                features: [
                    "Level of Difficulty: Beginner to intermediate",
                    "Duration: 30-60 minutes",
                    "Mode: Online/in person.",
                ],
            },
        ],
    },
    {
        column: 3,
        items: [
            {
                title: "Prenatal Yoga",
                value: "Prenatal Yoga",
                img: "/offer/offer-5.png",
                height: "h-[370px] md:h-[342px] 3xl:h-[420px] ",
                description:
                    "Support your body and mind through every stage of pregnancy with a nurturing, customized prenatal yoga practice. These sessions are designed to help you stay strong, mobile, and comfortable as your body changes, while also promoting emotional balance and stress relief. \nThrough gentle movement, breathwork, and relaxation techniques, you will ease common pregnancy discomforts, build stamina for labor, and cultivate a deeper connection with your baby. Each session offers personalized guidance and one-on-one attention, ensuring a safe and supportive practice tailored to your individual needs and stage of pregnancy.",
            },
            {
                title: "Postnatal Yoga",
                value: "Postnatal Yoga",
                img: "/offer/offer-6.png",
                height: "h-[370px] md:h-[342px]  3xl:h-[420px] ",
                description:
                    "Reconnect with your body and restore strength after birth through a carefully tailored postnatal yoga practice. These sessions focus on rebuilding core stability, improving posture, relieving tension, and supporting overall recovery. \n \nWhether you are easing back into movement, addressing specific physical concerns, or simply needing time to recharge, postnatal yoga provides a supportive space for healing and renewal. \nWith personalized attention and guidance, each session is adapted to your recovery journey, helping you regain confidence, balance, and energy at your own pace.",
            },
            {
                title: "Ayurvedic Cooking",
                value: "Ayurvedic Cooking",
                img: "/offer/offer-7.png",
                height: "h-[370px] md:h-[342px]  3xl:h-[420px] ",
                description:
                    "Discover the art of cooking according to Ayurvedic principles and learn how to prepare meals that balance the doshas and support your unique constitution. This approach to food goes beyond nutrition — it is a holistic practice that nourishes body, mind, and spirit. \n \nThrough mindful ingredient selection, proper food combinations, and seasonal awareness, you will learn how to enhance digestion, optimize metabolism, and cultivate clarity, vitality, and inner harmony. \nExperience how conscious cooking can become a daily ritual for greater balance.",
            },
        ],
    },
];

const Offers = () => {
    const [activeCard, setActiveCard] = useState(null);
    return (
        <div className='w-full bg-[#F4F1E6]' id="classes">
            <div className="max-width spacing py-16 3xl:py-26 flex flex-col">
                <h2 className="font-heading font-semibold text-3xl md:text-5xl 2xl:text-[52px] leading-8 mb-12">
                    What I offer.
                </h2>
                <div className="grid lg:grid-cols-[1fr_1.1fr_1.35fr] gap-6">
                    {offersData.map((col, i) => (
                        <div key={i} className="flex flex-col gap-8">
                            {col.items.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveCard(activeCard === `${i}-${index}` ? null : `${i}-${index}`)}
                                    className={`relative ${item.height} overflow-hidden group `}
                                >
                                    {/* Image — subtle scale on hover */}
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Overlay — slides up from bottom
                                        justify-start + pt so content starts at TOP of overlay
                                        pb-16 leaves blank space at bottom for the button */}
                                    <div
                                        className={`absolute inset-0 bg-black/80 text-white flex flex-col justify-start overflow-y-auto 
  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-5 px-5 pb-16
  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

  ${activeCard === `${i}-${index}`
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-full opacity-0"
                                            }

  md:translate-y-full md:opacity-0
  md:group-hover:translate-y-0 md:group-hover:opacity-100
`}
                                    >

                                        <h3 className={`font-semibold leading-[150%] tracking-[-0.02em] text-xl 3xl:text-2xl mb-2 transition-all duration-300 delay-150 ease-out font-inter
${activeCard === `${i}-${index}` ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100`}>
                                            {item.title}
                                        </h3>

                                        {item.description && (
                                            <p className={`text-[13.5px] 3xl:text-lg leading-[150%] tracking-[-0.02em] whitespace-pre-line transition-all duration-300 delay-200 ease-out font-inter
${activeCard === `${i}-${index}` ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100`}>
                                                {item.description}
                                            </p>
                                        )}

                                        {item.features && (
                                            <div className={`space-y-2 mt-3 transition-all duration-300 delay-[250ms] ease-out font-inter
${activeCard === `${i}-${index}` ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100`}>
                                                {item.features.map((f, idx) => (
                                                    <label key={idx} className="flex items-center text-[13.5px] 3xl:text-lg leading-[150%] tracking-[-0.02em] gap-2">
                                                        <span className='rounded-full size-4 bg-white flex items-center justify-center'>
                                                            <Check className='size-3 text-green-600' />
                                                        </span>

                                                        <span>{f}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Get Started button — absolutely pinned to bottom-right, always on top of overlay */}
                                    <div
                                        className={`absolute bottom-13 md:bottom-4 right-5 z-10 transition-all duration-200 delay-200 ease-out
                                        ${activeCard === `${i}-${index}` ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}

                                        md:opacity-0 md:translate-y-2
                                        md:group-hover:opacity-100 md:group-hover:translate-y-0
                                        `}
                                    >
                                        <button className="bg-white text-black text-sm 3xl:text-base px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200 min-w-42 mx-auto font-inter cursor-pointer" onClick={() => {
                                            const contact = document.getElementById("contact");
                                            contact?.scrollIntoView({ behavior: "smooth" });

                                            window.dispatchEvent(
                                                new CustomEvent("selectClass", {
                                                    detail: item.value,
                                                })
                                            );
                                        }}>
                                            Get Started
                                        </button>
                                    </div>

                                    {/* Default title bar — fades & slides out on hover */}
                                    <div div className="absolute bottom-0 w-full bg-black/70 text-white px-4 py-2.5 3xl:py-3 font-semibold leading-[150%] tracking-[-0.02em] text-xl 3xl:text-2xl transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-y-2 font-inter" >
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                    }
                </div >
            </div >
        </div >
    )
}

export default Offers
