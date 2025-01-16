import React from "react";
import { Stepper, Step, Select, Option, Textarea, Button, IconButton, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";





const Posting = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);



    return (
        <div className="mx-8 sm:mx-16">
            <div className="w-full py-4 px-4 sm:px-8">
                <Stepper
                    className="flex w-full flex-row-reverse"
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step className="h-4 w-4 " onClick={() => setActiveStep(0)} >
                        <div className="hidden md:block absolute -bottom-[2.5rem] w-max text-center">
                            <Typography
                                variant="h6"
                                color={activeStep === 0 ? "blue-gray" : "gray"}
                            >
                                برند مدل
                            </Typography>
                        </div>
                    </Step>
                    <Step className="h-4 w-4" onClick={() => setActiveStep(1)} >
                        <div className="hidden md:block absolute -bottom-[2.5rem] w-max text-center">
                            <Typography
                                variant="h6"
                                color={activeStep === 1 ? "blue-gray" : "gray"}
                            >

                                سال تولید                            </Typography>
                        </div>
                    </Step>
                    <Step className="h-4 w-4" onClick={() => setActiveStep(2)} >
                        <div className="hidden md:block absolute -bottom-[2.5rem] w-max text-center">
                            <Typography
                                variant="h6"
                                color={activeStep === 2 ? "blue-gray" : "gray"}
                            >
                                کارکرد
                            </Typography>
                        </div>
                    </Step>
                    <Step className="h-4 w-4" onClick={() => setActiveStep(3)} >
                        <div className="hidden md:block absolute -bottom-[2.5rem] w-max text-center">
                            <Typography
                                variant="h6"
                                color={activeStep === 3 ? "blue-gray" : "gray"}
                            >
                                رنگ
                            </Typography>
                        </div>
                    </Step>
                    <Step className="h-4 w-4" onClick={() => setActiveStep(4)} >
                        <div className="hidden md:block absolute -bottom-[2.5rem] w-max text-center">
                            <Typography
                                variant="h6"
                                color={activeStep === 4 ? "blue-gray" : "gray"}
                            >
                                قیمت
                            </Typography>
                        </div>
                    </Step>
                    <Step className="h-4 w-4" onClick={() => setActiveStep(5)} >
                        <div className="hidden md:block absolute -bottom-[2.5rem] w-max text-center">
                            <Typography
                                variant="h6"
                                color={activeStep === 5 ? "blue-gray" : "gray"}
                            >
                                محل
                            </Typography>
                        </div>
                    </Step>
                    <Step className="h-4 w-4" onClick={() => setActiveStep(6)} >
                        <div className="hidden md:block absolute -bottom-[2.5rem] w-max text-center">
                            <Typography
                                variant="h6"
                                color={activeStep === 6 ? "blue-gray" : "gray"}
                            >
                                توضیحات
                            </Typography>
                        </div>
                    </Step>
                </Stepper>
                <div className="mt-24 flex justify-between">
                    <button className={isLastStep ? "bg-mainblue border-[3px] border-mainblue text-white px-5 py-1.5 rounded justify-center" :"bg-mainblue border-[3px] border-mainblue hover:bg-white transition-colors duration-300 hover:text-mainblue text-white px-5 py-1.5 rounded justify-center"} onClick={handleNext} disabled={isLastStep}>
                        بعدی
                    </button>
                    <button className={isFirstStep ? "bg-mainblue border-[3px] border-mainblue text-white px-5 py-1.5 rounded justify-center" :"bg-mainblue border-[3px] border-mainblue hover:bg-white transition-colors duration-300 hover:text-mainblue text-white px-5 py-1.5 rounded justify-center"} onClick={handlePrev} disabled={isFirstStep}>
                        قبلی
                    </button>

                </div>
            </div>
            <div className={activeStep == 0 ? "h-screen md:w-[50%] mx-auto block" : "h-screen md:w-[50%] mx-auto hidden"}>
                <div className="mb-4 mt-8 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        انتخاب برند و مدل
                    </h2>
                </div>
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
            <div className={activeStep == 1 ? "h-screen md:w-[50%] mx-auto block" : "h-screen md:w-[50%] mx-auto hidden"}>
                <div className="mb-4 mt-8 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        انتخاب سال تولید
                    </h2>
                </div>
                <Select arrow="" className="" label="سال تولید">
                    <Option>1403</Option>
                    <Option>1402</Option>
                    <Option>1401</Option>
                    <Option>1400</Option>
                    <Option>1399</Option>
                    <Option>1398</Option>
                    <Option>1397</Option>
                    <Option>1396</Option>
                    <Option>1395</Option>
                    <Option>1394</Option>
                    <Option>1393</Option>
                    <Option>1392</Option>
                    <Option>1391</Option>
                    <Option>1390</Option>
                    <Option>1389</Option>
                    <Option>1388</Option>
                    <Option>1387</Option>
                    <Option>1386</Option>
                    <Option>1385</Option>
                    <Option>1384</Option>
                    <Option>1383</Option>
                    <Option>1382</Option>
                    <Option>1381</Option>
                    <Option>1380</Option>
                    <Option>1379</Option>
                    <Option>1378</Option>
                    <Option>1377</Option>
                    <Option>1376</Option>
                    <Option>1375</Option>
                </Select>
            </div>
            <div className={activeStep == 2 ? "h-screen md:w-[50%] mx-auto block" : "h-screen md:w-[50%] mx-auto hidden"}>
                <div className="mb-4 mt-8 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        کاکرد ماشین
                    </h2>
                </div>
                <div className="flex gap-x-3">
                    <input className="border-[1px] border-maingrey w-full py-3 px-1" type="text" placeholder="0" />
                </div>
            </div>
            <div className={activeStep == 3 ? "h-screen md:w-[50%] mx-auto block" : "h-screen md:w-[50%] mx-auto hidden"}>
                <div className="mb-4 mt-4 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        وضعیت بدنه
                    </h2>
                </div>
                <Select arrow="" className="" label="وضعیت بدنه">
                    <Option>بدون زنگ</Option>
                    <Option>یک لکه زنگ</Option>
                    <Option>دو لکه زنگ</Option>
                    <Option>چند لکه زنگ</Option>
                    <Option>یک در زنگ</Option>
                    <Option>دو در زنگ</Option>
                    <Option>سه در زنگ</Option>
                    <Option>چهار در زنگ</Option>
                    <Option>کاپوت در زنگ</Option>
                    <Option>صندوق در زنگ</Option>
                    <Option>گلگیر در زنگ</Option>
                    <Option>اتاق تعویض</Option>
                </Select>
                <div className="mb-4 mt-8 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        رنگ بدنه
                    </h2>
                </div>
                <Select arrow="" className="" label="رنگ بدنه">
                    <Option>سفید</Option>
                    <Option>مشکی</Option>
                    <Option>نقره ای</Option>
                    <Option>سرمه ای</Option>
                    <Option>نوک مدادی</Option>
                    <Option>قرمز</Option>
                    <Option>تیتانیوم</Option>
                </Select>
            </div>
            <div className={activeStep == 4 ? "h-screen md:w-[50%] mx-auto block" : "h-screen md:w-[50%] mx-auto hidden"}>
                <div className="mb-4 mt-8 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        قیمت ماشین
                    </h2>
                </div>
                <div className="flex gap-x-3">
                    <input className="border-[1px] border-maingrey w-full py-3 px-1" type="text" placeholder="0" />
                </div>
            </div>
            <div className={activeStep == 5 ? "h-screen md:w-[50%] mx-auto block" : "h-screen md:w-[50%] mx-auto hidden"}>
                <div className="mb-4 mt-8 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        محل ماشین
                    </h2>
                </div>
                <div className="flex gap-x-3">
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
            </div>
            <div className={activeStep == 6 ? "h-screen md:w-[50%] mx-auto block" : "h-screen md:w-[50%] mx-auto hidden"}>
                <div className="mb-4 mt-8 ">
                    <h2 className="text-[16px] sm:text-[18px] font-bold">
                        توضیحات ماشین
                    </h2>
                </div>
                <div className="">
                    <Textarea color="gray" label="توضیحات ماشین" />
                    <div className="flex w-full justify-between py-1.5">
                        <IconButton variant="text" color="blue-gray" size="sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                            </svg>
                        </IconButton>
                        <div className="flex gap-2">
                            <Link to="/cars">
                                <button className="w-full bg-mainblue border-[3px] border-mainblue hover:bg-white transition-colors duration-300 hover:text-mainblue text-white px-3 py-1.5 rounded justify-center" type="button">
                                    ثبت آگهی
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posting