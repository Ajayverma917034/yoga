"use client"
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const formFields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "yourname@xyz.com", required: true },
    { name: "phone", label: "Phone Number", type: "text", placeholder: "0987654321", required: true },
];

const contactInfo = [
    { icon: Phone, text: "+49 15214736919" },
    { icon: Mail, text: "smriti.ashtangayoga@gmail.com" },
    { icon: MapPin, text: "The Yoga Shala Düsseldorf · Bogenstraße 22 · 40227 Düsseldorf" },
];

const ContactUs = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        classType: "",
        notes: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.phone) newErrors.phone = "Phone is required";
        if (!form.classType) newErrors.classType = "Please select a class";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        console.log("Form Data:", form);
    };

    return (
        <div className="w-full py-16 md:py-20 md:px-6" id="contact">
            <div className="spacing max-width grid lg:grid-cols-2 gap-16 items-start">

                {/* LEFT */}
                <div>
                    <h1 className="font-inter text-3xl md:text-[40px] xl:text-5xl 2xl:text-[50px] 3xl:text-6xl font-semibold 2xl:leading-13.5 3xl:leading-16 mb-12 max-w-sm 2xl:max-w-lg 3xl:max-w-135">
                        Guidance you can trust for a balanced mind
                    </h1>

                    <div className="space-y-3 md:space-y-6">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;

                            let link = null;

                            if (item.icon === Phone) {
                                link = `tel:${item.text}`;
                            }

                            if (item.icon === Mail) {
                                link = `mailto:${item.text}`;
                            }

                            return (
                                <div key={index} className="flex items-center gap-3 lg:gap-5 3xl:gap-[24px]">
                                    <div className="size-9 md:size-10 3xl:size-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                                        <Icon size={18} />
                                    </div>

                                    {link ? (
                                        <a href={link} className="3xl:text-xl hover:underline">
                                            {item.text}
                                        </a>
                                    ) : (
                                        <p className="md:text-lg 3xl:text-xl">{item.text}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="bg-white border border-black/60 rounded-xl md:rounded-2xl p-6 md:p-8">

                    <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>

                        {formFields.map((field) => (
                            <div key={field.name}>
                                <label className="block text-sm 3xl:text-base mb-2">
                                    {field.label} <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={form[field.name]}
                                    onChange={handleChange}
                                    className="w-full border rounded-md px-4 md:px-4 py-2 md:py-2.5 3xl:py-3 outline-none border-black/10 focus:border-black"
                                />

                                {errors[field.name] && (
                                    <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                                )}
                            </div>
                        ))}

                        {/* Select */}
                        <div>
                            <label className="block text-sm 3xl:text-base mb-2">
                                Kind of Classes <span className="text-red-500">*</span>
                            </label>

                            <select
                                name="classType"
                                value={form.classType}
                                onChange={handleChange}
                                className="w-full border rounded-md px-4 md:px-4 py-2 md:py-2.5 3xl:py-3 outline-none border-black/10 focus:border-black"
                            >
                                <option value="">Select...</option>
                                <option>Beginner Yoga</option>
                                <option>Intermediate Yoga</option>
                                <option>Advanced Yoga</option>
                            </select>

                            {errors.classType && (
                                <p className="text-red-500 text-sm mt-1">{errors.classType}</p>
                            )}
                        </div>

                        {/* Textarea */}
                        <div>
                            <label className="block text-sm 3xl:text-base mb-2">
                                Additional Notes
                            </label>

                            <textarea
                                name="notes"
                                rows="4"
                                value={form.notes}
                                onChange={handleChange}
                                placeholder="Let us know about any preferences"
                                className="w-full border rounded-md px-4 md:px-4 py-2 md:py-2.5 3xl:py-3 outline-none border-black/10 focus:border-black"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-black text-white px-6 py-2.5 3xl:py-3 rounded-lg md:rounded-xl hover:bg-gray-800 transition">
                                Reserve My Spot
                            </button>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default ContactUs;