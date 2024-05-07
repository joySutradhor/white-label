
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurWorkSectionStyle.css"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";






function OurWorkSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        speed: 1000,
        cssEase: "linear",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };
    return (
        <div className="sectionGap">
            <h2 className="titleHeading text-center">Our Work</h2>
            <div className="slider-container">
                <Slider {...settings}>

                    <div className="ourWorkImgOne 2xl:px-[21px] ">
                        <img className="h-full w-full object-cover 2xl:rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />
                    </div>
                    <div className="ourWorkImgOne 2xl:px-[21px] ">
                        <img className="h-full w-full object-cover 2xl:rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />
                    </div>
                    <div className="ourWorkImgOne 2xl:px-[21px] ">
                        <img className="h-full w-full object-cover 2xl:rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />
                    </div>
                    <div className="ourWorkImgOne 2xl:px-[21px] ">
                        <img className="h-full w-full object-cover 2xl:rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />
                    </div>
                    <div className="ourWorkImgOne 2xl:px-[21px] ">
                        <img className="h-full w-full object-cover 2xl:rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />
                    </div>
                    <div className="ourWorkImgOne 2xl:px-[21px] ">
                        <img className="h-full w-full object-cover 2xl:rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1715106172/e11_bqzgvc.jpg" alt="website img" />
                    </div>                
                </Slider>

            </div>
        </div>
    );
}
const CustomPrevArrow = (props) => (


    <button {...props} className="arrow-button" aria-label="Previous" type="button">
        <MdOutlineKeyboardArrowLeft className=" bg-red-500 border-[10px] border-white rounded-full"></MdOutlineKeyboardArrowLeft>
    </button>
);

const CustomNextArrow = (props) => (
    <button {...props} className="arrow-button2" aria-label="Next" type="button">
        <MdKeyboardArrowRight className=" bg-red-500 border-[10px] border-white rounded-full"></MdKeyboardArrowRight>
    </button>
);


export default OurWorkSection;
