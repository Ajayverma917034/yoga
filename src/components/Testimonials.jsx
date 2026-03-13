"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const MAX_LINES = 4;
const CHARS_PER_LINE = 30;
const MAX_CHARS = MAX_LINES * CHARS_PER_LINE;

const Testimonials = () => {
    const [modalReview, setModalReview] = useState(null);
    const swiperRef = useRef(null);

    const baseReviews = [
        {
            name: "Madhuri S.",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "Smriti has inspired me to find balance and inner peace, both on and off the mat. I have learned the importance of mindfulness and self-awareness in every aspect of life.",
        },
        {
            name: "Daniela Morales Soto",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "Smriti has been an incredible Ashtanga yoga teacher for me. She explains everything so clearly and thoughtfully, which has helped me understand not just the poses but the practice as a whole. She has been accompanying my yoga journey for almost a year now, and I’m so grateful for her guidance, patience, and encouragement along the way. I’m super happy to have found her and would definitely recommend her to anyone, whether you’re new to Ashtanga or looking to deepen your practice.",
        },
        {
            name: "Ekta K.",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "Such a soft-spoken and pure-hearted yogi that has really made me embrace yoga. Her dedication and love for her practice motivated me to try Ashtanga.",
        },
        {
            name: "Elena",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "Smriti is a wonderful yoga teacher - knowledgeable, supportive and truly attentive. She creates a safe & encouraging atmosphere where you can move forward in your practice at your own pace. She cares about correct execution of the asanas and offers adjustments when needed to ensure a safe practice.I’ve been practicing with her for a year now and discovered Ashtanga Yoga as an optimal yoga style and sport for me. I became stronger and feel much more balanced and grounded mentally.",
        },
        {
            name: "Maja K.",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "Smriti is more than a teacher. She is a warm soul that spreads light on her students’ dark moments, reminds them to accept their errors because they are lessons. I am lucky to have found her.",
        },
        {
            name: "Irina Hildebrandt",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "I've been practicing Ashtanga Yoga with Smriti for about a year now and am very grateful for her guidance. Her classes are clearly structured, mindful, and challenging. I particularly appreciate her precise instructions and respectful adjustments, which have helped me deepen my practice both physically and mentally. You can feel her experience, her presence, and her genuine appreciation for each person's individual path. For me, the classes have become an integral and enriching part of my daily life.",
        },
        {
            name: "Shimonti S.",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "Her knowledge and expertise is one of a kind. She encourages her students and motivates them to push each time according to their capabilities and brings out the best.",
        },
        {
            name: "Lara Berens",
            image: "/c489047963d06c23a09ef782f1e8c41a88eabcc6.jpg",
            text: "I can highly recommend Smriti as a yoga teacher. She is incredibly attentive, supportive, and really takes the time to understand individual needs. She is fantastic for beginners, as she explains things clearly and is always willing to help. Her Ashtanga classes have helped me not only physically, as I feel much stronger and more flexible, but also mentally, bringing a sense of calm and balance into my everyday life. A truly great teacher, and I would recommend her to anyone, even if they have never practiced Ashtanga yoga.",
        },
    ];

    const isTruncated = (text) => text.length > MAX_CHARS;

    const getTruncatedText = (text) => {
        if (!isTruncated(text)) return text;
        return text.slice(0, MAX_CHARS).trimEnd();
    };

    return (
        <>
            <section className="py-20 bg-[#e0ddd2]">
                <div className="spacing md:max-w-[100%] mx-auto xl:max-w-[90%] 2xl:max-w-[90%] 3xl:max-w-[90%] w-full flex flex-col max-w-[1500px]">
                    <h2 className="font-heading text-center font-semibold text-3xl md:text-4xl xl:text-[52px] mb-8 md:mb-14">
                        What my students say.
                    </h2>

                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        speed={700}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.5 },
                        }}
                    >
                        {baseReviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#F7F5F2] p-6 md:p-8 flex flex-col justify-between h-[300px] mx-2">
                                    <div>
                                        <div className="text-[22px] text-[#F59E0B] mb-2 md:mb-3">
                                            ★★★★★
                                        </div>

                                        <p className="text-black-700 md:text-lg md:leading-7">
                                            &ldquo;{getTruncatedText(item.text)}
                                            {isTruncated(item.text) && (
                                                <>
                                                    {"..."}
                                                    <button
                                                        onClick={() => setModalReview(item)}
                                                        className="text-[#F59E0B] font-medium ml-1 hover:underline focus:outline-none"
                                                    >
                                                        read more
                                                    </button>
                                                </>
                                            )}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 rounded-full object-cover bg-[#D9D9D9]">

                                        </div>
                                        {/* <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-11 h-11 rounded-full object-cover"
                                        /> */}
                                        <h4 className="font-semibold md:text-[18px]">
                                            {item.name}
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-14 h-14 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#333] transition-colors duration-200 focus:outline-none text-4xl rotate-180"
                            aria-label="Previous slide"
                        >
                            ➝
                        </button>

                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-14 h-14 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#333] transition-colors duration-200 focus:outline-none text-4xl"
                            aria-label="Next slide"
                        >
                            ➝
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {modalReview && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
                    onClick={() => setModalReview(null)}
                >
                    <div
                        className="bg-[#F7F5F2] max-w-lg w-full p-6 md:p-10 relative shadow-2xl rounded-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setModalReview(null)}
                            className="absolute top-4 right-5 text-gray-400 hover:text-gray-700 text-2xl font-light leading-none focus:outline-none"
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <div className="text-xl md:text-[22px] text-[#F59E0B] mb-4">★★★★★</div>

                        <p className="text-gray-800 text-lg leading-7 mb-8">
                            &ldquo;{modalReview.text}&rdquo;
                        </p>

                        <div className="flex items-center gap-3">
                            {/* <img
                                src={modalReview.image}
                                alt={modalReview.name}
                                className="w-11 h-11 rounded-full object-cover"
                            /> */}
                            <div className="w-11 h-11 rounded-full object-cover bg-[#D9D9D9]">

                            </div>
                            <h4 className="font-semibold md:text-[18px] text-gray-900">
                                {modalReview.name}
                            </h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Testimonials;