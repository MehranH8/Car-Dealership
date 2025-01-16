import Postdetailcard from "../../UI/Postdetailcard/Postdetailcard"
import { useLocation } from "react-router-dom"
import { useState } from "react"
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


const Bikedetail = () => {


    const [cars, setcars] = useState({
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

export default Bikedetail