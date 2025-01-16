import React from "react";
import { useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Blogcard from "../../UI/Blogcard/Blogcard";




const Blog = () => {
    const [carnews, setcarnews] = useState({
        data: [
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/dd6f9d5e-dc7a-48a2-a1f2-553923b0674f/article_638723746648688920.jpg?width=290", "شرایط واردات خودرو توسط ایرانیان", "جزییات واردات خودرو توسط اشخاص در سال 1404", "3 روز پیش","/blog/detail/1"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/6031ed17-cb1d-4345-9557-2252f67b1ef6/article_638723652553654360.jpg?width=290", "معرفی آیتو M8", "خودنمایی هواوی در زمینه توانایی‌های فنی و سبک طراحی", "1 روز پیش","/blog/detail/2"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/fe3b062e-2b69-498c-8929-acd5218464d0/article_638723672533712912.jpg?width=290", "معرفی بی وای دی e7", "سدانی برقی برای تاکسیرانی", "2 روز پیش","/blog/detail/3"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/df13089c-4fab-463e-a75d-39a6d6c130f7/article_638723683146718378.jpg?width=290", "معرفی بی وای دی تانگ L مدل 2025", "در دو نسخه برقی و پلاگین هیبرید", "4 روز پیش","/blog/detail/4"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/00fded60-d168-4e7f-b993-6457e9b2a52c/article_638299620482528032.jpg?width=290", "اخبار قطار تراموا در تهران", "انجام تست‌های نهایی تراموا در بهمن‌ماه", "4 روز پیش","/blog/detail/5"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/ec816d27-e821-4fef-b8d2-ebf93d6bf3be/article_638195710277622019.jpg?width=290", "طرح نوسازی اتوبوس فرسوده", "انتشار مصوبه تامین 32 هزار اتوبوس از تولید داخل", "7 روز پیش","/blog/detail/6"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/a100eb51-48db-4f83-921b-c3f4a562d54c/article_638722853919676705.jpg?width=290", "رنو 5 خودروی سال 2025 اروپا شد", "افتخاری دیگر برای هاچ‌بک محبوب", "6 روز پیش","/blog/detail/7"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/7ea8ffeb-fd96-4221-8a9d-6af1207a9bc8/article_638722843510336545.jpg?width=290", "معرفی اشکودا اِنیاک و اِنیاک کوپه 2025", "تغییر چهره با برد 580 کیلومتر", "8 روز پیش","/blog/detail/8"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/7783a543-3440-4eb0-bab9-76bb13188c3f/article_638722805921677331.jpg?width=290", "بروزرسانی رم هوی دیوتی", "افزایش قدرت پیشرانه دیزل و ادامه حیات V8 HEMI", "9 روز پیش","/blog/detail/9"],
        ]
    })
    const [sale, setsale] = useState({
        data: [
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/7abbbff6-96f9-40ae-becb-5dbf28f3370f/article_638704587177670370.jpg?width=290", "شرایط فروش برساوش خودرو (1403)", "آغاز فروش خودروهای برقی تویوتا", "3 روز پیش","/blog/detail/10"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/55cb057b-e337-49c7-ac4e-c0bf480b588d/article_637953982966707439.jpg?width=290", "نتایج قرعه کشی سامانه یکپارچه خودرو", "اعلام نتایج وارداتی‌ها در 26 دی‌ماه", "1 روز پیش","/blog/detail/11"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/ad3d6127-094e-4e25-a52f-1b826705b60f/article_638034141334556141.jpg?width=290", "شرایط فروش پژو 207 دستی ", "قیمت جدید 207 پانوراما اعلام شد!", "2 روز پیش","/blog/detail/12"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/00db6882-cb34-46cc-b24e-b2fc6900f205/article_637852897284302663.jpg?width=290", "ثبت نام ایران خودرو؛", "فراخوان واریز وجه ویژه خریداران خودروی برقی", "4 روز پیش","/blog/detail/13"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/73680a0b-e7e3-44a2-9649-42fdb34132b8/article_638082528681607034.jpg?width=290", "شرایط فروش دنا پلاس دستی", "اعلام قیمت جدید دنا EF7P", "4 روز پیش","/blog/detail/14"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/d4dbad1c-4a03-4d4c-a013-d52cc71b5328/article_638456789182609971.jpg?width=290", "شرایط فروش لوکانو و ثبت نام اکودا ", "آشنایی سلبریتی‌ها با اکودا و لوکانا", "7 روز پیش","/blog/detail/15"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/11f2763e-d925-4778-806c-03535486d580/article_638335665877360529.jpg?width=290", "ثبت‌ نام سایپا؛ شرایط فروش فوق العاده", "پیش فروش جدید از 24 دی‌ماه", "6 روز پیش","/blog/detail/16"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/83888eb9-f045-4da8-a481-eca48d46187a/article_637859796194285778.jpg?width=290", "ثبت نام ایران خودرو برای مادران", "فراخوان واریز وجه برای منتخبین طرح پیش فروش", "8 روز پیش","/blog/detail/17"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/5dd9e487-b6db-4b25-8242-99f1ed49ea0f/article_638721843285144760.jpg?width=290", "شرایط فروش ماموت خودرو (1403)", "فراخوان واریز وجه ویژه خریداران تی‌راک", "9 روز پیش","/blog/detail/18"],
        ]
    })
    const [review, setreview] = useState({
        data: [
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/d4880434-a2b5-4a98-a4ee-2c100c709392/article_638725467786366012.jpg?width=290", "تفاوت هایما S7 پلاس با هایما S7 پرو", "برادر جدید S7 با قیمتی گران‌تر از 8S", "3 روز پیش","/blog/detail/19"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/56e52b0c-297f-4540-b3ef-e4bc992aed95/article_638543329853250842.jpg?width=290", "بررسی فونیکس تیگو 9 مدیران خودرو", "گران ترین عضو خانواده تیگو", "1 روز پیش","/blog/detail/20"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/62f727ee-1f81-49e2-a9a4-aa0ba0dd621b/article_638480952523714370.jpg?width=290", "بررسی تویوتا بی زد 3 برقی برساوش ", "قیمت نهایی اعلام شد!!", "2 روز پیش","/blog/detail/21"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/7b1fc783-690c-48e4-a4b3-1a75fe4b045f/article_637712090885086137.jpg?width=290", "بررسی تویوتا بی زد 4 ایکس برقی در ایران", "اعلام قیمت رسمی برای اولین‌بار!", "4 روز پیش","/blog/detail/22"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/93135149-ccd7-462d-bd1a-9f47496778fe/article_638605307780204692.jpg?width=290", "بررسی ام جی ZS هیبرید فردا موتور", "اولین رونمایی ام جی ZS هیبرید در ایران", "4 روز پیش","/blog/detail/23"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/5a717c7f-0374-43f9-ba6d-ef992dd89a37/article_638348774137503099.jpg?width=290", "بررسی دنا پلاس EF7P با گیربکس 6 دنده", "حذف رینگ برای مشتریان جدید!", "7 روز پیش","/blog/detail/24"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/f536315f-a3b0-40cb-8aa1-fae5fddff3a9/article_638614802578311967.jpg?width=290", "بررسی پیکاپ مکسوس استار H شتابران", "قیمت نهایی مشخص شد!", "6 روز پیش","/blog/detail/25"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/b77af92d-4261-47fd-a9fe-3c9f1b742ae1/article_638664016545013761.jpg?width=290", "بررسی فولکس‌ واگن تی راک ماموت", "اعلام قیمت قطعی برای دومین فولکس وارداتی", "8 روز پیش","/blog/detail/26"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/0604ea16-1c02-4f8a-85a6-ce73047d4172/article_638719574856557183.jpg?width=290", "ملاقات با رولزرویس ریث", "اُوردوز اشرافیت", "9 روز پیش","/blog/detail/27"],
        ]
    })

    const [repair, setrepair] = useState({
        data: [
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/b86ac8c0-0a43-4bf6-856a-5d107e4d296b/article_638725375789792841.jpg?width=290", "بهترین زمان تعویض روغن گیربکس", "نکاتی درباره تعویض روغن‌ها", "3 روز پیش","/blog/detail/28"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/85bb803c-49e4-41c0-b47e-a858d1b083cd/article_637749875454878713.jpg?width=290", "کارت طلایی ایران خودرو 1403", "قیمت انواع اشتراک طلایی ویژه فروش زمستانی", "1 روز پیش","/blog/detail/29"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/6d0c1da3-8ca7-4823-bf78-2ddbff6c97b9/article_637447440357656877.jpg?width=290", "سرویس ادواری سایپا", "افتتاح مرکز تخصصی تعمیرات خودروهای برقی سایپا", "2 روز پیش","/blog/detail/30"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/89feef1e-99dc-4314-858f-db10f4334274/article_638722050796628752.jpg?width=290", "بهترین روغن ترمز خودرو", "معرفی پرفروش‌ترین مدل‌های بازار", "4 روز پیش","/blog/detail/31"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/aa08cd93-56ea-44a2-8cd3-c07b081572a6/article_638716016858870556.jpg?width=290", "بهترین روغن موتور برای سمند EF7", "معرفی پرفروش‌ترین روغن‌ها", "4 روز پیش","/blog/detail/32"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/437298ee-5a9d-487e-963c-f173ca23f51a/article_638715896218236512.jpg?width=290", "بهترین روغن گیربکس اتومات ", "معرفی روغن‌های پرفروش بازار", "7 روز پیش","/blog/detail/33"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/908c10ce-64b2-44bb-9df7-391db3e0670d/article_638713527724407369.jpg?width=290", "بهترین لنت ترمز پژو پارس ", "معرفی 5 برند پرفروش", "6 روز پیش","/blog/detail/34"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/77ae7dcd-8506-43ac-9dc1-b8e547c5e2e4/article_638713172655346039.jpg?width=290", "بهترین لنت ترمز سمند", "برای انواع مدل‌های سمند", "8 روز پیش","/blog/detail/35"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/b25331c5-ba87-4ecb-9fa2-9c0bc212e195/article_638707960655686399.jpg?width=290", "بهترین لنت ترمز پژو 405 ", "معرفی پرفروش‌ترین مدل‌های بازار", "9 روز پیش","/blog/detail/36"],
        ]
    })
    const [bike, setbike] = useState({
        data: [
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/1f96ec13-d265-4c96-9ce8-1869986d0175/article_638720262695632127.jpg?width=290", "هوندا کلیک 160 در برابر یاماها", "مقایسه اسکوترهای پرطرفدار ژاپنی", "3 روز پیش","/blog/detail/37"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/9ac16201-c6ef-4a77-a4bb-5ea9ad5f6b09/article_638713280069004133.jpg?width=290", "بهترین موتورهای اسکوتر برای مبتدیان", "یاماها، اس‌وای‌ام یا تی‌وی‌اس؟", "1 روز پیش","/blog/detail/38"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/04592d5e-a10e-4831-9aaa-ae1b862ddb5b/article_638602651201782347.jpg?width=290", "اخبار فرسودگی موتورسیکلت (1403)", "آغاز ثبت‌نام رایگان برای نوسازی موتورسیکلت‌های فرسوده", "2 روز پیش","/blog/detail/39"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/f64ccbf0-c9a6-41cf-958f-1fd453fcb0d6/article_638693349982215503.jpg?width=290", "معرفی دوکاتی استریت فایتر V4S", "هیولای دوچرخ ایتالیایی با با 214 اسب‌بخار قدرت", "4 روز پیش","/blog/detail/40"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/616e5444-f7ef-4153-9820-75437396ea59/article_638693352865768419.jpg?width=290", "معرفی هوندا موتوکامپکتو 2024", "اسکوتر برقی تاشو", "4 روز پیش","/blog/detail/41"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/89133660-160a-45ce-8049-9c42c6e72f72/article_638685816371493962.jpg?width=290", "معرفی مدل لگو از دوکاتی پانیگاله V4S", "با قیمت 200 دلار", "7 روز پیش","/blog/detail/42"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/174c42b1-4ef9-4a61-b423-8cd6e99d8467/article_638673500075355634.jpg?width=290", "معاینه فنی موتورسیکلت در سال 1403", "آغاز طرح معاینه فنی رایگان موتورسیکلت در تهران", "6 روز پیش","/blog/detail/43"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/845bb1f4-c68d-4087-ad20-52e9f922a65e/article_638408321137697226.jpg?width=290", "طرح توقیف موتورسیکلت در سال 1403", "جریمه نقدی و توقیف برای موتورسیکلت‌های پلاک مخدوش", "8 روز پیش","/blog/detail/44"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/f0adb4e2-d50f-4208-8216-75966d209519/article_638673657450486907.jpg?width=290", "معرفی هوندا سوپرکاب 50 فاینال ادیشن", "خداحفاظی به دلیل سخت‌تر شدن قوانین آلایندگی", "9 روز پیش","/blog/detail/45"],
        ]
    })
    const [guide, setguide] = useState({
        data: [
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/5e253447-e237-4ab8-9547-689797788879/article_638105227975715466.jpg?width=290", "نحوه افتتاح حساب وکالتی برای ثبت نام", "آغاز افتتاح حساب برای متقاضیان ایران خودرو", "3 روز پیش","/blog/detail/46"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/b5f75b86-cbcc-4e29-9e26-72994f9ede85/article_638510297013324468.jpg?width=290", "سامانه درخواست آنلاین کارت هوشمند", "مراحل ثبت نام برای خودروهای نوشماره", "1 روز پیش","/blog/detail/47"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/a68ed7b6-40ec-4b30-b1c7-2ca7281698e5/article_636926540024870599.jpg?width=290", "عوارض الکترونیکی آزادراه 1403", "افزایش نرخ عوارضی از اول بهمن‌ماه", "2 روز پیش","/blog/detail/48"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/1d149c98-5dfb-4656-9be3-8d5468ef666f/article_638480154501947125.jpg?width=290", "اخبار واردات خودرو به مناطق آزاد (1403)", "برداشته شدن سقف قیمتی واردات خودرو به مناطق آزاد", "4 روز پیش","/blog/detail/49"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/7a04172f-aac9-4f92-9eb1-9a458db7e61e/article_638705423412135370.jpg?width=290", "بیشترین سود ثبت نام ایران خودرو ", "جدال سورن و تارای اتومات!", "4 روز پیش","/blog/detail/50"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/15ae963b-74db-45bb-914c-3105616935ff/article_637861445201147301.jpg?width=290", "معاینه فنی تاکسی در سال 1403", "کاهش 25 درصدی مراجعه تاکسی‌ها به مراکز معاینه فنی", "7 روز پیش","/blog/detail/51"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/cea00ad4-14da-4088-ad64-1770939f5c7f/article_636687318202180770.jpg?width=290", "محدوده طرح ترافیک جدید (1403)", "شرایط تردد خودروهای پلاک شهرستان در محدوده طرح ترافیک", "6 روز پیش","/blog/detail/52"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/8f3237fa-5131-4922-9c5a-bf11a1c1dc69/article_637497633916866627.jpg?width=290", "مالیات خودرو لوکس (1403)", "موعد پرداخت مالیات خودروهای لوکس مشخص شد", "8 روز پیش","/blog/detail/53"],
            ["https://cdn-thra.bama.ir/uploads/BamaImages/News/52de6dcd-7a25-4a27-b460-b0605ac37062/article_638090446357875300.jpg?width=290", "شرایط ثبت نام خودرو وارداتی جانبازان ", "افزایش 10 برابری ثبت سفارش خودرو جانبازان تا پایان آذر", "9 روز پیش","/blog/detail/54"],
        ]
    })




    const [activeTab, setActiveTab] = React.useState("car news");
    const data = [
        {
            label: "اخبار خودرو",
            value: "car news",
            desc: carnews.data.map((item) => (
                <Blogcard img={item[0]} title={item[1]} describ={item[2]} date={item[3]} link={item[4]}/>
            ))
        },
        {
            label: "شرایط فروش",
            value: "sale",
            desc: sale.data.map((item) => (
                <Blogcard img={item[0]} title={item[1]} describ={item[2]} date={item[3]} link={item[4]}/>
            ))
        },
        {
            label: "تست و بررسی",
            value: "review",
            desc: review.data.map((item) => (
                <Blogcard img={item[0]} title={item[1]} describ={item[2]} date={item[3]} link={item[4]}/>
            ))
        },
        {
            label: "تعمیر ",
            value: "repair",
            desc: repair.data.map((item) => (
                <Blogcard img={item[0]} title={item[1]} describ={item[2]} date={item[3]} link={item[4]}/>
            ))
        },
        {
            label: "موتورسیکلت",
            value: "bike",
            desc: bike.data.map((item) => (
                <Blogcard img={item[0]} title={item[1]} describ={item[2]} date={item[3]} link={item[4]}/>
            ))
        },
        {
            label: "راهنمای بازار",
            value: "guide",
            desc: guide.data.map((item) => (
                <Blogcard img={item[0]} title={item[1]} describ={item[2]} date={item[3]} link={item[4]}/>
            ))
        },
    ];



    return (
        <div className="mt-16 mx-8 sm:mx-10 lg:mx-16">
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none md:mx-8 border-b  border-blue-gray-50 bg-transparent p-0  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-5"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none ",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900 text-[14px] lg:text-[16px]" : "text-[14px] lg:text-[16px] "}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className="mt-8  ">
                    {data.map(({ value, desc }) => (
                        <TabPanel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )
}

export default Blog