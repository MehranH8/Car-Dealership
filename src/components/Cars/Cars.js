import Postcard from "../../UI/Postcard/Postcard";
import React from "react";
import { useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    Select, Option, IconButton, Dialog
} from "@material-tailwind/react";
import car1 from "../../img/car1.jpg"
import car2 from "../../img/car2.jpg"
import car3 from "../../img/car3.jpg"
import car4 from "../../img/car4.jpg"
import car5 from "../../img/car5.jpg"
import car6 from "../../img/car6.jpg"
import car7 from "../../img/car7.jpg"
import car8 from "../../img/car8.jpg"
import car9 from "../../img/car9.jpg"
import car10 from "../../img/car10.jpg"
import car11 from "../../img/car11.jpg"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Cars = () => {

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


    const [cars, setcars] = useState({
        data: [
            [car11,"پژو 405","1382","375,000","glx بنزینی","بندر عباس","255,000,000","/cars/detail/1"],
            [car1,"تویوتا کمری","2016","94,000","glx","تهران","4,200,000,000","/cars/detail/2"],
            [car2,"تویوتا هایلوکس","2022","20,000","اتوماتیک","یزد","12,000,000,000","/cars/detail/3"],
            [car3,"رنو مگان","1388","89,000","e1-1600","شیراز","850,000,000","/cars/detail/4"],
            [car4,"فولکس تیگوان","2018","240,000","اتوماتیک","کرمان","3,950,000,000","/cars/detail/5"],
            [car5,"تویوتا پرادو چهار در","2011","116,000","6 سیلندر","تهران","9,700,000,000","/cars/detail/6"],
            [car6,"فونیکس fx","1403","0","پریمیوم","همدان","2,100,000,000","/cars/detail/7"],
            [car7,"تویوتا لوین","2024","0","1.8","اصفهان","2,850,000,000","/cars/detail/8"],
            [car8,"شاهین G","1403","0","cvt","شیراز","900,000,000","/cars/detail/9"],
            [car9,"گریت وال","1392","352,000","دهنده ای","بوشهر","620,000,000","/cars/detail/10"],
            [car10,"دنا پلاس","1397","180,000","5 دنده","اصفهان","720,000,000","/cars/detail/11"],
        ]
    })

    return (
        <div className="mt-10 md:mt-16 mx-8 sm:mx-16 xl:mx-32">
            <div className="lg:hidden mb-8">
                <h2 className="text-[16px] text-center sm:text-start sm:text-[18px] md:text-[20px] font-bold">خرید و فروش خودرو</h2>
            </div>
            <div className="flex flex-col gap-y-4 sm:flex-row mb-6 justify-between">
                <div className="hidden lg:block">
                    <h2 className="text-[20px] font-bold">خرید و فروش خودرو</h2>
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
                    {cars.data.map((item) => (
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

export default Cars