"use client"
import Image from 'next/image';
import React from 'react'

const plansData = [
    {
        title: "Personal Training",
        description:
            "A great starting point for those new to yoga, offering foundational classes",
        prices: [
            "1 X 60 Minutes = €90",
            "3 X 60 Minutes = €250",
            "5 X 60 Minutes = €400",
            "5 X 60 Minutes = €400",
        ],
        cardClass:
            "bg-[#f1f1f1]",
        iconClass:
            "bg-[#7a5c00]",
        icon: '/icons/bullseye-arrow.png',
        buttonClass:
            "w-full border-2 border-black py-3 md:py-2.5 3xl:py-4 rounded-lg 3xl:rounded-xl text-base md:text-lg 3xl:text-2xl cursor-pointer",
    },
    {
        title: "Personal Training Online",
        description:
            "Private guided practice from the comfort of your home, with full attention",
        prices: [
            "1 X 60 Minutes = €80",
            "3 X 60 Minutes = €230",
            "5 X 60 Minutes = €360",
            "10 X 60 Minutes = €680",
        ],
        cardClass:
            "bg-gradient-to-b from-[#cbbf9e] via-[#f1f1f1] to-[#f1f1f1]",
        iconClass:
            "bg-white",
        icon: '/icons/gem.png',
        buttonClass:
            "w-full border-2 border-black py-3 md:py-2.5 3xl:py-4 rounded-lg 3xl:rounded-xl text-base md:text-lg 3xl:text-2xl bg-black text-white cursor-pointer",
        divider: true,
    },
];
const Plans = () => {
    return (
        <div className="w-full py-4 md:py-16 lg:py-25 2xl:py-35 px-2 md:px-6">

            <h5 className="font-heading text-2xl md:text-[32px] lg:text-[52px] font-semibold text-center mb-12 md:mb-14 lg:mb-16 leading-[61.95px]">
                Find Your Perfect Plan
            </h5>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 2xl:gap-12 3xl:gap-14 justify-center items-stretch">
                {plansData.map((plan, index) => (
                    <div key={index} className={`w-full max-w-125 max-lg:mx-auto xl:max-w-130 3xl:max-w-145 min-h-full rounded-2xl md:rounded-3xl 3xl:rounded-[28px] p-6 lg:p-8 lg:py-12 3xl:p-[44px] shadow-sm ${plan.cardClass}`}>

                        <div className={`size-12 md:size-15 rounded-xl md:rounded-2xl 3xl:rounded-3xl flex items-center justify-center mb-4 ${plan.iconClass}`}>
                            <Image alt='Icon' src={plan.icon} width={36} height={36} className=' object-contain w-8 md:w-9 h-full' />
                        </div>

                        <h2 className="text-2xl md:text-4xl font-heading 3xl:text-[40px]  leading-[-1.12px] font-semibold mb-3">
                            {plan.title}
                        </h2>

                        <p className="text-gray-600 mb-4 md:mb-8 3xl:mb-10 text-sm md:text-base lg:text-[22px] 3xl:text-[24px] 3xl:leading-[35px]">
                            {plan.description}
                        </p>

                        <hr
                            className={`border-gray-300 mb-6 md:mb-10 3xl:mb-12 ${index === 0 ? "border-transparent" : ""}`}
                        />

                        <div className="space-y-4 mb-8 text-base text-xl 3xl:text-[24px] 3xl:leading-11">
                            {plan.prices.map((price, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Image alt='Icon' src={'/icons/check.png'} width={24} height={24} className=' object-contain w-6 h-fit' /> {price}
                                </div>
                            ))}
                        </div>

                        <button onClick={() => {
                            const contact = document.getElementById("contact");
                            contact?.scrollIntoView({ behavior: "smooth" });
                        }} className={plan.buttonClass}>
                            Get Started
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans