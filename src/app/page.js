import ContactUs from '@/components/ContactUs'
import Offers from '@/components/Offers'
import Plans from '@/components/Plans'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className='w-full bg-[#d9d2c7]'>
        <div className="max-width spacing pt-2 md:pt-5 flex flex-col">
          <div className=''>
            <div className="w-full relative overflow-hidden mb-20 md:mb-50 3xl:mb-60 scroll-mt-24" id="home">

              {/* Banner Image */}
              <div className="aspect-1296/441 h-50 md:h-111 3xl:h-145 w-full relative">
                <Image
                  src="/hero.jpg"
                  alt="Banner"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <h1 className="font-heading  text-white text-[22px] sm:text-[30px] md:text-[36px] lg:text-[46px] 3xl:text-6xl">
                  Ashtanga Vinyasa, Hatha, Pre & Postnatal Yoga Teacher
                </h1>
              </div>

            </div>
          </div>
          <div className='space-y-16 md:space-y-50 pb-20 md:pb-40'>
            <div className="flex max-lg:flex-col justify-between xl:items-center space-y-0 max-xl:space-y-4">
              <div className="md:max-w-144.5 3xl:max-w-190">
                <h2 className="font-heading font-bold text-2xl md:text-[44px] 2xl:text-5xl 3xl:text-6xl md:leading-12 2xl:leading-15 3xl:leading-18 tracking-[-0.02em] md:tracking-[-2px] text-[#363636] mb-3 md:mb-6 3xl:mb-10">
                  Are you feeling drained <br /> and running on empty?
                </h2>
                <p className="text-lg md:text-[20px] 3xl:text-2xl md:leading-8 3xl:leading-9 text-[#363636] mb-4">
                  Lying awake at night replaying difficult conversations, unsure how to calm your nervous system and find your footing again?
                  <br />
                  <br />
                  Yoga can help you <strong>breathe, sleep, and move through life with more ease.</strong> My own daily yoga practice has taught me how to meet life with open eyes, bringing me a sense of calm and acceptance I never thought possible—and I’d love to help you find that too
                </p>


              </div>

              <div className="flex justify-center 2xl:pr-10">
                <div className="w-[90vw] sm:w-100 md:w-120 2xl:w-130 3xl:w-150 xl:max-h-125 2xl:max-h-147.5 3xl:max-h-170 aspect-518/590 relative">
                  <Image
                    src="/yoga1.jpg"
                    alt="Yoga"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex max-lg:flex-col-reverse justify-between xl:items-center space-y-0 max-xl:space-y-4 scroll-mt-24" id='about'>


              <div className="flex justify-center">
                <div className="w-[90vw] sm:w-100 md:w-120 2xl:w-130 3xl:w-150 xl:max-h-125 2xl:max-h-147.5 3xl:max-h-170 aspect-518/590 relative">
                  <Image
                    src="/yoga2.jpg"
                    alt="Yoga"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className='w-full lg:justify-end flex'>
                <div className="max-w-150 3xl:max-w-220 xl:pr-2">
                  <h2 className="font-heading font-bold text-2xl md:text-[44px] 2xl:text-5xl 3xl:text-6xl md:leading-12 2xl:leading-15 3xl:leading-18 tracking-[-0.02em] md:tracking-[-2px] text-[#363636] mb-3 md:mb-6 3xl:mb-10">
                    Welcome.
                  </h2>

                  <p className="text-lg md:text-[20px] 3xl:text-2xl md:leading-8 3xl:leading-9 text-[#363636] mb-4">
                    I am a passionate yoga teacher, born in India and based in Germany, offering yoga for physical, mental, and emotional well-being accessible to practitioners of all levels.
                    <br /> <br />
                    With over 10 years of personal practice and 5 years of teaching experience, yoga has been a lifelong companion rooted in devotion and tradition. <br />
                    Private or in a group format, I teach Ashtanga Vinyasa, Hatha, and Prenatal & Postnatal yoga across studios in Düsseldorf, and travel internationally to lead classes, workshops, retreats, and wellness events. <br /> <br />
                    Take your time, look around my site, and feel free to reach out if you have any questions.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Offers />
      <Testimonials />
      <div className='w-full bg-[#e0ddd2]'>
        <div className="py-20 3xl:py-26 max-width spacing flex flex-col">
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-17.5'>

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5 3xl:gap-6">

              <h1 className="text-2xl md:text-[36px] 3xl:text-5xl mb-2 md:mb-5 2xl:mb-12 3xl:mb-16 font-semibold font-heading">
                Upcoming Retreat
              </h1>

              <h2 className="text-xl md:text-[30px] 3xl:text-4xl font-heading max-w-lg 3xl:max-w-150 md:leading-8.75 3xl:leading-10.5">
                Discover Stillness in the Mountains:
                A Week-Long Yoga Retreat in Leh,
                India (April 2026).
              </h2>

              <p className="text-base md:text-[18px] 3xl:text-xl md:leading-6 3xl:leading-6.5 3xl:max-w-180">
                Ladakh, India&apos;s "Land of High Passes", is a place that works on you.
                This retreat is an invitation to slow your body down, soften your
                nervous system and let the nature recalibrate something deeper.
              </p>

              <div className="text-base md:text-[18px] 3xl:max-w-180 md:leading-6 3xl:leading-6.5">
                <p className="font-semibold mb-1">Inclusions:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Yoga, breathwork, journaling, meditation with the monk, sound healing, ayurvedic view of life</li>
                  <li>Witness Ladakh through unhurried sightseeing</li>
                  <li>Leave space for Rest, Reflection and Silence.</li>
                  <li>A small group & a mindfully planned wellness retreat. A landscape that changes you.</li>
                </ul>
              </div>

              <div className="text-base md:text-[18px] 3xl:max-w-180 md:leading-6 3xl:leading-6.5">
                <p className="font-semibold mb-1">Details:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>12th-16th April 2026</li>
                  <li>Limited spots</li>
                  <li>Prices starting - 1500 Euros (including all meals, accommodation and airport transfers.) </li>
                  <li>Optional to add visit to The Taj Mahal, Agra</li>
                </ul>
              </div>

              <button className="w-fit bg-black text-white px-5 py-2.5 md:py-3 3xl:py-4 3xl:px-8 rounded-lg text-sm mt-5 3xl:mt-8 3xl:text-lg max-sm:mx-auto">
                Know more about Retreat
              </button>
            </div>

            {/* RIGHT */}

            <div className="w-full md:w-140 max-lg:mx-auto lg:w-140 2xl:w-150 3xl:w-190 relative min-h-120 md:min-h-180 lg:min-h-225 flex justify-end items-end ">
              <img
                src="/upcoming-retreat1.png"
                className="absolute w-[70%] md:w-100 lg:w-100 2xl:w-109 3xl:w-110 h-auto lg:h-70 2xl:h-82.5 3xl:h-90 top-0 left-0 3xl:left-45 object-cover"
              />
              <img
                src="/upcoming-retreat2.png"
                className="absolute w-[70%] md:w-97 lg:w-100 2xl:w-[418px] 3xl:w-108 h-auto lg:h-68 2xl:h-[300px] 3xl:h-[318px] top-30 md:top-45 lg:top-54 2xl:top-[264px] 3xl:top-70  right-0 object-cover border-8 md:border-10 border-[#e0ddd2]"
              />
              <img
                src="/upcoming-retreat3.png"
                className="absolute w-[70%] md:w-100 lg:w-100 2xl:w-[436px] 3xl:w-110 h-auto lg:h-65 2xl:h-[270px] 3xl:h-[310px] top-60 md:top-90 lg:top-110 2xl:top-125 3xl:top-135 left-0 3xl:left-45 object-cover border-8 md:border-10 border-[#e0ddd2]"
              />
            </div>
          </div>
          <Plans />

        </div>


      </div>
      <div className='w-full bg-[#FFFFFF]'>
        <div className="py-16 3xl:py-40 max-width spacing flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-200 lg:max-w-135 2xl:max-w-[580px] 3xl:max-w-180">

            <h4 className="font-heading text-2xl md:text-[32px] lg:text-4xl 2xl:text-[40px] 3xl:text-5xl 3xl:leading-14 font-semibold mb-6 md:mb-8">
              Certified &gt; 600 Hours <br />
              Registered Yoga Teacher
            </h4>

            <ul className="space-y-4 md:space-y-6 text-xl list-disc pl-5 max-md:text-sm 3xl:text-2xl">
              <li>
                200 Hours Registered Yoga Teacher with Kaivalyadhama,
                Maharashtra, India
              </li>

              <li>
                200 Hours Ashtanga Practitioners Intensive training with
                Kino MacGregor and Tim Feldmann at Miami Life Centre,
                Florida, USA
              </li>

              <li>
                200 Hours Prenatal & Postnatal Yoga Teacher Training,
                Yoga Vidya Gurukul, Maharashtra, India
              </li>

              <li>
                Learnt Ashtanga Vinyasa with Authorized Yoga Teacher
                Ajay Tokas, New Delhi, India
              </li>
            </ul>

          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-full relative flex justify-end max-md:mt-12 max-lg:mt-30">
            <img
              src={'/yoga3.png'}
              alt="Yoga Pose"
              className="w-[80vw] max-md:max-w-80 md:w-110 lg:w-110 2xl:w-[520px] 3xl:w-150 h-auto object-cover"
            />
            <img
              src='/yoga4.png'
              alt="Meditation"
              className="absolute max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-80 2xl:right-[400px] 3xl:right-110 -top-20 md:-top-30 lg:top-[30%] size-38 md:size-60 lg:size-60 3xl:size-85 rounded-full object-cover"
            />

          </div>
        </div>
      </div>

      <div className='w-full bg-[#e0ddd2]'>
        <div className="py-24 3xl:py-30 max-width spacing flex flex-col items-center gap-16 ">

          <h1 className="text-2xl md:text-[28px] xl:text-[48px] font-inter font-semibold text-center max-w-[1200px] mx-auto xl:leading-15">
            Ashtanga Practitioners Intensive with Kino MacGregor and Tim Feldmann
          </h1>

          <div className="max-w-250 2xl:max-w-[1195px] 3xl:max-w-[1500px] w-full mt-0 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mx-auto">

            <div className="w-full h-[260px] sm:h-[320px] lg:h-110 2xl:h-[442px] 3xl:h-125">
              <Image
                width={400}
                height={442}
                src="/yoga-family-1.png"
                alt="Ashtanga Intensive"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full h-[260px] sm:h-[320px] lg:h-110 2xl:h-[442px] 3xl:h-125">
              <Image
                width={400}
                height={442}
                src="/yoga-family-2.png"
                alt="Ashtanga Intensive 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full h-[260px] sm:h-[320px] lg:h-110 2xl:h-[442px] 3xl:h-125">
              <Image
                width={400}
                height={442}
                src="/yoga-family-3.png"
                alt="Ashtanga Intensive 3"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>

      <ContactUs />
    </div>
  )
}

export default page