import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";




const Postcard = (props) => {
    return (
        <Link to={props.link}>
            <div className="flex md:flex-row flex-col gap-x-4 mb-12 md:mb-8 w-full border-b-[1px] border-maingrey pb-3 px-2">
                <div className="mb-6 md:mb-0">
                    <img className="w-full md:w-fit" src={props.img} alt="post-img" />
                </div>
                <div className="w-full">
                    <div className="mb-2">
                        <h5 className="font-bold text-[14px] sm:text-[16px]">{props.title}</h5>
                    </div>
                    <div className="text-[12px] flex gap-x-3 mb-3 sm:mb-6">
                        <span>{props.date}</span>
                        <span>km{props.run} </span>
                        <span>{props.detail}</span>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-between w-full relative bottom-[-20%]">
                        <div className="mb-3 sm:mb-0">
                            <span className="text-[14px] flex gap-x-1">
                                <span className="my-auto">
                                    <CiLocationOn />
                                </span>
                                {props.place}
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
            </div>
        </Link>
    )
}


export default Postcard