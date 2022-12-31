import "./carousel.css";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import image1 from "../../assets/main_assets/image1.jpeg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MyCarousel = () => {
  const slides = [
    {
      title: "The only document management system you need has arrived",
      button: "LEARN ABOUT US",
      image: image1,
    },
    {
      title: "The only document management system you need has arrived",
      button: "LEARN ABOUT US",
      image: image1,
    },
    {
      title: "The only document management system you need has arrived",
      button: "LEARN ABOUT US",
      image: image1,
    },
    {
      title: "The only document management system you need has arrived",
      button: "LEARN ABOUT US",
      image: image1,
    },
  ];

  return (
    <div className="my_carousel">
      <Slider
        infinite={true}
        autoplay={10000}
        touchDisabled={true}
        duration={2000}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              background: `url('${slide.image}') no-repeat center center`,
            }}
          >
            <div className="texts">
              <h2 className="big_text">{slide.title}</h2>
              <div className="button">
                <span className="learnMore">{slide.button}</span>
                <span className="innerButton">
                  <ArrowForwardIosIcon className="icon" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
