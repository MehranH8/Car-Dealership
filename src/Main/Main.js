import Blog from "../components/Blog/Blog"
import Blogdetail from "../components/Blogdetail/Blogdetail"
import Home from "../components/Home/Home"
import Navbarmain from "../components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import Cars from "../components/Cars/Cars";
import Bikes from "../components/Bikes/Bikes";
import Cardetail from "../components/Cardetail/Cardetail";
import Bikedetail from "../components/Bikedetail/Bikedetail";
import Posting from "../components/Posting/Posting";
import Page404 from "../UI/Page404/Page404"


const Main = () => {


    return (
        <div className="">
            <Navbarmain />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/cars/detail/:id" element={<Cardetail />} />
                <Route path="/bikes" element={<Bikes />} />
                <Route path="/bikes/detail/:id" element={<Bikedetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/detail/:id" element={<Blogdetail/>} />
                <Route path="/posting" element={<Posting />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}


export default Main