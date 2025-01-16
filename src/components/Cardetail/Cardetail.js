import Postdetailcard from "../../UI/Postdetailcard/Postdetailcard"
import { useLocation } from "react-router-dom"
import { useState } from "react"
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


const Cardetail = () => {


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


    const productid = useLocation().pathname
    const choosenindex = cars.data.findIndex((id) => {
        if (id[7] == productid) {
            return cars
        }
    })

    return (
        <div>
            <Postdetailcard img1={cars.data[choosenindex][0]} img2={cars.data[choosenindex][0]} img3={cars.data[choosenindex][0]} img4={cars.data[choosenindex][0]} img5={cars.data[choosenindex][0]} title={cars.data[choosenindex][1]} date={cars.data[choosenindex][2]} run={cars.data[choosenindex][3]} price={cars.data[choosenindex][6]} />
        </div>
    )
}

export default Cardetail