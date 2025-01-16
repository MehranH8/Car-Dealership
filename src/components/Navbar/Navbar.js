import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import "./Navbar.css"
import { IoClose } from "react-icons/io5";
import { PiMotorcycleFill } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus, FaTruck } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";




const Navbarmain = () => {
    {/*navbar data */ }
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link to="/">
                <li className="text-[18px] hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue sm:text-[16px]">
                    خانه
                </li>
            </Link>
            <Link to="/cars">
                <li className="text-[18px] hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue sm:text-[16px]">
                    خودرو
                </li>
            </Link>
            <Link to="/bikes">
                <li className="text-[18px] hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue sm:text-[16px]">
                    موتور سیکلت
                </li>
            </Link>
            <Link to="/blog">
                <li className="text-[18px] hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue sm:text-[16px]">
                    بلاگ
                </li>
            </Link>
        </ul>
    );
    {/*navbar data */ }
    {/*car */ }
    const carmenu = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link to="/cars">
                <li className=" text-black mb-3 pb-1 hover:text-mainblue flex gap-x-3 transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue text-[16px]">
                    <span className="my-auto text-[20px]">
                        <FaCar />
                    </span>
                    خرید خودرو
                </li>
            </Link>
            <Link to="/posting">
                <li className=" flex gap-x-3 mb-3 text-black pb-1 hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue text-[16px]">
                    <span className="my-auto text-[20px]">
                        <FaPlus />
                    </span>
                    ثبت آگهی
                </li>
            </Link>
            <Link to="/blog">
                <li className=" flex gap-x-3 mb-3 text-black pb-1 hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue text-[16px]">
                    <span className="my-auto text-[20px]">
                        <HiSpeakerphone />
                    </span>
                    اخبار خودرو
                </li>
            </Link>

        </ul>
    );
    {/*car */ }
    {/*bike */ }
    const bikemenu = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link to="/bikes">
                <li className=" text-black mb-3 pb-1 hover:text-mainblue flex gap-x-3 transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue text-[16px]">
                    <span className="my-auto text-[20px]">
                        <PiMotorcycleFill />
                    </span>
                    خرید موتور سیکلت
                </li>
            </Link>
            <Link to="/posting">
                <li className=" flex gap-x-3 mb-3 text-black pb-1 hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue text-[16px]">
                    <span className="my-auto text-[20px]">
                        <FaPlus />
                    </span>
                    ثبت آگهی
                </li>
            </Link>
            <Link to="/blog">
                <li className=" flex gap-x-3 mb-3 text-black pb-1 hover:text-mainblue transition-all duration-200 border-b-[2px] px-1 border-white hover:border-mainblue text-[16px]">
                    <span className="my-auto text-[20px]">
                        <HiSpeakerphone />
                    </span>
                    اخبار موتور سیکلت
                </li>
            </Link>

        </ul>
    );
    {/*bike */ }

    {/*drawer data */ }
    const data = [
        {
            label: "سواری",
            value: "car",
            desc: carmenu
        },
        {
            label: "موتور",
            value: "bike",
            desc: bikemenu
        },
    ];
    {/*drawer data */ }


    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);


    const [activeTab, setActiveTab] = React.useState("car");

    return (
        <div className="sticky top-0 h-fit z-[99999] bg-white ">
            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
            >
                <div
                    onClick={closeDrawerRight}
                    className="text-[26px] sm:text-[32px] flex justify-between mb-8 "
                >
                    <Link to="/">
                        <h2 className="text-[20px] sm:text-[24px] font-bold text-mainblue mt-1 my-auto mr-2">
                            LOGO
                        </h2>
                    </Link>
                    <span className="bg-white hover:bg-maingrey transition-colors duration-200 p-1 rounded-md">
                        <IoClose />
                    </span>

                </div>
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-gray-900" : ""}
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
                <div className="mx-6">
                    <Link to="/posting">
                        <button className="w-full bg-mainblue border-[3px] border-mainblue hover:bg-white transition-colors duration-300 hover:text-mainblue text-white py-1.5 rounded flex gap-x-2 justify-center" type="button">
                            <span className="my-auto">
                                <FaPlus />
                            </span>
                            ثبت آگهی
                        </button>
                    </Link>
                </div>
            </Drawer>
            <Navbar className=" shadow-sm h-max border-b-[1px] border-maingrey max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div>
                        <div className="mr-4 lg:block hidden ">{navList}</div>
                        {/*drawer */}
                        <button type="button" className="text-[28px] lg:hidden" onClick={openDrawerRight}><IoMenu /></button>
                        {/*drawer */}
                    </div>
                    <div className="absolute hidden sm:block left-[80%] md:left-[85%] lg:left-[50%] lg:translate-x-[-50%] ">
                        <Link to="/">
                            <h2 className="text-[20px] font-bold text-mainblue ">LOGO</h2>
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <Link to="/posting">
                            <button className=" gap-x-1 hidden sm:flex hover:text-mainblue transition-colors duration-200 border-b-[2px] border-white hover:border-mainblue pb-1 px-1" type="button">
                                <span className="my-auto text-[18px]">
                                    <GrUserManager />
                                </span>
                                حساب من
                            </button>
                        </Link>
                        <Link to="/posting">
                            <button className="border-[1px] text-[14px] sm:text-[16px] border-maingrey hover:bg-maingrey transition-colors duration-200 flex gap-x-2 rounded-3xl px-3 py-1.5 " type="button">
                                <span className="my-auto bg-mainblue rounded-full text-white p-1">
                                    <FaPlus />
                                </span>
                                ثبت آگهی
                            </button>
                        </Link>
                    </div>
                </div>

            </Navbar>
        </div>
    )
}


export default Navbarmain