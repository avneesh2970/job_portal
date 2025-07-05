import React from "react";
import founded from "./assets/ProfileImages/Frame 1189.png"
import Employees from "./assets/ProfileImages/Frame 1189 (1).png"
import Location from "./assets/ProfileImages/Frame 1189 (2).png"
import Industry from "./assets/ProfileImages/Frame 1189 (3).png"
import CompanyLogo from "./assets/ProfileImages/Company Logo.png"
import LinkedIn from "./assets/ProfileImages/Group.png";
import Instagram from "./assets/ProfileImages/Vector (1).png";
import Global from "./assets/ProfileImages/Mask group.png";
import Image from "./assets/ProfileImages/icon.png"
import Facebook from "./assets/ProfileImages/facebook-02.png"
import Insta from "./assets/ProfileImages/instagram.png"
import Linkedin from "./assets/ProfileImages/linkedin-02.png"
import Email from "./assets/ProfileImages/mail-02.png"

import { motion } from "framer-motion";

const JobCard = ({ title, company, location, type, description, daysAgo, image }) => {
    return (
        <motion.div
            className="rounded-lg shadow-md p-4 bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-600 bg-gray-200 px-2 py-1 rounded">
                    {type}
                </span>
                <span className="text-sm text-gray-500">{daysAgo} Day ago</span>
            </div>
            <div className="flex items-center mb-3">
                <img
                    src={Image} // Make sure the image path is correct
                    alt="Company Logo"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">
                        {company}, {location}
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between">
                <motion.button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Apply Now
                </motion.button>
                <motion.button
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Details
                </motion.button>
            </div>
        </motion.div>
    );
};






const TeamMemberCard = ({ name, role, image, socialLinks }) => {
    return (
        <motion.div
            className="bg-white shadow-md rounded-lg p-6 sm:p-4 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.random() * 0.2 }} // Reduced delay and duration
            whileHover={{ scale: 1.05 }}
        >
            <motion.img
                src={image}
                alt={name}
                className="w-30 h-30 rounded-full mb-4 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }} // Faster hover scale
            />
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
            <div className="flex gap-2 mt-4">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400 }} // Faster hover effect
                    >
                        <img src={link.icon} alt="social-icon" className="w-5 h-5" />
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};


function ProfilePage() {
    const teamMembers = [
        {
            name: "Célestin Gardinier",
            role: "CEO & Co-Founder",
            image: "https://s3-alpha-sig.figma.com/img/dd2a/0ce2/931952f6be080a1ad0a1a434fdbdc7e9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uYNpdmE4Gr-G6SScKFMr0AHLrHBG-SJphYc4rO5W0a~of7LkSxx8vAByzziiAqZFGnhboifW7FhuPQMTy-Zua6X7UAG3luun93fVzYsNwhpXsgrUyL2HTQ-rrOiiCo6M1Gknfg88WIRGZthkerqckQplsPMmASuFguLspryC2Eh~34P6KUUNwY1NYhOyth6dh2tBZVmYuApfWzSyBDUJRZm-C2MlFwp1q4dFTpVnXLGIEGOONQ-nCLX7Jw3-AAhM7c2vRaYto1CR~M9PaAeeDSnDfsBjadomsFcsxLLjn79lIER1xmhgIeNnvun9AkPPcvMX7R7DmnF3u22w8V-NeQ__",
            socialLinks: [
                { icon: LinkedIn, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Global, url: "https://example.com" },
            ],
        },
        {
            name: "Célestin Gardinier",
            role: "CEO & Co-Founder",
            image: "https://s3-alpha-sig.figma.com/img/0cc0/cb4b/dc7c7038cbe6ecbcb6471484d9a5714f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZfUNEShguF8xl1qtIXs2taWaBTUKiX4~18DF9DKu-HcbXLB7hQptDVjNYAIepJpXYbYhmTh3tn1eTpy8IOILuECmasNMxCs8-yW3c6q~pwYhIZP8DA~xe9dMyEc6gH34daa7Stb53-qXi51az49HNfanhx0~cAKSfA4ajalSCd-etulrYbwN76vC6m5R0K4mEB7NROG3RGswyEBkigKiyCZxa9hUiY1s2CKtOS5PrEapPb~RGrCnfde8vDiEaufMRGYHHOKrA1yYxqhdIx6DX-cg0pRQ71r5udX80KQC~2CIwElsq8enXdJHoQzS4eDoHydJCuSsR1YUUg-8NuwfzQ__",
            socialLinks: [
                { icon: LinkedIn, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Global, url: "https://example.com" },
            ],
        },
        {
            name: "Célestin Gardinier",
            role: "CEO & Co-Founder",
            image: "https://s3-alpha-sig.figma.com/img/074e/fc3e/17faed740c4d94589b4f2115e3c6853a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iw7pXFSsSIZNZbC~ehNDBroOYZtXRzh3FzgmAWhlJTp0TmLQgEEDl-34kZzFiyRjdVP3qT9-tjs-ZFZf8vpX2woHNJezZnPBHs0MG3iJ7DtxsjB7YpLDGutClS3riofdyIAjeLt6MnV5dq-IbUqR2nm3h8fllwW-4k9K5WMqjTJBgc3AJn~FOHeEBq-lZrZiMNc6I0r~wnHCGw3w0AoqE3XlqgvNZ4h7UmmtScezL8Rv-E9Dpr12BmGH2Xv~HRXYJu43GgJxwveqtBbaPsRcd7mu-cKCNb~rejep-bjmvOIoCSzEbvmWa119Dv~Hesnvl7b--K6aELuWaYKd9LfHvA__",
            socialLinks: [
                { icon: LinkedIn, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Global, url: "https://example.com" },
            ],
        },
        {
            name: "Célestin Gardinier",
            role: "CEO & Co-Founder",
            image: "https://s3-alpha-sig.figma.com/img/726e/e4e5/7698f6797df8e06d6a2a95171dcbd1a9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UgdD8BVXKG2WmcA0Ya~cdmimdtvf4mKVp8jDrDiC9HHz1P3zQyVIrlUIQQ8fv7xHNJ2imoW4-y1vIcPjWnh0UBYCp~SkWO6scDsdSSMS77d04jJdj1KnyY91afHucT~a6~ujFwr56mR5dO7uTyyZgFaC2TmSVF0cic8gZjM7WZF0LpavZQAJ5CurkToLIKMiJ8X8hyopDzXSj6CHQrlJiHy8gw4PdMdkyvpIYREORMAfLsGJ1CKKdtURyDahVxVjhvyf9Q7UQRIlOjNKOWeGDwtNDCGOFpqTW8HOvnkR6I2Op8oc7IBVmK5hIUuLnDyztg917WHZoh97NxdS8GPpKg__",
            socialLinks: [
                { icon: LinkedIn, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Global, url: "https://example.com" },
            ],
        },
        {
            name: "Célestin Gardinier",
            role: "CEO & Co-Founder",
            image: "https://s3-alpha-sig.figma.com/img/4142/7260/22f146b8330b1fe4cf7102cbc564d010?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z3DJ7RMOGKv5sIFU89pbl9oC~fmDdjFVDH6qPhktgDuPJ7oTzeB3-UEq2Z-YvCEq4oKX1mBsrc7fql~ZQFlKzqbaZJiNoBD7krli-XkMOKzT4c0Y81iOJOKmDJgjC0AXi1-K9J3aT7kBdrRgTEp2vvDDuiBiuZX7CTBDn~caTs1oCAsZi21NmBisK1DmE4x4AOwWO3bck3UPlwlixTReyI3MiupZ5LYumck1-1JzzxXYjo-LVzWZMdzRmnIL5lIkciHW~ByZhO~4KVJwP2x00Wafc8qM5g3P~BpDCfBx7L29xqJhHd~DR7zpx7U7rOIsFw41lrqp4TeRJeXqoLr-gg__",
            socialLinks: [
                { icon: LinkedIn, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Global, url: "https://example.com" },
            ],
        },
    ];


    const jobs = [
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description:
                "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description:
                "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description:
                "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description:
                "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description:
                "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description:
                "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        }
        // Add more job objects as needed
    ];
    return (
        <>
            <div className="flex justify-center items-center bg-gray-100 py-8  min-h-[50vh] bg-cover bg-center overflow-hidden" style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/0310/7def/01aec4f42fa013662cc9c50cca291091?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f80NyjIrrsCveZ94BoPFkD5vRJeh50B~m0CroT0r-7~QYv~EOjrtQAxeEqJfAVJi1LjdScN3hwLctqT~SIR3WMwzOPg8cT4IqV~aImS1R7iB9Yk~tmu1lP7QXKdlWcto48jIPBD5m-0LKWeT~2Sz1gfK-j9NYlYo~x3qnJLHEL9BJpf2Zjqbi6oT4LooLVspu9Qb~CfOMQmhygUeLtQ5bs~sNsldYgsTRHeHCWPWGjsoZGmV2-SiQJXVp8aBv~eYaXVtCHxpSfQV9Y28lUbsoNNdg7yDj3NmfzGBo5g8hFkKNtJYbQItX21-N2OuzUvalM-aoo2VlgAvTRJyvf6PiQ__')`,
            }}>
                <div className="flex md:w-[80%] flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 w-11/12 md:w-3/5 text-center md:text-left">
                    <div className="company-logo mb-4 md:mb-0 flex justify-center">
                        <img src={CompanyLogo} alt="Zend Logo" className="w-20 h-20 md:w-24 md:h-24 rounded-lg" />
                    </div>
                    <div className="flex-1 md:ml-6 ">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-center md:items-start">
                            <h1 className="text-lg md:text-2xl font-bold">Zend</h1>
                            <span className="text-xs md:text-sm text-purple-600 border border-purple-600 rounded-full px-5 py-1">
                                126 Jobs
                            </span>
                            <button className="bg-purple-600 text-white rounded-md px-4 py-2 text-xs md:text-sm hover:bg-purple-700 w-28 md:w-36 mx-auto md:ml-[400px]">
                                + Follow
                            </button>

                        </div>
                        <a href="https://www.zend.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs md:text-sm hover:underline block mt-2">
                            www.zend.com
                        </a>
                        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-10 text-xs md:text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                                <img src={founded} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                <p>
                                    Founded: <br />
                                    <span className="text-black">March 2011</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={Employees} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                <p>
                                    Employees: <br />
                                    <span className="text-black">50 - 200</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={Location} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                <p>
                                    Location: <br />
                                    <span className="text-black">India</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={Industry} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                <p>
                                    Industry: <br />
                                    <span className="text-black">IT Services and IT Consulting</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 lg:p-1 grid grid-cols-1 lg:grid-cols-4 shadow-md gap-8 mt-15">
                {/* Left Section */}
                <div className="lg:col-span-3 pl-0 lg:pl-20 text-center lg:text-left">
                    {/* Company Profile Section */}
                    <div className="text-start mb-8 mt-10">
                        <h1 className="text-xl lg:text-4xl font-bold  mb-4">Company Profile</h1>
                        <p className="text-gray-600 text-sm lg:text-base">
                            Zend is a software platform for starting and running internet businesses. Millions of businesses rely on software tools to accept payments, expand globally, and manage their businesses online. Zend has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Zend is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
                        </p>
                    </div>

                    {/* Contact Us Section */}
                    <div className="text-start mb-8">
            <h2 className="text-lg lg:text-2xl font-semibold mb-4">Contact us</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                <motion.a
                    href="#"
                    className="flex items-center justify-center w-full h-12 border border-blue-600 text-blue-600 rounded-lg transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={Facebook} alt="Facebook" className="w-5 h-5 mr-2" />
                    <span>Facebook</span>
                </motion.a>
                <motion.a
                    href="#"
                    className="flex items-center justify-center w-full h-12 border border-blue-600 text-blue-600 rounded-lg transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={Insta} alt="Instagram" className="w-5 h-5 mr-2" />
                    <span>Instagram</span>
                </motion.a>
                <motion.a
                    href="#"
                    className="flex items-center justify-center w-full h-12 border border-blue-500 text-blue-500 rounded-lg transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={Linkedin} alt="LinkedIn" className="w-5 h-5 mr-2" />
                    <span>LinkedIn</span>
                </motion.a>
                <motion.a
                    href="#"
                    className="flex items-center justify-center w-full h-12 border border-blue-600 text-blue-600 rounded-lg transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={Email} alt="Email" className="w-5 h-5 mr-2" />
                    <span>Email</span>
                </motion.a>
            </div>
        </div>


                    {/* Image Grid Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Left Large Image */}
                        <div className="lg:col-span-2 h-[50vw] lg:h-[90%]">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/db70/2d0e/56c6ea270d563258dc6742f79ebe2233?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dgouK9TnQJaZ1RpB7-YtQlOT4ZWFClDV0o4Vq63mC5AogeHOpT3-vy1JZ-RfRQgkqpHiN03z5xAgWcmSyr~AQ7yVzcfv59IL30IBzC03MIxHDzVx6nFqqn3Koe2mHd4mZykZO2L2bWcTI-OmYWQQw~SZdUPh6f5i7h5Lwa7SFrHNQW5thTzsmSl~ywNmCjcJ3luHuO2TwnDL47sXN3pfuWCLcYXPTHv9FpTiROz-tQLhWBTfSnKsSmqeWe0vRZ5kZaADHf3WmlUrQDVzVA3WWagGppYl1SL68jC9N2~SMbIN3oZpBTOeXFifQSbGRUWHRL5DG3Gwk65GryFp01-pRw__"
                                alt="Group discussion"
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                        {/* Right Vertical Images */}
                        <div className="flex flex-col space-y-4">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/2dfa/ce90/d635ce80b00ed4280d334523440ae29c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rDpJK55y3fwyvxp1LiB56d0lny5vTF4C202i0fnsMIrPcHVxuzQu7vNc7pCFVeX4kaY3aKVesTh9ko537tfHRgM~oSbMHdlpkc-Dq-a5tyA-y6UpjTnWapLEQh4h6dyf1h6N8BYg9Ov~3uvCZ6S9QbEgTFFndXRL0o0WpuFNyxpLxwmnx9q6t1pVunlMqMbBCHv7P4pNl9hBHHM3wiOHm4GD3F2eToKUM9iWHkaH7PzueN1op8Iy3v5yMn5ex61Ad~OSNd2HJWV8P~uVw1870SOCjTYRWXC6JwhHsM1rb4DBt4lvsDjvA-Y2A-r2nMe3o54dtLswQ6awtxgW3YkHaA__"
                                alt="Team meeting"
                                className="w-full h-[29vw] lg:h-[28%] rounded-lg object-cover"
                            />
                            <img
                                src="https://s3-alpha-sig.figma.com/img/d0f1/ce30/80836719a4f9ccb38738462101c87839?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VuJM5nIA2yvis8n1TV86g0Dm02CwuZCHSGsP-pF958qFVRBFezVB-bPvstnAHxVTxd2kLQI79KMEDDu5M~Zp2VPqirIEHJAQ3RsFuFbkVjtcZuAFC7F6cEdjZMK6ZDWvRtc98m2hZOKpqbfuJvJSntIuyGLOor1jLjLPi8smZlmB3DVf0eX~Rt271lyKzN-QvB~ZSlyvkWmMpCV7G0I0dFscJvcbEHX-UdXYB6NgL~qQSqM84vhzBi7fqVT08VJrLMUApvr9673M8zYQWcBXDxgxCc3G4LRM6swoDKXJYxy2xddLMbh8Muz6DKfjQ-ZHh~3xHcCQ3TEjYg-TGtdZsg__"
                                alt="Office collaboration"
                                className="w-full h-[29vw] lg:h-[28%] rounded-lg object-cover"
                            />
                            <img
                                src="https://s3-alpha-sig.figma.com/img/5677/6f34/4ffbb50a38826f4b5e65763b80fa2c18?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DRZDL0WHc6gmFm2JWMY5pB6knOnGNuZbRczXtYyrPglFCwB5rObaPBwOXndE-6CRpx-6e68X23-fSRiOEWe4JK7XFy7c8bgE4lqS~dCCvROfTPQHxqmGdMU2TrxWFBWMc5GvbYhBunnHFSFjkAFwGFZ0fdxX8KvKJRT-sDjKAGYY-KzntMigd95m5M1OL7DpddFI0P-WndQxT1ihppBoC5ZErhWY1-eAvRdfsunZFMhrFajkyvWBF6HHtFl3RDMBr7fRjVKsHMrbMjJSoVJDv3LqC0JXhIqOEHBoq6Nyhf4wxuyUApAcxHK6NOsaUzLSk0adSybk7uev3aecp-FgAA__"
                                alt="Team celebration"
                                className="w-full h-[29vw] lg:h-[28%] rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:col-span-1 lg:pl-5 mt-10">
                    {/* Tech We Used Section */}
                    <div className="mb-8">
                        <h2 className="text-lg lg:text-2xl font-semibold mb-4">Tech we used</h2>
                        <p className="text-gray-600 text-sm lg:text-base mb-4">
                            Learn about the technology and tools that Zend uses.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="text-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/9b15/48f9/1070cc526fd14606a54e7368f453626d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eNzrbJcRQlwuH1c4rbj4nlpYPWuI56H0OJmq2ZiB96sJv3fDIC9tpypdAzA14yt2WmhbcfgV7DPYRlMRIzp1YLrSSwCQCdkGN4wRPqcfOgbxf~YMILzO9fxyN0f1g7zzAq0X9lcm9ipPVYBHVGaPuhmc1ILhMt1uenkIflEUJ9g12EdQK-vCeHnU3uZiyN3suyQeRPl~rjIbhFJbSOThpy-RfOnBMwbkd5YIIo1izCfbdgcFVvJ5FSS9YFaPAi0CXgOGT9BLWqOJGwSyQeK6Y6atbF~yEXCEsT6PqTJ6Lm6DfaJbKkpqwQM0kTMvpb04PDl0RVkQ9Qaxjc9gkOTz7A__"
                                    alt="HTML5"
                                    className="mx-auto w-10 h-10 rounded-full"
                                />
                                <p className="text-sm mt-2">HTML 5</p>
                            </div>
                            <div className="text-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/e8b8/a1f7/1cfd21e937f80dc1d808f8451d163543?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jbK9lF8aX3dQQuridYe2PwFBmwBw0qFPqOnBi3MVAU1YKG1UYl~sPpatArYkz1GEI2wbQPusFb61IqvtjfKCpYv9zm8pG4EUyKPn0Fir4ATUGBWwb9ymhmOao2dq57tv5cKdGiU056SG6je7YWn0SFS5BsqZkyBXvjoLRBDPCP0FeL2PXzUhcob78NRdbYd9mIbmfgkj16Jg4uXLlNWyoReLTWI2eBSebzAeaCi6aBRRMCaYChWF1wDEWFimB9G8E7Q8ibV2RmCJe-aQrSrMgXw58sTCc9UBVwRUNiCrvaBX5dzHYaqsVoCGGL7aTU4fjUJhSYfvn3mIYrdNpnFLvQ__"
                                    alt="CSS3"
                                    className="mx-auto w-10 h-10 rounded-full"
                                />
                                <p className="text-sm mt-2">CSS 3</p>
                            </div>
                            <div className="text-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/f4c1/c786/27dceb09149c25a7e34cd5165addcddf?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DjbpbTHEivePAZRv2EfUrHZlez-zqROvQZEmXWExRg7ZjF-3eQbtWjEhpIXqC-~OCTkzt-5c2l0TDyOo5l3Hqj~hLToL0nWmOfNHrxgAgFx-B~sKMSSOPmH3QDnLwOiWXDDKsOGkGx-3sJIBLK6TzbRnUR-OlYMgwgz~iLGRJgPdTieJroiKyQP2Ym1JEjSqO~0fiqvZY9RmpopKckTDu-fAYUl8vg0Jlvz5PS0NPNeRG~mWfaPNClYPKaouCbnc4cM9JiN7aujhoHMcHL2c23GCUIEWRGljkFUkd-M-R-45DZ7PlACZl4ylYSsLywQ-ERdYqZr83xsrrs6JaHXEmg__"
                                    alt="JavaScript"
                                    className="mx-auto w-10 rounded-full"
                                />
                                <p className="text-sm mt-2">JavaScript</p>
                            </div>
                            <div className="text-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/6876/d3d9/05b4506a07ba1d45a9a3f6d93c043142?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VSDmOe-bJmvexja-BtGdTQ3yGbkhj9UBdtPWT5mzRPqlD4kmN7Ghsi0gTpsUP31~qGP7cL7JuEJuosKdz-WRS2fuKbLV0oUjDRxBcHHOd78I7rOLA8-qXRxPqEa~-98Fc4W~wgJdjdQKhFvcmgTPh0BGIeW90DyTZSs1tTVdG66pPBDCLCl8vZznANdRTK158kQNKJu~JvdZdBAHdg~s0CxMlPY5lnGT5t858X7glYO9bkEkYZxsCmU~sw4h7XH-CmpEKrpvUePKTEBwhL7TpCfmSpVnVGvxs~I3~rwh2mfpnwqwBo~obopZEJhDX0xlOUy~zgrKBY-9B8nvQh21wQ__"
                                    alt="Figma"
                                    className="mx-auto w-10 h-10 rounded-full"
                                />
                                <p className="text-sm mt-2">Figma</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <div className="text-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/e2d4/2f8b/53b4102535a68099e68b50a67fbc4f57?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=baPH6oqsogAR-AztgeAF~PW-VmJUDCkgr7bhSGRt70yBgNJFw0otL58NDeURwPCPUHV~KowPdA~e7isXX0vtCUWwm9CRsC8RmFGGNTrr2-aP6trT98L6uIgt-hDFby9NCi-Pg8yzacklz9no-6rgANUXOnTKYMLwIq2ERBPMupMVwGhqRTOSuQHn9iuxSWFn33SdEbfpyET7JpGt~9nGhfDX5AbZ98HpYnOmTtFC5QVN1xG-MFgQm-j4R~9GOoYgdL~rHCE67~ikDblz-2jjlY3RDSoF5Np~Vov9GRllINVKAh0MovW0~0k3XIMJwLQ93qte1~6wWSMROI0-aSsR-Q__"
                                    alt="HTML5"
                                    className="mx-auto w-10 h-10 rounded-full"
                                />
                                <p className="text-sm mt-2">Wix</p>
                            </div>
                            <div className="text-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/00cc/c769/56c56f456eea9285ea99ad4a36444e10?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fvfoz8HpVn-k7jx1yRwehIp9GcbZ~7LvcbqHdOSaOAthTAIvpcQ~b7AlcA4fpTPnp0FIM6HzDl7IGMNZlCR3Jdp1B4maAW5X3Fyw9YdwEtZ~tLu2GeStc89hHtvTX0i5fu5YI1o1az32FjXaE0Maa3ohYuyGgpb9o00nYGsX6nZNFb1U6YS-pW4qNQSbY295utTgHRSuzb8E88JOaQvGrpo7HosNp98XikazHDJhaPqky2ABWB4rzPZC7FDLazi0XbAa8ibSyd1jZUGWLFnGbXoTPy9IWj0~i9Zf32IrIUtKkTx2rEjYOTpcFOtrD2UXEHkv5Xc~5PTefZu5F-xzbA__"
                                    className="mx-auto w-10 h-10 rounded-full"
                                />
                                <p className="text-sm mt-2">Framer</p>
                            </div>
                        </div>
                        <a href="#" className="text-blue-600 hover:underline mt-4 block">
                            View tech stack →
                        </a>
                    </div>

                    {/* Office Location Section */}
                    <div className="mt-10">
                        <h2 className="text-lg lg:text-xl font-semibold mb-4">Office Location</h2>
                        <p className="text-gray-600 text-sm lg:text-base mb-4">
                            Zend offices spread across 20 countries.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/9433/1067/5f8418ac8aa507933edc8cd67c953f2b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U5tT5F69D8FudbaFiWPPSTkqDmXbFnQZkX9WK6z9Tl-eYwmWL2Wy~0Ce0QD~VP9oCQ~85SNvG9-XxPqzW-UdcZ6d6v48Dt7uOFNsGtfT2IzhhopT9ZdB9fiKjirmArQw3~lySiyaKyKbmNAedDVE991UZoN~QxJzybneTC-QqzSBusgsduPdF3qfoLIuwv9v6piKpcwYdRbKJzPTrcPqiySDUN~Z4qxO1nGfMq6fuz1iGNj0T7hZCJhIrfow9frm5sICwWq~djrpni6KSpi7zq~SSrx1d~VYU6Eb809B8Rk8tEZhhX~nBA5V9x7oSlLeRYi-1se5UZPVULwsbpUF4g__" alt="" className="w-[40px] h-[30px] mr-2" />     India
                            </li>
                            <li className="flex items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/0d54/a456/168711eda9779cabadd7773e1225e639?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tXWMI9qQnhMgdWx3BpSdwNgj9lMizd9u6l5n-47fnLvPE3UQy~OCmBiMYgM2tCGPKNRHpIpFuqG4fv-TJ9rUMxOxDcE1J4PXCbfZyjZDiO9qho9PXkMgqor4O4bUvn02epZyXCybyFxQeQjpVSUoz1LC6lX4SM9u~ZxYVQNLlQ0AQRFQ3eRrUsJjmtUTOUy3JW1oQmVmmz3m3Efk5bFzPhOyosetc~sLyM9GHT~Ws79EGIHe-rep06ShMmpR77m00zA41YB1rBosn7L5nLeHaXL7oPBFVSd0E3ekZq2EizzFJPNsE8Q4sCe18I49oyiUj5rWjpcq4LKBhlo8K2CUxw__" alt="" className="w-[40px] h-[30px] mr-2" /> Russia
                            </li>
                            <li className="flex items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/f2db/6a24/25d3da41df2fea9f4efef979c14634bc?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYZSgC4lO9mIuN3z7bKgxqwAVMpH4saTjZ45Ro8RuwLkhL6rtuCxApqNV-zMhiGo~FH6dMLFITg-z2fi2KqYfP010ClEUN6OZstwiFyU9QuS~z7AiwStGpbAvWkmaZVwsacYblB5xx0WluWsWUpiZoHpvisckvXRL~tPoHE70KJwW80CRQH1uPFbcqjH~b3c6GtFsJoRbrOTTqiR8Z2cplekrE5v3OdgQPp170Su6PtXf4JLttKAN6MApMATn-3doJYrSAzQPcOVS2H0zSdDAplTee-DgT0Lh9cuhC8g4xTx6NQIvhlDiJjZBh9fDzE41hgC839fXjj8bqN84IpUHg__" alt="" className="w-[40px] h-[30px] mr-2" /> England
                            </li>
                        </ul>
                        <a href="#" className="text-blue-600 hover:underline mt-4 block">
                            View Countries →
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 p-6 bg-gray-100 text-center">
                <div className="p-15 bg-white-50 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h2 className="text-4xl">Our Team</h2>
                        <a href="#" className="text-blue-500 text-sm mt-2 sm:mt-0">
                            See all (16)
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                socialLinks={member.socialLinks}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white-100 w-full bg-gray-100 text-start ">
                <h2 className="text-4xl  mb-6 ml-20 ">Open Jobs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[90%] mx-auto"> {/* Added max-width and centering */}
                    {jobs.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProfilePage
