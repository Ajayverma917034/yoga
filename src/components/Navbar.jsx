import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";


const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Offerings", id: "classes" },
    { name: "Events", id: "events" },
    { name: "Contact", id: "contact" },
];

const Navbar = () => {
    return (
        <div className="bg-[#d9d2c7] pt-2 md:pt-4 3xl:pt-8">
            <div className="spacing max-width flex flex-col">
                <div className="w-full h-6 md:h-8 flex items-center justify-end max-md:hidden">

                    <div className="flex items-center gap-1.75">

                        <div className="size-6 md:size-8 flex items-center justify-center rounded-full bg-black/10 cursor-pointer">
                            <Instagram className="size-5 3xl:size-6" />
                        </div>

                        <div className="size-6 md:size-8 flex items-center justify-center rounded-full bg-black/10 cursor-pointer">
                            <Calendar className="size-5 3xl:size-6" />
                        </div>

                        <div className="size-6 md:size-8 flex items-center justify-center rounded-full bg-black/10 cursor-pointer">
                            <MapPin className="size-5 3xl:size-6" />
                        </div>

                    </div>

                </div>

                <nav className="w-full bg-[#d9d2c7]">
                    <div className="py-1 md:py-2 3xl:py-3 flex items-center justify-between">

                        {/* Logo */}
                        <div className="font-heading  font-normal text-xl md:text-[28px] 3xl:text-4xl leading-6 flex w-full items-center gap-2 md:gap-3">
                            <Image src={'/logo.png'} width={50} height={50} alt="Smriti Arya Yoga Logo" className="w-fit h-7 md:h-10 3xl:h-12.5" />  Smriti Arya Yoga
                        </div>

                        <ul className="flex flex-col md:flex-row items-center lg:gap-12 mt-4 lg:mt-0 text-black-600 font-fraunces text-[16px] tracking-wide cursor-pointer font-heading max-md:hidden max-w-[473px] ">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <Link href={`/#${item.id}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-1.75 md:hidden">

                            <div className="size-6 md:size-8 flex items-center justify-center rounded-full bg-[#cfc7bb] cursor-pointer">
                                <FaInstagram className="text-sm md:text-[16px]" />
                            </div>

                            <div className="size-6 md:size-8 flex items-center justify-center rounded-full bg-[#cfc7bb] cursor-pointer">
                                <IoLocationSharp className="text-sm md:text-[16px]" />
                            </div>

                            <div className="size-6 md:size-8 flex items-center justify-center rounded-full bg-[#cfc7bb] cursor-pointer">
                                <FaEnvelope className="text-sm md:text-[16px]" />
                            </div>

                        </div>


                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;