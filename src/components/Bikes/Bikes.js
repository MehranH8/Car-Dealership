import Postcard from "../../UI/Postcard/Postcard";
import React from "react";
import { useState } from "react";
import bike1 from "../../img/bike1.jpg"
import bike2 from "../../img/bike2.jpg"
import bike3 from "../../img/bike3.jpg"
import bike4 from "../../img/bike4.jpg"
import bike5 from "../../img/bike5.jpg"
import bike6 from "../../img/bike6.jpg"
import bike7 from "../../img/bike7.jpg"
import bike8 from "../../img/bike8.jpg"
import bike9 from "../../img/bike9.jpg"
import bike10 from "../../img/bike10.jpg"
import bike11 from "../../img/bike11.jpg"
import {
    Card,
    Typography,
    List,
    ListItem,
    Select, Option, IconButton, Dialog
} from "@material-tailwind/react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Bikes = () => {

    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    const [bikes, setbikes] = useState({
        data: [
            [bike1,"کی تی ام، دوک 250","1402","5,000","","بندر عباس","130,000,000","/bikes/detail/1"],
            [bike2,"بنلی، TNT 150","1402","11,000","","تهران","80,000,000","/bikes/detail/2"],
            [bike3,"گلکسی R155","14002","5,000","","یزد","91,000,000","/bikes/detail/3"],
            [bike4,"روان سیکلت، تریل 200","1399","10,000","","شیراز","130,000,000","/bikes/detail/4"],
            [bike5,"یاماها، NMAX 155","1403","0","","کرمان","100,000,000","/bikes/detail/5"],
            [bike6,"کاوازاکی، بروت فورس 300","1401","3,000","","تهران","380,000,000","/bikes/detail/6"],
            [bike7,"اس وای ام، گلکسی SR 200","1402","0","","همدان","140,000,000","/bikes/detail/7"],
            [bike8,"4باجاج، پالس 180","2015","40,000","","اصفهان","75,000,000","/bikes/detail/8"],
            [bike9,"کویر موتور، T4 200","1400","36,000","","شیراز","85,000,000","/bikes/detail/9"],
            [bike10,"کاوازاکی، نینجا ZX-25R","1402","0","","بوشهر","1,220,000,000","/bikes/detail/10"],
            [bike11,"دینو، CL 150","1402","0","","اصفهان","700,000,000","/bikes/detail/11"],
        ]
    })

    return (
        <div className="mt-10 md:mt-16 mx-8 sm:mx-16 xl:mx-32">
            <div className="lg:hidden mb-8">
                <h2 className="text-[16px] text-center sm:text-start sm:text-[18px] md:text-[20px] font-bold">خرید و فروش موتور سیکلت</h2>
            </div>
            <div className="flex flex-col gap-y-4 sm:flex-row mb-6 justify-between">
                <div className="hidden lg:block">
                    <h2 className="text-[20px] font-bold">خرید و فروش موتور سیکلت</h2>
                </div>
                <div className="lg:hidden">
                    <button className="bg-mainblue w-full sm:w-fit border-[3px] border-mainblue px-6 hover:bg-white transition-colors duration-300 hover:text-mainblue text-white py-1.5 rounded" onClick={handleOpen} variant="gradient">
                        فیلتر ها
                    </button>
                    <Dialog className="mt-20 " size="xs" open={open} handler={handleOpen}>
                        <Card className="mx-auto w-full max-w-[20rem] p-4 shadow-none rounded-none pt-6">
                            <List>
                                <div className="mb-4">
                                    <Select arrow="" className="" label="برند و مدل">
                                        <Option>بنز</Option>
                                        <Option>بی ام و</Option>
                                        <Option>بی وای دی</Option>
                                        <Option>ایران خودرو</Option>
                                        <Option>سایپا</Option>
                                        <Option>جک</Option>
                                        <Option>پاژن</Option>
                                        <Option>پورشه</Option>
                                        <Option>کی ام سی</Option>
                                        <Option>تویوتا</Option>
                                        <Option>کیا</Option>
                                        <Option>هیوندای</Option>
                                        <Option>هوندا</Option>
                                        <Option>رنو</Option>
                                        <Option>شورلت</Option>
                                        <Option>لکسوس</Option>
                                        <Option>مزدا</Option>
                                        <Option>مازراتی</Option>
                                        <Option>کادیلاک</Option>
                                        <Option>فیدلیتی</Option>
                                    </Select>
                                </div>
                                <div className="mb-8">
                                    <Select arrow="" label="شهر">
                                    <Option>بنلی</Option>
                                    <Option>کاوازاکی</Option>
                                    <Option>آپریلیا</Option>
                                    <Option>اس وای ام</Option>
                                    <Option>باجاج</Option>
                                    <Option>تندرشهاب</Option>
                                    <Option>پرواز</Option>
                                    <Option>پیاجیو</Option>
                                    <Option>پیشتاز موتور</Option>
                                    <Option>اودز</Option>
                                    <Option>تی وای اس</Option>
                                    </Select>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2">
                                        <span>قیمت</span>
                                    </div>
                                    <div className="flex gap-x-3">
                                        <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="0" />
                                        <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="3,000,000,000" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2">
                                        <span>سال</span>
                                    </div>
                                    <div className="flex gap-x-3">
                                        <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="1370" />
                                        <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="1403" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2">
                                        <span>کاکرد</span>
                                    </div>
                                    <div className="flex gap-x-3">
                                        <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="0" />
                                        <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="50,000" />
                                    </div>
                                </div>
                                <div>
                                    <button onClick={handleOpen} className="w-full bg-mainblue border-[3px] border-mainblue hover:bg-white transition-colors duration-300 hover:text-mainblue text-white py-1.5 rounded justify-center" type="button">
                                        ثبت فیلتر
                                    </button>
                                </div>
                            </List>
                        </Card>
                    </Dialog>
                </div>
                <div className="">
                    <Select arrow="" className="" label="ترتیب آگهی">
                        <Option className="text-[12px] px-0 sm:px-3 sm:text-[14px]">جدید ترین</Option>
                        <Option className="text-[12px] px-0 sm:px-3 sm:text-[14px]">قدیمی ترین</Option>
                        <Option className="text-[12px] px-0 sm:px-3 sm:text-[14px]">ارزانترین</Option>
                        <Option className="text-[12px] px-0 sm:px-3 sm:text-[14px]">گرانترین</Option>
                        <Option className="text-[12px] px-0 sm:px-3 sm:text-[14px]">بیشترین کارکرد</Option>
                        <Option className="text-[12px] px-0 sm:px-3 sm:text-[14px]">کمترین کارکرد</Option>
                    </Select>
                </div>
            </div>
            <div className="flex gap-x-10">
                <div className="hidden lg:block sticky top-20 mb-10 h-fit">
                    <Card className=" w-full max-w-[20rem] p-4 shadow-none rounded-none border-[1px] border-maingrey">
                        <div className="mb-2 p-4">
                            <Typography variant="h5" color="blue-gray">
                                فیلتر ها
                            </Typography>
                        </div>
                        <List>
                            <div className="mb-4">
                                <Select arrow="" className="" label="برند و مدل">
                                    <Option>بنلی</Option>
                                    <Option>کاوازاکی</Option>
                                    <Option>آپریلیا</Option>
                                    <Option>اس وای ام</Option>
                                    <Option>باجاج</Option>
                                    <Option>تندرشهاب</Option>
                                    <Option>پرواز</Option>
                                    <Option>پیاجیو</Option>
                                    <Option>پیشتاز موتور</Option>
                                    <Option>اودز</Option>
                                    <Option>تی وای اس</Option>
                                </Select>
                            </div>
                            <div className="mb-8">
                                <Select arrow="" label="شهر">
                                    <Option>تهران</Option>
                                    <Option>تبریز</Option>
                                    <Option>مشهد</Option>
                                    <Option>شیراز</Option>
                                    <Option>کرمان</Option>
                                    <Option>یزد</Option>
                                    <Option>اصفهان</Option>
                                    <Option>بوشهر</Option>
                                    <Option>کیش</Option>
                                    <Option>قشم</Option>
                                    <Option>بندرعباس</Option>
                                    <Option>هرمزگان</Option>
                                    <Option>سیستان و بلوچستان</Option>
                                    <Option>کرمانشاه</Option>
                                    <Option>لرستان</Option>
                                    <Option>کردستان</Option>
                                    <Option>همدان</Option>
                                    <Option>کرج</Option>
                                    <Option>سمنان</Option>
                                    <Option>اراک</Option>
                                </Select>
                            </div>
                            <div className="mb-6">
                                <div className="mb-2">
                                    <span>قیمت</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="0" />
                                    <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="3,000,000,000" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="mb-2">
                                    <span>سال</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="1370" />
                                    <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="1403" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="mb-2">
                                    <span>کاکرد</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="0" />
                                    <input className="border-[1px] border-maingrey max-w-[120px] py-3 px-1" type="text" placeholder="50,000" />
                                </div>
                            </div>
                            <div>
                                <button className="w-full bg-mainblue border-[3px] border-mainblue hover:bg-white transition-colors duration-300 hover:text-mainblue text-white py-1.5 rounded justify-center" type="button">
                                    ثبت فیلتر
                                </button>
                            </div>
                        </List>
                    </Card>
                </div>
                <div className="w-full">
                    {bikes.data.map((item) => (
                        <Postcard link={item[7]} img={item[0]} title={item[1]} date={item[2]} run={item[3]} detail={item[4]} place={item[5]} price={item[6]} />
                    ))}
                    <div className="flex items-center gap-8 mb-20 justify-center">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <FaChevronRight strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                        <Typography color="gray" className="font-normal">
                            صفحه <strong className="text-gray-900">{active}</strong> از{" "}
                            <strong className="text-gray-900">10</strong>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={next}
                            disabled={active === 10}
                        >
                            <FaChevronLeft strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bikes