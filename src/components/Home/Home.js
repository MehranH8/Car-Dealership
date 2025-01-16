import { FiSearch } from "react-icons/fi";
import React from 'react';
import { Select, Option } from "@material-tailwind/react";
import "./Home.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";



const Home = () => {
    {/*first owl carousel */ }
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    };
    {/*first owl carousel */ }
    {/*second owl carousel */ }
    const seccondoptions = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2000,
        smartSpeed: 7500,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            800: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    };
    {/*second owl carousel */ }


    return (
        <div >
            <div className="relative">
                <div className="bg-bggrey pt-20 pb-36">
                    <div className="mx-8">
                        <div className="mb-6">
                            <h1 className="text-[28px] sm:text-[30px] text-mainblue font-bold text-center">
                                خرید خودرو
                            </h1>
                        </div>
                        <div className="max-w-max mx-auto">
                            <div className="flex relative max-w-full">
                                <input placeholder="جستوجو خودرو ..." className="placeholder:text-[16px] mb-4 placeholder:font-normal placeholder:text-textgrey py-3 px-6 bg-white rounded-3xl w-full max-w-[650px]" type="text"></input>
                                <button className="absolute left-5 top-[23%] text-[20px]" type="button">
                                    <FiSearch />
                                </button>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-y-3 gap-x-2">
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">کارکرده</button>
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">اقساطی</button>
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">صفر</button>
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">اتوماتیک</button>
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">هیبرید</button>
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">کلاسیک</button>
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">آفرود</button>
                                <button className="border-[1px] border-maingrey rounded-3xl py-1 px-3 text-textgrey text-[14px]" type="button">لوکس</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-28">
                        <OwlCarousel className="owl-container" {...options}>
                            <div key={1}>
                                <Link to="/cars">
                                    <img className="max-w-[250px]" src="https://cdn-thra.bama.ir/assets/body_types/passenger_car.png" alt="car-img" />
                                    <h5 className="text-center mt-3">سدان</h5>
                                </Link>
                            </div>
                            <div key={2}>
                                <Link to="/cars">
                                    <img className="max-w-[250px]" src="https://cdn-thra.bama.ir/assets/body_types/suv.png" alt="car-img" />
                                    <h5 className="text-center mt-3">شاسی بلند</h5>
                                </Link>
                            </div>
                            <div key={3}>
                                <Link to="/cars">
                                    <img className="max-w-[250px]" src="https://cdn-thra.bama.ir/assets/body_types/hatchback.png" alt="car-img" />
                                    <h5 className="text-center mt-3">هاچبک</h5>
                                </Link>
                            </div>
                            <div key={4}>
                                <Link to="/cars">
                                    <img className="max-w-[250px]" src="https://cdn-thra.bama.ir/assets/body_types/pickup.png" alt="car-img" />
                                    <h5 className="text-center mt-3">وانت</h5>
                                </Link>
                            </div>
                            <div key={5}>
                                <Link to="/cars">
                                    <img className="max-w-[250px]" src="https://cdn-thra.bama.ir/assets/body_types/coupe.png" alt="car-img" />
                                    <h5 className="text-center mt-3">کوپه</h5>
                                </Link>
                            </div>
                            <div key={6}>
                                <Link to="/cars">
                                    <img className="max-w-[250px]" src="https://cdn-thra.bama.ir/assets/body_types/convertible.png" alt="car-img" />
                                    <h5 className="text-center mt-3">کروک</h5>
                                </Link>
                            </div>
                            <div key={7}>
                                <Link to="/cars">
                                    <img className="max-w-[250px]" src="https://cdn-thra.bama.ir/assets/body_types/van.png" alt="car-img" />
                                    <h5 className="text-center mt-3">ون</h5>
                                </Link>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                <div className="bg-white absolute gap-y-8 flex sm:flex-row flex-col justify-between gap-x-8 w-[85%] md:w-[70%] xl:w-[50%] -bottom-[10%] left-[50%] translate-x-[-50%] border-[1px] border-maingrey py-10 px-4 sm:px-12">
                    <div className="flex flex-col gap-y-1 w-full sm:w-[65%]">
                        <label className="text-[14px] text-textgrey">
                            برند ماشین
                        </label>
                        <select className="hover:cursor-pointer w-full py-3 px-2 border-b-[1px] border-maingrey" label="برند ماشین">
                            <option>بنز</option>
                            <option>بی ام و</option>
                            <option>بی وای دی</option>
                            <option>ایران خودرو</option>
                            <option>سایپا</option>
                            <option>جک</option>
                            <option>پاژن</option>
                            <option>پورشه</option>
                            <option>کی ام سی</option>
                            <option>تویوتا</option>
                            <option>کیا</option>
                            <option>هیوندای</option>
                            <option>هوندا</option>
                            <option>رنو</option>
                            <option>شورلت</option>
                            <option>لکسوس</option>
                            <option>مزدا</option>
                            <option>مازراتی</option>
                            <option>کادیلاک</option>
                            <option>فیدلیتی</option>
                        </select>
                    </div>
                    <button className="bg-mainblue mx-auto sm:mx-0 hover:bg-opacity-85 transition-all duration-200 flex gap-x-2 min-w-[180px] max-w-[200px] w-[50%] text-white py-2 justify-center max-h-[40px] my-auto px-5 rounded-3xl" type="button">
                        <span className="my-auto">
                            <svg className="w-[20px]" viewBox="0 0 24 24" data-v-62118a93="" data-v-72d81236=""><path d="m19 4-.48-.13a24.87 24.87 0 0 0-13.04 0L5 4 3.02 8.99H1v2h1.69a5.996 5.996 0 1 0 7.34 9.44l3.28 3.26 1.41-1.42-3.32-3.3c.2 0 .4.03.61.03 2.39 0 4.73-.36 7-1.04V21h2V11h2V9h-2.02l-1.98-4.99ZM6.49 5.67c3.6-.9 7.42-.9 11.03 0l1.32 3.32H5.17zM6 19.99c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m13-6.59-2.39 1.59h-4.7c-.12-.72-.37-1.39-.72-2h4.82l3-1.99v2.4Z" fill="currentColor"></path></svg>
                        </span>
                        <Link to="/cars">
                            <span className="my-auto sm:text-[16px] text-[14px]">
                                نمایش آگهی ها
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
            <div className="mx-8 sm:mx-16 flex justify-between mt-28">
                <div className="my-auto">
                    <h4 className="text-[14px]  sm:text-[16px] font-bold">محبوبترین مدل ها</h4>
                </div>
                <div>
                    <Link to="/cars">
                        <button className="text-mainblue  text-[12px] sm:text-[14px]" type="button">مشاهده همه</button>
                    </Link>
                </div>
            </div>
            <div className="mx-8 sm:mx-16 mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center gap-y-6 gap-x-4">
                <img src="https://bama.ir/images/popularModels/04.jpg" alt="brand-img" />
                <img src="https://bama.ir/images/popularModels/10.jpg" alt="brand-img" />
                <img src="https://bama.ir/images/popularModels/15.jpg" alt="brand-img" />
                <img src="https://bama.ir/images/popularModels/18.jpg" alt="brand-img" />
                <img src="https://bama.ir/images/popularModels/01.jpg" alt="brand-img" />
                <img src="https://bama.ir/images/popularModels/13.jpg" alt="brand-img" />
            </div>
            <div className="px-8 sm:px-16 mt-16 bg-bggrey py-10">
                <div className="flex justify-between">
                    <div>
                        <h4 className="text-[14px] sm:text-[16px] font-bold">قیمت روز خودرو</h4>
                    </div>
                    <div>
                        <Link to="/cars">
                            <button className="text-mainblue text-[12px] sm:text-[14px]" type="button">مشاهده همه</button>
                        </Link>
                    </div>
                </div>
                <div className="mt-10">
                    <OwlCarousel className="secondowl" {...seccondoptions}>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M17.82 15.63h-5.33V8.36h1.65v5.62h3.68c1.12 0 2.03-.91 2.03-2.03v-1.37h1.65v1.37c0 2.03-1.65 3.68-3.68 3.68M4.15 8.37H2.5v7.27h1.65zm7.54 3.58v-1.78h-1.65v1.78c0 1.12-.91 2.03-2.03 2.03H5.02v1.65h2.99c2.03 0 3.68-1.65 3.68-3.68m9.81-3.58h-4.24v1.65h4.24z" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">تارا اتوماتیک</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">v2</p>
                            </div>
                            <div className="text-[14px]">
                                <span>930,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M10.23 6.85c.21-.42-.07-.85-.56-.85H6.81c-.32 0-.58.11-.77.37-.46.62-.93 1.24-1.39 1.86-.19.25-.19.43 0 .68.47.62.94 1.24 1.42 1.87.13.17.31.25.56.25.27-.03.53-.12.71-.36.9-1.16 1.8-2.33 2.69-3.49q.12-.15.21-.33m5.29.05c.15-.2.17-.41.07-.62-.11-.22-.31-.29-.56-.29h-1.4c-.44 0-.87.01-1.31 0s-.77.15-1.03.49c-.94 1.24-1.89 2.47-2.84 3.71-.36.47-.73.94-1.09 1.42-.24.32-.24.56 0 .87.43.58.86 1.16 1.3 1.74.21.29.58.39.92.24.15-.07.3-.19.4-.32 1.85-2.41 3.69-4.82 5.54-7.23m3.77 1.18c-.5-.64-1.01-1.27-1.52-1.91-.14-.17-.33-.23-.53-.15-.15.06-.32.15-.41.27-.78 1-1.55 2.02-2.32 3.03-1.46 1.92-2.93 3.85-4.39 5.78-.11.15-.17.33-.26.49.07.16.09.31.17.41.46.6.92 1.19 1.39 1.77.25.3.66.34.98.1.09-.07.17-.16.24-.25 2.21-2.86 4.41-5.72 6.62-8.58.28-.36.3-.6.01-.96" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">فوتون ون وانا</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>2,130,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M15.73 16.75c-1.28-1.33-2.49-2.59-3.73-3.88-1.25 1.3-2.46 2.56-3.72 3.88 2.52.85 4.94.85 7.45 0M12.1 6.64s-.03.08-.02.12c.22 1.21.44 2.43.69 3.64.02.1.24.22.36.22 2.04.01 4.08 0 6.12 0 .08 0 .16-.01.25-.02-.81-2.59-4.74-4.14-7.4-3.95m-7.59 3.98h6.46c.28 0 .29-.17.33-.35.16-.82.31-1.64.46-2.46.07-.4.14-.8.21-1.21-3.32-.11-6.86 1.8-7.46 4.01m11.3 6.04c2.81-.93 4.78-3.64 3.71-5.97l-6.2 1.3c.86 1.62 1.68 3.14 2.49 4.66m-5.12-4.67c-2.12-.44-4.17-.87-6.22-1.3-1 2.41.91 5 3.73 5.98.82-1.53 1.63-3.07 2.49-4.68m2.35-5.79c.73.12 1.47.2 2.2.36 1.74.37 3.35 1.03 4.69 2.24.88.8 1.49 1.74 1.57 2.97.07 1.06-.31 1.97-.98 2.77-1.09 1.31-2.53 2.08-4.12 2.55-3.61 1.07-7.15.92-10.57-.73a6.8 6.8 0 0 1-2.3-1.78c-1.35-1.62-1.36-3.58 0-5.19 1.2-1.42 2.79-2.19 4.54-2.65.84-.22 1.72-.31 2.58-.46.11-.02.22-.05.33-.08h2.07Z" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">جک s5</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">1.5 لیتر اتوماتیک</p>
                            </div>
                            <div className="text-[14px]">
                                <span>1,650,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m7.85 9c0 .94-.17 1.84-.48 2.67-5.85-1.99-6.27-8.74-6.27-10.44 3.81.54 6.75 3.81 6.75 7.76ZM10.9 4.24c0 1.69-.42 8.45-6.27 10.44-.3-.84-.48-1.73-.48-2.67 0-3.95 2.94-7.23 6.75-7.76ZM12 19.85a7.83 7.83 0 0 1-6.03-2.83c1.73-.91 7.36-3.36 11.73.35a7.82 7.82 0 0 1-5.71 2.47Zm5.89-2.68c-1.2-2.01-5.35-7.42-12.03-.31-.48-.61-.88-1.3-1.17-2.03 1.99 0 9.66-.66 6.33-10.61.32-.04.65-.07.98-.07s.66.03.98.07c-3.33 9.95 4.34 10.61 6.33 10.61a8 8 0 0 1-1.42 2.34" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">دیگنیتی پرستیژ</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>1,750,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M23 11.56v2.43h-1.22v-1.66a.58.58 0 0 0-1.16 0v1.66h-1.34V10.8h1.34v.51s.41-.74 1.76-.51.6.14.6.77ZM4.53 9.99 6.55 14H5.21l-.58-1.15H2.92L2.34 14H1l2.02-4.01zm-.29 2.08-.46-.92-.46.92zm5.16 1.94h1.39v-3.1H9.4zm-1.16-2.62v-.59H6.9v3.19h1.34v-1.87c.09-.13.35-.46.8-.45v-.76c-.49 0-.74.37-.8.48m9.36 1.04a.58.58 0 0 1-1.16 0v-1.66h-1.22v2.43c0 .63.56.75.6.76 1.35.24 1.76-.5 1.76-.5v.55h1.34v-3.23h-1.34v1.66Zm-6.34-.89c0 .36.18.56.37.68h.03c.08.06.15.09.22.11l1 .46s.63.32.12.52c0 0-.16.1-1.66-.1-.01 0-.17-.03-.18-.03V14h2.51s1.18.11 1.18-.77c0-.49-.32-.69-.57-.78l-1.04-.47s-.58-.26-.12-.52c0 0 .27-.18 1.66.1.01 0 .08.02.09.02v-.81h-2.42s-1.18-.11-1.18.77Zm-1.86-.95h1.39v-.6H9.4z" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">آریسان 2</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>470,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M13.01 13.58H10.6c.03-.21.05-.4.07-.6l-.1-.03-.26.62H2l.39-1.41H13.4zm8.89-1.45c-.12.46-.21.87-.36 1.25-.04.1-.27.18-.41.18-1.59.01-3.17.02-4.76 0-.37 0-.51.12-.57.46-.07.38-.18.75-.28 1.15h-1.47c.13-.52.26-1.01.4-1.57l-1.09-.06c.23-.69.4-1.37.68-1.99.1-.22.47-.41.73-.44.6-.07 1.2-.02 1.84-.02-.09.35-.17.66-.26 1.04h5.54Zm-11.83 3.22c.03-.23.05-.41.08-.59l-.1-.04c-.08.19-.17.38-.26.6H7.25c.12-.42.22-.83.35-1.24.05-.1.15-.18.27-.19 1.66-.01 3.31 0 5.01 0-.13.45-.24.86-.37 1.27-.05.1-.15.17-.27.19-.7.02-1.4.01-2.16.01m-4.79-4.93h2.29c.48 0 .73.24.78.64.07.65-.04.78-.7.78-1.19 0-2.39.02-3.59-.01-.27 0-.65-.1-.79-.29-.22-.29.01-.62.23-.89.48-.58.94-1.17 1.43-1.74.12-.12.29-.2.46-.22.41-.03.82 0 1.32 0l-1.44 1.73Zm15.06-1.67c-.45.55-.89 1.07-1.39 1.67h1.89c1.11 0 1.32.26 1.07 1.39-.12 0-.24.03-.37.03h-3.81c-.12 0-.23 0-.34-.02-.51-.07-.68-.41-.44-.87.07-.11.14-.22.23-.31.27-.34.61-.64.81-1.01.53-.96 1.34-1.09 2.34-.87" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">کوییک gx</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">H دنده ای</p>
                            </div>
                            <div className="text-[14px]">
                                <span>475,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M10.23 6.85c.21-.42-.07-.85-.56-.85H6.81c-.32 0-.58.11-.77.37-.46.62-.93 1.24-1.39 1.86-.19.25-.19.43 0 .68.47.62.94 1.24 1.42 1.87.13.17.31.25.56.25.27-.03.53-.12.71-.36.9-1.16 1.8-2.33 2.69-3.49q.12-.15.21-.33m5.29.05c.15-.2.17-.41.07-.62-.11-.22-.31-.29-.56-.29h-1.4c-.44 0-.87.01-1.31 0s-.77.15-1.03.49c-.94 1.24-1.89 2.47-2.84 3.71-.36.47-.73.94-1.09 1.42-.24.32-.24.56 0 .87.43.58.86 1.16 1.3 1.74.21.29.58.39.92.24.15-.07.3-.19.4-.32 1.85-2.41 3.69-4.82 5.54-7.23m3.77 1.18c-.5-.64-1.01-1.27-1.52-1.91-.14-.17-.33-.23-.53-.15-.15.06-.32.15-.41.27-.78 1-1.55 2.02-2.32 3.03-1.46 1.92-2.93 3.85-4.39 5.78-.11.15-.17.33-.26.49.07.16.09.31.17.41.46.6.92 1.19 1.39 1.77.25.3.66.34.98.1.09-.07.17-.16.24-.25 2.21-2.86 4.41-5.72 6.62-8.58.28-.36.3-.6.01-.96" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">فوتون ون وانا</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>2,130,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M23 11.56v2.43h-1.22v-1.66a.58.58 0 0 0-1.16 0v1.66h-1.34V10.8h1.34v.51s.41-.74 1.76-.51.6.14.6.77ZM4.53 9.99 6.55 14H5.21l-.58-1.15H2.92L2.34 14H1l2.02-4.01zm-.29 2.08-.46-.92-.46.92zm5.16 1.94h1.39v-3.1H9.4zm-1.16-2.62v-.59H6.9v3.19h1.34v-1.87c.09-.13.35-.46.8-.45v-.76c-.49 0-.74.37-.8.48m9.36 1.04a.58.58 0 0 1-1.16 0v-1.66h-1.22v2.43c0 .63.56.75.6.76 1.35.24 1.76-.5 1.76-.5v.55h1.34v-3.23h-1.34v1.66Zm-6.34-.89c0 .36.18.56.37.68h.03c.08.06.15.09.22.11l1 .46s.63.32.12.52c0 0-.16.1-1.66-.1-.01 0-.17-.03-.18-.03V14h2.51s1.18.11 1.18-.77c0-.49-.32-.69-.57-.78l-1.04-.47s-.58-.26-.12-.52c0 0 .27-.18 1.66.1.01 0 .08.02.09.02v-.81h-2.42s-1.18-.11-1.18.77Zm-1.86-.95h1.39v-.6H9.4z" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">آریسان 2</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>470,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M10.23 6.85c.21-.42-.07-.85-.56-.85H6.81c-.32 0-.58.11-.77.37-.46.62-.93 1.24-1.39 1.86-.19.25-.19.43 0 .68.47.62.94 1.24 1.42 1.87.13.17.31.25.56.25.27-.03.53-.12.71-.36.9-1.16 1.8-2.33 2.69-3.49q.12-.15.21-.33m5.29.05c.15-.2.17-.41.07-.62-.11-.22-.31-.29-.56-.29h-1.4c-.44 0-.87.01-1.31 0s-.77.15-1.03.49c-.94 1.24-1.89 2.47-2.84 3.71-.36.47-.73.94-1.09 1.42-.24.32-.24.56 0 .87.43.58.86 1.16 1.3 1.74.21.29.58.39.92.24.15-.07.3-.19.4-.32 1.85-2.41 3.69-4.82 5.54-7.23m3.77 1.18c-.5-.64-1.01-1.27-1.52-1.91-.14-.17-.33-.23-.53-.15-.15.06-.32.15-.41.27-.78 1-1.55 2.02-2.32 3.03-1.46 1.92-2.93 3.85-4.39 5.78-.11.15-.17.33-.26.49.07.16.09.31.17.41.46.6.92 1.19 1.39 1.77.25.3.66.34.98.1.09-.07.17-.16.24-.25 2.21-2.86 4.41-5.72 6.62-8.58.28-.36.3-.6.01-.96" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">فوتون ون وانا</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>2,130,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M15.73 16.75c-1.28-1.33-2.49-2.59-3.73-3.88-1.25 1.3-2.46 2.56-3.72 3.88 2.52.85 4.94.85 7.45 0M12.1 6.64s-.03.08-.02.12c.22 1.21.44 2.43.69 3.64.02.1.24.22.36.22 2.04.01 4.08 0 6.12 0 .08 0 .16-.01.25-.02-.81-2.59-4.74-4.14-7.4-3.95m-7.59 3.98h6.46c.28 0 .29-.17.33-.35.16-.82.31-1.64.46-2.46.07-.4.14-.8.21-1.21-3.32-.11-6.86 1.8-7.46 4.01m11.3 6.04c2.81-.93 4.78-3.64 3.71-5.97l-6.2 1.3c.86 1.62 1.68 3.14 2.49 4.66m-5.12-4.67c-2.12-.44-4.17-.87-6.22-1.3-1 2.41.91 5 3.73 5.98.82-1.53 1.63-3.07 2.49-4.68m2.35-5.79c.73.12 1.47.2 2.2.36 1.74.37 3.35 1.03 4.69 2.24.88.8 1.49 1.74 1.57 2.97.07 1.06-.31 1.97-.98 2.77-1.09 1.31-2.53 2.08-4.12 2.55-3.61 1.07-7.15.92-10.57-.73a6.8 6.8 0 0 1-2.3-1.78c-1.35-1.62-1.36-3.58 0-5.19 1.2-1.42 2.79-2.19 4.54-2.65.84-.22 1.72-.31 2.58-.46.11-.02.22-.05.33-.08h2.07Z" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">جک s5</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">1.5 لیتر اتوماتیک</p>
                            </div>
                            <div className="text-[14px]">
                                <span>1,650,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m7.85 9c0 .94-.17 1.84-.48 2.67-5.85-1.99-6.27-8.74-6.27-10.44 3.81.54 6.75 3.81 6.75 7.76ZM10.9 4.24c0 1.69-.42 8.45-6.27 10.44-.3-.84-.48-1.73-.48-2.67 0-3.95 2.94-7.23 6.75-7.76ZM12 19.85a7.83 7.83 0 0 1-6.03-2.83c1.73-.91 7.36-3.36 11.73.35a7.82 7.82 0 0 1-5.71 2.47Zm5.89-2.68c-1.2-2.01-5.35-7.42-12.03-.31-.48-.61-.88-1.3-1.17-2.03 1.99 0 9.66-.66 6.33-10.61.32-.04.65-.07.98-.07s.66.03.98.07c-3.33 9.95 4.34 10.61 6.33 10.61a8 8 0 0 1-1.42 2.34" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">دیگنیتی پرستیژ</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>1,750,000,000</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>
                                <span><svg className="max-w-[40px] mx-auto" viewBox="0 0 24 24"><path d="M23 11.56v2.43h-1.22v-1.66a.58.58 0 0 0-1.16 0v1.66h-1.34V10.8h1.34v.51s.41-.74 1.76-.51.6.14.6.77ZM4.53 9.99 6.55 14H5.21l-.58-1.15H2.92L2.34 14H1l2.02-4.01zm-.29 2.08-.46-.92-.46.92zm5.16 1.94h1.39v-3.1H9.4zm-1.16-2.62v-.59H6.9v3.19h1.34v-1.87c.09-.13.35-.46.8-.45v-.76c-.49 0-.74.37-.8.48m9.36 1.04a.58.58 0 0 1-1.16 0v-1.66h-1.22v2.43c0 .63.56.75.6.76 1.35.24 1.76-.5 1.76-.5v.55h1.34v-3.23h-1.34v1.66Zm-6.34-.89c0 .36.18.56.37.68h.03c.08.06.15.09.22.11l1 .46s.63.32.12.52c0 0-.16.1-1.66-.1-.01 0-.17-.03-.18-.03V14h2.51s1.18.11 1.18-.77c0-.49-.32-.69-.57-.78l-1.04-.47s-.58-.26-.12-.52c0 0 .27-.18 1.66.1.01 0 .08.02.09.02v-.81h-2.42s-1.18-.11-1.18.77Zm-1.86-.95h1.39v-.6H9.4z" fill="currentColor"></path></svg></span>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-[14px] font-bold">آریسان 2</h5>
                            </div>
                            <div className="mb-1">
                                <p className="text-textgrey text-[12px]">------</p>
                            </div>
                            <div className="text-[14px]">
                                <span>470,000,000</span>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="mx-8 sm:mx-16 flex justify-between mt-20">
                <div>
                    <h4 className="text-[14px] sm:text-[16px] font-bold">اخبار</h4>
                </div>
                <div>
                    <Link to="/blog">
                        <button className="text-mainblue text-[12px] sm:text-[14px]" type="button">مشاهده همه</button>
                    </Link>
                </div>
            </div>
            <div className="mx-8 sm:mx-16 grid grid-cols-1 md:grid-cols-3  gap-y-8 gap-x-6 mt-12 mb-32">
                <Link to="/blog/detail/2">
                    <div className="relative border-[1px] border-maingrey">
                        <div>
                            <img className="w-full h-full max-h-[300px]" src="https://cdn-thra.bama.ir/uploads/BamaImages/News/6031ed17-cb1d-4345-9557-2252f67b1ef6/article_638723652553654360.jpg?width=640&height=430" alt="news-img" />
                        </div>
                        <div className="bg-white w-full relative sm:absolute md:relative xl:absolute bottom-0 right-0 px-6 py-4">
                            <h5 className="text-[16px] font-bold">معرفی آیوتا m8</h5>
                            <p className="text-[12px]">
                                خودنمایی هواوی تواناییهای فنی
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/blog/detail/3">
                    <div className="relative border-[1px] border-maingrey">
                        <div>
                            <img className="w-full h-full max-h-[300px]" src="https://cdn-thra.bama.ir/uploads/BamaImages/News/df13089c-4fab-463e-a75d-39a6d6c130f7/article_638723683146718378.jpg?width=640&height=430" alt="news-img" />
                        </div>
                        <div className="bg-white w-full relative sm:absolute md:relative xl:absolute bottom-0 right-0 px-6 py-4">
                            <h5 className="text-[16px] font-bold">معرفی بی وای دی e7</h5>
                            <p className="text-[12px]">
                                سدانی برقی برای تاکسیرانی
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/blog/detail/4">
                    <div className="relative border-[1px] border-maingrey">
                        <div>
                            <img className="w-full h-full max-h-[300px]" src="https://cdn-thra.bama.ir/uploads/BamaImages/News/62f727ee-1f81-49e2-a9a4-aa0ba0dd621b/article_638480952523714370.jpg?width=640&height=430" alt="news-img" />
                        </div>
                        <div className="bg-white w-full relative sm:absolute md:relative xl:absolute bottom-0 right-0 px-6 py-4">
                            <h5 className="text-[16px] font-bold">معرفی بی وای دی تانگ </h5>
                            <p className="text-[12px]">
                                در دو نسخه برقی و پلاگین
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default Home