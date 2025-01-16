import { Link } from "react-router-dom"

const Blogcard = (props) => {
    return (
        <div className="border-[1px] w-full border-maingrey relative">
            <Link to={props.link}>

                <img className="w-full" src={props.img} alt="news-img" />
                <div className="bg-white mx-4 mt-3 mb-4">
                    <h5 className="text-[14px] sm:text-[15px] mb-1 text-black">{props.title}</h5>
                    <p className="text-[10px] sm:text-[12px] mb-10">{props.describ}</p>
                    <span className="text-[10px] sm:text-[12px] text-textgrey absolute bottom-2">{props.date}</span>
                </div>
            </Link>

        </div>
    )
}

export default Blogcard