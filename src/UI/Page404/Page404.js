import { Link } from "react-router-dom"
   import React from 'react';
   import Lottie from 'react-lottie';
   import animationData from './Animation.json'; 

const Page404 = () => {
   const defaultOptions = {
     loop: true,
     autoplay: true,
     animationData: animationData,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice'
     }
   };

    return (
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-44 lg:px-8">
            <div class="text-center">
                  <Lottie options={defaultOptions} />
                <h1 class="text-[16px] sm:text-[18px] md:text-[22px] font-semibold tracking-tight text-balance text-gray-900 ">صفحه مورد نظر پیدا نشد</h1>
                <p class="mt-6 text-[14px] md:text-[16px] font-medium text-pretty text-gray-500 ">متاسفانه صفحه مورد نظر شما پیدا نشد</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">برگشت به خانه</Link>
                </div>
            </div>
        </main>
    )
}

export default Page404