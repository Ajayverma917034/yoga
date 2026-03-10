import { Check } from 'lucide-react';
import React from 'react'
const offersData = [
    {
        column: 1,
        items: [
            {
                title: "Private Yoga Sessions",
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
                img: "/offer/offer-5.png",
                height: "h-[342px] 3xl:h-[420px] ",
                description:
                    "Support your body and mind through every stage of pregnancy with a nurturing, customized prenatal yoga practice. These sessions are designed to help you stay strong, mobile, and comfortable as your body changes, while also promoting emotional balance and stress relief. \nThrough gentle movement, breathwork, and relaxation techniques, you will ease common pregnancy discomforts, build stamina for labor, and cultivate a deeper connection with your baby. Each session offers personalized guidance and one-on-one attention, ensuring a safe and supportive practice tailored to your individual needs and stage of pregnancy.",
            },
            {
                title: "Postnatal Yoga",
                img: "/offer/offer-6.png",
                height: "h-[342px]  3xl:h-[420px] ",
                description:
                    "Reconnect with your body and restore strength after birth through a carefully tailored postnatal yoga practice. These sessions focus on rebuilding core stability, improving posture, relieving tension, and supporting overall recovery. \n \nWhether you are easing back into movement, addressing specific physical concerns, or simply needing time to recharge, postnatal yoga provides a supportive space for healing and renewal. \nWith personalized attention and guidance, each session is adapted to your recovery journey, helping you regain confidence, balance, and energy at your own pace.",
            },
            {
                title: "Ayurvedic Cooking",
                img: "/offer/offer-7.png",
                height: "h-[342px]  3xl:h-[420px] ",
                description:
                    "Discover the art of cooking according to Ayurvedic principles and learn how to prepare meals that balance the doshas and support your unique constitution. This approach to food goes beyond nutrition — it is a holistic practice that nourishes body, mind, and spirit. \n \nThrough mindful ingredient selection, proper food combinations, and seasonal awareness, you will learn how to enhance digestion, optimize metabolism, and cultivate clarity, vitality, and inner harmony. \nExperience how conscious cooking can become a daily ritual for greater balance.",
            },
        ],
    },
];

const Offers = () => {
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
                                    className={`relative ${item.height} overflow-hidden group cursor-pointer`}
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
                                    <div className="absolute inset-0 bg-black/80 text-white hidden md:flex flex-col justify-start overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-5 px-5 pb-16 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">

                                        <h3 className="font-semibold leading-[150%] tracking-[-0.02em] text-xl 3xl:text-2xl mb-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 ease-out font-inter">
                                            {item.title}
                                        </h3>

                                        {item.description && (
                                            <p className="text-[13.5px] 3xl:text-lg leading-[150%] tracking-[-0.02em] whitespace-pre-line translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200 ease-out font-inter">
                                                {item.description}
                                            </p>
                                        )}

                                        {item.features && (
                                            <div className="space-y-2 mt-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[250ms] ease-out font-inter">
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
                                    <div className="absolute bottom-4 right-5 z-10 hidden md:block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 delay-200 ease-out">
                                        <button className="bg-white text-black text-sm 3xl:text-base px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200 min-w-42 mx-auto font-inter">
                                            Get Started
                                        </button>
                                    </div>

                                    {/* Default title bar — fades & slides out on hover */}
                                    <div className="absolute bottom-0 w-full bg-black/70 text-white px-4 py-2.5 3xl:py-3 font-semibold leading-[150%] tracking-[-0.02em] text-xl 3xl:text-2xl transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-y-2 font-inter">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Offers
//                 <div className="grid grid-cols-3 gap-8">


//                     <div className="flex flex-col gap-8">
//                         {/* Private Yoga */}
//                         <div className="relative h-106 overflow-hidden group cursor-pointer">

//                             {/* Image */}
//                             <img
//                                 src="/3851794c48051fc07227922373d6676f50ce8e96.jpg"
//                                 className="w-full h-full object-cover"
//                                 alt="Yoga"
//                             />

//                             {/* Hover Content */}
//                             <div className="
//   absolute inset-0 bg-black/80 text-white p-4
//   hidden md:flex flex-col justify-end
//   md:translate-y-full md:group-hover:translate-y-0
//   transition-all duration-500
//   ">

//                                 <h3 className="text-2xl font-semibold mb-3">
//                                     Private Yoga Sessions
//                                 </h3>

//                                 <p className="text-[14px] mb-4 leading-relaxed">
//                                     Experience a fully customized yoga practice designed to support you at any level.
//                                     Whether you are seeking physical, mental and emotional balance, improved stress
//                                     management, recovery from injury or illness, or a deeper exploration of your
//                                     asana practice, each session is thoughtfully tailored to your unique needs.
//                                 </p>

//                                 {/* Checkbox */}
//                                 <div className="space-y-2 mb-4">

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input type="checkbox" checked readOnly className="w-4 h-4 accent-white" />
//                                         <span>Level of Difficulty: Designed to Individual needs.</span>
//                                     </label>

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input type="checkbox" checked readOnly className="w-4 h-4 accent-white" />
//                                         <span>Duration: 60–90 minutes</span>
//                                     </label>

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input type="checkbox" checked readOnly className="w-4 h-4 accent-white" />
//                                         <span>Mode: Online / In person</span>
//                                     </label>

//                                 </div>

//                                 <div className="flex justify-end">
//                                     <button className="bg-white text-black px-4 py-2 rounded-lg">
//                                         Get Started
//                                     </button>
//                                 </div>

//                             </div>

//                             {/* Bottom Label */}
//                             <div className="absolute font-semibold bottom-0 w-full bg-black/70 text-white px-4 py-2 md:group-hover:hidden">
//                                 Private Yoga Sessions
//                             </div>

//                         </div>

//                         {/* Sports Yoga */}
//                         <div className="relative h-[260px] overflow-hidden group cursor-pointer">

//                             <img
//                                 src="/bda9adfd478833c76c018607220e4c0b96432213.png"
//                                 className="w-full h-full object-cover"
//                             />

//                             {/* Hover Overlay */}
//                             <div className="
//     absolute inset-0 z-10 bg-black/80 text-white p-4
//     hidden md:flex flex-col justify-end
//     translate-y-full group-hover:translate-y-0
//     transition-all duration-500
//   ">

//                                 <h3 className="text-xl font-semibold mb-2">
//                                     Yoga for Sportsperson & Artists
//                                 </h3>

//                                 <p className="text-[14px]">
//                                     Enhance your performance with a yoga program tailored specifically to your profession.
//                                     Whether you are a football player, swimmer or athlete, this specialized practice is
//                                     designed to support the physical demands of your field while cultivating balance
//                                     between body and mind.
//                                 </p>

//                                 {/* Checkbox List */}
//                                 <div className="space-y-2 mb-4 mt-3">

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white"
//                                         />
//                                         <span>Level of Difficulty: Designed to Individual needs.</span>
//                                     </label>

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white"
//                                         />
//                                         <span>Duration: 60–90 minutes</span>
//                                     </label>

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white"
//                                         />
//                                         <span>Mode: Online / In person</span>
//                                     </label>

//                                 </div>

//                                 <div className="flex justify-end">
//                                     <button className="bg-white text-black px-4 py-2 rounded-lg">
//                                         Get Started
//                                     </button>
//                                 </div>

//                             </div>

//                             {/* Bottom Text */}
//                             <div className="absolute bottom-0 z-0 font-semibold w-full bg-black/70 text-white px-4 py-2 group-hover:hidden">
//                                 Yoga for Sportsperson & Artists
//                             </div>

//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-8">
//                         {/* Family Yoga */}
//                         <div className="relative h-134.5 overflow-hidden group cursor-pointer">

//                             <img
//                                 src="/09046ec0e6c70e43f891bab633156791b32d81bc.png"
//                                 className="w-full h-full object-cover"
//                             />

//                             <div className="
//   absolute inset-0 bg-black/80 text-white p-4
//   hidden md:flex flex-col justify-end
//   md:translate-y-full md:group-hover:translate-y-0
//   transition-all duration-500
// ">
//                                 <h3 className="text-2xl font-semibold mb-3">
//                                     Family Yoga
//                                 </h3>

//                                 <p className="text-[14px]">
//                                     Create meaningful moments of connection through a joyful and engaging family yoga practice designed for both parents and children. These sessions blend movement, breathwork, mindfulness, and playful activities to support physical health while strengthening family bonds.
//                                     <br /><br />
//                                     Children develop coordination, focus, and emotional awareness, while parents benefit from stress relief, improved flexibility, and quality time shared with their little ones. Together, families learn simple tools for relaxation and communication that can be carried into everyday life.
//                                 </p><br />
//                                 {/* Checkbox List */}
//                                 <div className="space-y-2 mb-4">

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white rounded-full"
//                                         />
//                                         <span >Level of Difficulty: Suitable for all</span>
//                                     </label>

//                                     <label className="flex items-center text-[14px]  gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white rounded-full"
//                                         />
//                                         <span>Duration: 60–90 minutes</span>
//                                     </label>

//                                     <label className="flex items-center  text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white rounded-full"
//                                         />
//                                         <span>Mode: Online / In person</span>
//                                     </label>

//                                 </div>

//                                 {/* Button Right Side */}
//                                 <div className="flex justify-end">
//                                     <button className="bg-white text-black px-4 py-2 rounded-lg">
//                                         Get Started
//                                     </button>
//                                 </div>

//                             </div>

//                             <div className="absolute font-semibold bottom-0 w-full bg-black/70 text-white px-4 py-2 group-hover:hidden">
//                                 Family Yoga (Parents & Kids)
//                             </div>

//                         </div>

//                         {/* Business Yoga */}
//                         <div className="relative h-65 overflow-hidden group cursor-pointer">

//                             <img
//                                 src="/7e29858d0b1d2923bb8e193f8f95c1147a1c2a2f.png"
//                                 className="w-full h-full object-cover"
//                             />

//                             <div className="absolute inset-0 z-20 bg-black/80 text-white p-6 flex-col justify-end
//   hidden md:flex
//   translate-y-full group-hover:translate-y-0
//   transition-all duration-500">

//                                 <h3 className="text-xl font-semibold mb-2">
//                                     Business / Corporate Yoga
//                                 </h3>

//                                 <p className="text-[14px]">
//                                     Bring the benefits of yoga and meditation directly to your workplace with convenient, stress-relieving sessions designed to support employee wellbeing. These classes help reduce tension, enhance focus, and cultivate a calmer, more balanced work environment.
//                                     Each session can be customized to fit your team’s needs, goals, and schedule, making it easy to integrate wellness into the workday.
//                                 </p>

//                                 <div className="space-y-2 mb-4">

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white rounded-full"
//                                         />
//                                         <span>Level of Difficulty: Suitable for all</span>
//                                     </label>

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white rounded-full"
//                                         />
//                                         <span>Duration: 60–90 minutes</span>
//                                     </label>

//                                     <label className="flex items-center text-[14px] gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked
//                                             readOnly
//                                             className="w-4 h-4 accent-white rounded-full"
//                                         />
//                                         <span>Mode: Online / In person</span>
//                                     </label>

//                                 </div>

//                                 <div className="flex justify-end">
//                                     <button className="bg-white text-black px-4 py-2 rounded-lg">
//                                         Get Started
//                                     </button>
//                                 </div>

//                             </div>

//                             <div className="absolute z-10 font-semibold bottom-0 w-full bg-black/70 text-white px-4 py-2 group-hover:hidden">
//                                 Business/Corporate Yoga
//                             </div>

//                         </div>

//                     </div>

//                     <div className="flex flex-col gap-8">
//                         {/* Prenatal */}
//                         <div className="relative h-[260px] overflow-hidden group cursor-pointer">

//                             <img
//                                 src="/cee9fa39a9d04f48bca8d293eff23e653700f4c6.jpg"
//                                 className="w-full h-full object-cover"
//                             />

//                             {/* Hover Overlay */}
//                             <div className="absolute inset-0 z-10 bg-black/80 text-white p-6 flex-col justify-end
//   hidden md:flex
//   translate-y-full group-hover:translate-y-0
//   transition-all duration-500">

//                                 <h3 className="text-xl font-semibold mb-2">
//                                     Prenatal Yoga
//                                 </h3>

//                                 <p className="text-[14px]">
//                                     Support your body and mind through every stage of pregnancy with a nurturing, customized prenatal yoga practice.
//                                     Through gentle movement, breathwork, and relaxation techniques, you will ease common pregnancy discomforts
//                                     and build stamina for labor.
//                                 </p>

//                                 <div className="flex justify-end mt-4">
//                                     <button className="bg-white text-black px-4 py-2 rounded-lg">
//                                         Get Started
//                                     </button>
//                                 </div>

//                             </div>

//                             {/* Bottom Text */}
//                             <div className="absolute bottom-0 z-0 font-semibold w-full bg-black/70 text-white px-4 py-2 group-hover:hidden">
//                                 Prenatal Yoga
//                             </div>

//                         </div>

//                         {/* Postnatal */}
//                         <div className="relative h-65 overflow-hidden group cursor-pointer">

//                             <img
//                                 src="/4bd43f59e616cbfc9bc4dde6ee021a85d85c5582.png"
//                                 className="w-full h-full object-cover"
//                             />

//                             <div className="absolute inset-0 bg-black/80 text-white p-6 flex flex-col justify-end hidden md:flex
//               transform translate-y-full group-hover:translate-y-0 transition duration-500">
//                                 <h3 className="text-xl font-semibold mb-2">
//                                     Postnatal Yoga
//                                 </h3>

//                                 <p className="text-[14px]">
//                                     Reconnect with your body and restore strength after birth through a carefully tailored postnatal yoga practice. These sessions focus on rebuilding core stability, improving posture, relieving tension, and supporting overall recovery.

//                                     Whether you are easing back into movement, addressing specific physical concerns, or simply needing time to recharge, postnatal yoga provides a supportive space for healing and renewal.
//                                     With personalized attention and guidance, each session is adapted to your recovery journey, helping you regain confidence, balance, and energy at your own pace.                </p>

//                                 <div className="flex justify-end">
//                                     <button className="bg-white text-black px-4 py-2 rounded-lg">
//                                         Get Started
//                                     </button>
//                                 </div>
//                             </div>


//                             <div className="absolute font-semibold bottom-0 w-full bg-black/70 text-white px-4 py-2 group-hover:hidden">
//                                 Postnatal Yoga
//                             </div>

//                         </div>

//                         {/* Ayurvedic */}
//                         <div className="relative h-[260px] overflow-hidden group cursor-pointer">

//                             <img
//                                 src="/12ebd824006a6777f19e7b6ea8deb6e212743586.png"
//                                 className="w-full h-full object-cover"
//                             />

//                             <div className="absolute inset-0 bg-black/80 text-white p-6 flex flex-col justify-end hidden md:flex
//               transform translate-y-full group-hover:translate-y-0 transition duration-500">

//                                 <h3 className="text-xl font-semibold mb-2">
//                                     Ayurvedic Cooking
//                                 </h3>

//                                 <p className="text-sm">
//                                     Discover the art of cooking according to Ayurvedic principles and learn how to prepare meals that balance the doshas and support your unique constitution. This approach to food goes beyond nutrition — it is a holistic practice that nourishes body, mind, and spirit.

//                                     Through mindful ingredient selection, proper food combinations, and seasonal awareness, you will learn how to enhance digestion, optimize metabolism, and cultivate clarity, vitality, and inner harmony.
//                                     Experience how conscious cooking can become a daily ritual for greater balance.                </p>
//                                 <div className="flex justify-end">
//                                     <button className="bg-white text-black px-4 py-2 rounded-lg">
//                                         Get Started
//                                     </button>
//                                 </div>
//                             </div>


//                             <div className="absolute font-semibold bottom-0 w-full bg-black/70 text-white px-4 py-2 group-hover:hidden">
//                                 Ayurvedic Cooking
//                             </div>

//                         </div>

//                     </div>

//                 </div>