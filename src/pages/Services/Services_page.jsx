import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BackgroundWithText from "../../components/backgroundwithText/BackgroundWithText";
import img1 from "../../assets/services_image1.jpg";
import img2 from "../../assets/services_image2.jpg";
import img3 from "../../assets/services_image3.jpg";
import img4 from "../../assets/services_image4.jpg";
import img5 from "../../assets/services_image5.jpg";
import img6 from "../../assets/services_image6.jpg";
import img7 from "../../assets/services_image7.jpg";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./services_page.css";

const ServicesPage = () => {
  return (
    <div className="services_page">
      <Header />
      <BackgroundWithText> Our Services</BackgroundWithText>

      <div className="surrounding_container">
        <div className="listing_services">
          <div className="per_service">
            <div className="services_img_container">
              <img src={img1} alt="" className="img__services" />
            </div>

            <span className="services__title">
              DOCUMENT SCANNING + CONVERSION
            </span>
            <span className="services__text">
              SideKick will scan the paper or film documents, converting them to
              digital images that are then stored on CD, DVD,
            </span>

            <div className="services__button">
              <span className="button__firstpart">READ MORE</span>
              <div className="arrow_container">
                <ArrowForwardIosIcon className="icon__services" />
              </div>
            </div>
          </div>

          <div className="per_service">
            <div className="services_img_container">
              <img src={img2} alt="" />
            </div>

            <span className="services__title">
              DOCUMENT SCANNING + CONVERSION
            </span>
            <span className="services__text">
              You may have old Microfilm, Microfiche, Aperture Cards that have
              been stored off-site and are hard to access or retrieve
            </span>

            <div className="services__button">
              <span className="button__firstpart">READ MORE</span>
              <div className="arrow_container">
                <ArrowForwardIosIcon className="icon__services" />
              </div>
            </div>
          </div>

          <div className="per_service">
            <div className="services_img_container">
              <img src={img3} alt="" />
            </div>

            <span className="services__title">
              DOCUMENT SCANNING + CONVERSION
            </span>
            <span className="services__text">
              SideKick Document Management Services will control the life cycle
              of documents in your organization how they are created, reviewed,
              published, and consumed, and
            </span>

            <div className="services__button">
              <span className="button__firstpart">READ MORE</span>
              <div className="arrow_container">
                <ArrowForwardIosIcon className="icon__services" />
              </div>
            </div>
          </div>
        </div>

        <div className="listing_services">
          <div className="per_service">
            <div className="services_img_container">
              <img src={img4} alt="" className="img__services" />
            </div>

            <span className="services__title">
              DOCUMENT SCANNING + CONVERSION
            </span>
            <span className="services__text">
              SideKick provides assistance with complex data entry projects that
              require keen awareness and attention to detail.
            </span>

            <div className="services__button">
              <span className="button__firstpart">READ MORE</span>
              <div className="arrow_container">
                <ArrowForwardIosIcon className="icon__services" />
              </div>
            </div>
          </div>

          <div className="per_service">
            <div className="services_img_container">
              <img src={img5} alt="" />
            </div>

            <span className="services__title">
              DOCUMENT SCANNING + CONVERSION
            </span>
            <span className="services__text">
              SideKick, Inc. provides independent and objective consulting
              services concentrating on document management technologies.
            </span>

            <div className="services__button">
              <span className="button__firstpart">READ MORE</span>
              <div className="arrow_container">
                <ArrowForwardIosIcon className="icon__services" />
              </div>
            </div>
          </div>

          <div className="per_service">
            <div className="services_img_container">
              <img src={img6} alt="" />
            </div>

            <span className="services__title">
              DOCUMENT SCANNING + CONVERSION
            </span>
            <span className="services__text">
              SideKick Inc. has formed strategic partnerships with many of the
              leading local Minnesota shredding companies.
            </span>

            <div className="services__button">
              <span className="button__firstpart">READ MORE</span>
              <div className="arrow_container">
                <ArrowForwardIosIcon className="icon__services" />
              </div>
            </div>
          </div>
        </div>
        <div className="listing_services">
          <div className="per_service">
            <div className="services_img_container">
              <img src={img7} alt="" className="img__services" />
            </div>

            <span className="services__title">
              DOCUMENT SCANNING + CONVERSION
            </span>
            <span className="services__text">
              Disaster can strike at any time, and all businesses have to
              protect themselves from natural disasters, accidents, fire,
              floods, or even technology breakdowns.
            </span>

            <div className="services__button">
              <span className="button__firstpart">READ MORE</span>
              <div className="arrow_container">
                <ArrowForwardIosIcon className="icon__services" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
