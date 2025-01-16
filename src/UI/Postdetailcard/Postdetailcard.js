import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import Blogcard from "../Blogcard/Blogcard";
import { Breadcrumbs } from "@material-tailwind/react";





const Postdetailcard = (props) => {


    const [relatedblog, setrelatedblog] = useState({
        data: [
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/1f96ec13-d265-4c96-9ce8-1869986d0175/article_638720262695632127.jpg?width=290", "هوندا کلیک 160 در برابر یاماها", "مقایسه اسکوترهای پرطرفدار ژاپنی", "3 روز پیش",],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/9ac16201-c6ef-4a77-a4bb-5ea9ad5f6b09/article_638713280069004133.jpg?width=290", "بهترین موتورهای اسکوتر برای مبتدیان", "یاماها، اس‌وای‌ام یا تی‌وی‌اس؟", "1 روز پیش",],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/04592d5e-a10e-4831-9aaa-ae1b862ddb5b/article_638602651201782347.jpg?width=290", "اخبار فرسودگی موتورسیکلت (1403)", "آغاز ثبت‌نام رایگان برای نوسازی موتورسیکلت‌های فرسوده", "2 روز پیش",],
        ]
    })


    const data = [
        {
            imgelink: props.img1
        },
        {
            imgelink: props.img2
        },
        {
            imgelink: props.img3
        },
        {
            imgelink: props.img4
        },
        {
            imgelink: props.img5
        },
        
    ];
    const [active, setActive] = React.useState(
props.img1
    );

    return (
        <div className=" mx-8 sm:mx-16 mb-28">
            <Breadcrumbs className=" mt-6 hidden sm:flex">
                <a href="#" className="opacity-60">
                    خرید خودرو
                </a>
                <a href="#" className="opacity-60">
                   آگهی مورد نظر
                </a>
                <a href="#" >
                  جزییات
                </a>
            </Breadcrumbs>
            <div className="mt-16 flex lg:flex-row flex-col-reverse gap-x-20 justify-center">
                <div className="lg:w-[40%] xl:w-[30%] mb-10 mt-12 lg:mt-0 lg:mb-0">
                    <div className="border-b-[1px] border-maingrey pb-3">
                        <div className="mb-2">
                            <h4 className="font-bold text-[14px] sm:text-[18px]">
                               {props.title}
                            </h4>
                        </div>
                        <div className="text-[14px] flex gap-x-3 mb-2">
                            <span>{props.date}</span>
                            <span>{props.run} km</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-[14px]">3 روز پیش</span>
                        </div>
                        <div className="flex sm:flex-row flex-col gap-x-6 justify-between w-full relative bottom-[-20%]">
                            <div className="mb-3 sm:mb-0">
                                <span className="text-[14px] flex gap-x-1">
                                    <span className="my-auto">
                                        <CiLocationOn />
                                    </span>
                                    تهران / آزادی
                                </span>
                            </div>
                            <div>
                                <span className="text-[14px] sm:text-[16px]">
                                    {props.price}
                                    تومان
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 border-b-[1px] border-maingrey pb-5">
                        <button className="w-full bg-mainblue border-[3px] border-mainblue hover:bg-white transition-colors duration-300 hover:text-mainblue text-white py-1.5 rounded flex gap-x-2 justify-center" type="button">
                            <span className="my-auto">
                                <FaPhoneAlt />
                            </span>
                            تماس به فروشنده
                        </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-6 mt-6">
                        <div className="flex flex-col text-center">
                            <span className=""><svg className="w-[40px] mx-auto mb-2 bg-maingrey p-2 rounded-full" viewBox="0 0 24 24" data-v-62118a93="" data-v-23e2e990=""><path d="M19.39 12.92 14 15.23a1.997 1.997 0 0 1-1.99 1.79 2.01 2.01 0 0 1 0-4.02c.45 0 .86.15 1.19.4l5.4-2.32zM23 13a10.9 10.9 0 0 1-3.43 7.97l-.45.43-.58-.21c-4.27-1.57-8.81-1.57-13.08 0l-.58.21-.45-.43A10.9 10.9 0 0 1 1 13C1 6.93 5.93 2 12 2s11 4.93 11 11m-2 0c0-4.96-4.04-9-9-9s-9 4.04-9 9c0 2.28.84 4.42 2.38 6.09C7.54 18.37 9.76 18 12 18s4.45.37 6.62 1.09A8.91 8.91 0 0 0 21 13M5 12c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m7-5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1M7 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m10 2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1" fill="currentColor"></path></svg></span>
                            <span className="text-textgrey text-[12px]">کارکرد</span>
                            <span className="text-[14px]">صفر کیلومتر</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className=""><svg className="w-[40px] mx-auto mb-2 bg-maingrey p-2 rounded-full" viewBox="0 0 24 24" data-v-62118a93="" data-v-23e2e990=""><path d="M16 19.01v-2h3c1.65 0 3-1.35 3-3V7.58l-4.29-4.29L16.3 4.7l1.71 1.71V9c0 .55.45 1 1 1h1v4.02c0 .55-.45 1-1 1h-3V3l-.75-.2a24.67 24.67 0 0 0-12.51.01l-.75.2v16H0v2h24v-2zM14 4.55v4.44H4V4.56a22.8 22.8 0 0 1 10 0ZM4 19.01V11h10v8.02H4Z" fill="currentColor"></path></svg></span>
                            <span className="text-textgrey text-[12px]">نوع سوخت</span>
                            <span className="text-[14px]">بنزینی</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className=""><svg className="w-[40px] mx-auto mb-2 bg-maingrey p-2 rounded-full" viewBox="0 0 24 24" data-v-62118a93="" data-v-23e2e990=""><path d="M1 19c0 1.65 1.35 3 3 3s3-1.35 3-3c0-1.3-.84-2.4-2-2.82V13h6v3.18c-1.16.41-2 1.51-2 2.82 0 1.65 1.35 3 3 3s3-1.35 3-3c0-1.3-.84-2.4-2-2.82V13h8V7.82c1.16-.41 2-1.51 2-2.82 0-1.65-1.35-3-3-3s-3 1.35-3 3c0 1.3.84 2.4 2 2.82V11h-6V7.82c1.16-.41 2-1.51 2-2.82 0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V11H5V7.82C6.16 7.41 7 6.31 7 5c0-1.65-1.35-3-3-3S1 3.35 1 5c0 1.3.84 2.4 2 2.82v8.37c-1.16.41-2 1.51-2 2.82Zm11 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m8-16c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-8 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M4 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M4 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m19 13.5a2.5 2.5 0 0 0-2.5-2.5H17v7h2v-2l1.5 2H23l-1.62-2.17c.95-.36 1.62-1.26 1.62-2.33m-4-.5h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H19z" fill="currentColor"></path></svg></span>
                            <span className="text-textgrey text-[12px]">گیبرکس</span>
                            <span className="text-[14px]">cvt</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className=""><svg className="w-[40px] mx-auto mb-2 bg-maingrey p-2 rounded-full" viewBox="0 0 24 24" data-v-62118a93="" data-v-23e2e990=""><path d="M16.35 1.79a12.4 12.4 0 0 0-8.7 0L7 2.03v6.8c-.19.06-.38.11-.57.18l-2.79 1.04.7 1.87 2.65-.99v11.02l.65.24c1.41.53 2.88.79 4.35.79s2.93-.27 4.35-.79l.65-.24V10.94l2.65.99.7-1.87-2.79-1.04c-.19-.07-.38-.12-.57-.18V2.03l-.65-.24ZM9 3.45c1.97-.59 4.03-.59 6 0v4.86c-1.98-.38-4.02-.38-6 0zm6 13.1c-1.97.59-4.03.59-6 0v-6.19c1.98-.44 4.02-.44 6 0zm-6 4.01v-1.94c.99.25 1.99.38 3 .38s2.01-.13 3-.38v1.94c-1.97.59-4.03.59-6 0" fill="currentColor"></path></svg></span>
                            <span className="text-textgrey text-[12px]">وضعیت بدنه</span>
                            <span className="text-[14px]">بدون رنگ</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className=""><svg className="w-[40px] mx-auto mb-2 bg-maingrey p-2 rounded-full" viewBox="0 0 24 24" data-v-62118a93="" data-v-23e2e990=""><path d="M19.15 4.86a21.9 21.9 0 0 0-4.49-3.46l-.67-.39L4 11l3.05 3.05-3.72 2.47a2.987 2.987 0 0 0-.46 4.6c.57.56 1.32.88 2.11.88.1 0 .2 0 .3-.02.9-.09 1.7-.57 2.19-1.32l2.47-3.72L13 20l9.99-9.99-.39-.67c-.96-1.64-2.12-3.15-3.46-4.49ZM5.81 19.56a.996.996 0 0 1-1.53.16c-.21-.21-.31-.5-.28-.8s.19-.56.44-.73l4.05-2.69-2.69 4.06Zm8.48-13.58c-.18.3-.29.65-.29 1.02 0 1.1.9 2 2 2 .38 0 .73-.11 1.03-.29-.01.1-.03.19-.03.29 0 1.1.9 2 2 2 .07 0 .14-.01.21-.02l-3.4 3.4L9.63 8.2l3.43-3.43c.12.62.6 1.11 1.24 1.21ZM6.83 11l1.38-1.38 6.18 6.18-1.38 1.38z" fill="currentColor"></path></svg></span>
                            <span className="text-textgrey text-[12px]">رنگ بدنه</span>
                            <span className="text-[14px]">سفید</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className=""><svg className="w-[40px] mx-auto mb-2 bg-maingrey p-2 rounded-full" viewBox="0 0 24 24" data-v-62118a93="" data-v-23e2e990=""><path d="M19 18.5V5.2l-.7-.2C14.2 3.7 9.8 3.7 5.7 5l-.7.2v13.3l-.4.2-.6.3v5h16v-5l-.6-.3zM7 6.7c3.3-.9 6.7-.9 10 0v11.1c-3.3-1-6.7-1-10 0zM18 22H6v-1.7c1.9-.8 3.9-1.3 6-1.3s4.1.4 6 1.3zM7.7.6l.5 1.9c2.4-.7 5-.7 7.5 0l.5-1.9c-2.7-.8-5.7-.8-8.5 0m8.8 8.8-1.8-.9C13.6 10.9 13 13.4 13 16h2q0-3.45 1.5-6.6m-9 0c1 2 1.5 4.3 1.5 6.6h2c0-2.6-.6-5.1-1.7-7.4z" fill="currentColor"></path></svg></span>
                            <span className="text-textgrey text-[12px]">رنگ داخلی</span>
                            <span className="text-[14px]">مشکی</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/*images */}
                    <div className="grid gap-4 h-fit w-full mb-20 xl:mb-0">
                        <div>
                            <img
                                className="h-auto w-full max-w-[800px] rounded-lg object-cover object-center md:h-[480px]"
                                src={active}
                                alt="product-img"
                            />
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                            {data.map(({ imgelink }, index) => (
                                <div key={index}>
                                    <img
                                        onClick={() => setActive(imgelink)}
                                        src={imgelink}
                                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                        alt="product-img"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*images */}
                    <div className="mt-8">
                        <h3 className="font-bold">
                            توضیحات
                        </h3>
                        <p className="text-[14px] leading-8">
                            فروش خودرو شما به صورت امانی به قیمت روز بدون کمیسیون ظرف مدت ۲۴ تا ۴۸ ساعت
                            <br />
                            ✅معاوضه خودرو کارکرده و صفر شما
                            <br />
                            ✅بدون هیچ گونه هزینه اضافی و...
                            <br />
                            ✅تمامی خودروهاباسایررنگ ها موجودمیباشد
                            <br />
                            ✅امکان کارشناسی خودرو قبل از تسویه کامل
                            <br />
                            ✅آماده همکاری با شرکت ها و ارگان های دولتی و خصوصی

                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:mx-8 mt-6">
                <h3 className="text-[20px] font-bold mb-6">
                    مطالب مرتبط
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-36">
                    {relatedblog.data.map((item) => (
                        <Blogcard img={item[0]} title={item[1]} describ={item[2]} date={item[3]} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Postdetailcard