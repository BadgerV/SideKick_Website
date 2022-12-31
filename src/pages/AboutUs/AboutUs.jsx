import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import References from "../../components/references/References";

import "./aboutUs.css";
import BackgroundWithText from "../../components/backgroundwithText/BackgroundWithText";
import man from "../../assets/man_image1.jpg";

import aboutImage1 from "../../assets/about_image1.jpg";
import aboutImage2 from "../../assets/about_image2.jpg";
import aboutImage3 from "../../assets/about_image3.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />
      <BackgroundWithText>About Us</BackgroundWithText>
      <div className="about_us_container">
        <div className="leading_document">
          <div className="leading_left">
            <span className="leading_title">
              Leading Document Management Company in Minnesota
            </span>
            <span className="leading_text">
              SideKick Inc., Advanced Document Services is a privately owned and
              operated document management company in Minnesota. Founded in
              January of 2001 by owner Rick Carlson, SideKick Inc., Advanced
              Document Services operates with the intention of providing local
              Minnesota companies with a high-quality document management
              solutions and friendly service at competitive prices.
            </span>
          </div>
          <div className="leading_right">
            <img src={man} alt="" className="image_man" />
          </div>
        </div>

        <div className="professionalScanning">
          <span className="scanning_title">
            Professional Document Scanning Services
          </span>

          <span className="scanning_text">
            SideKick Inc., Advanced Document Services has built a solid
            reputation in the Twin Cities as a highly valued, reliable supplier
            of document scanning services. We have extensive experience in
            working with complex imaging projects and are highly focused on
            providing excellent service and support. Our success is attributed
            to the efforts put forth in ensuring customer satisfaction. We aim
            to be more than just a vendor – we are a “SideKick” – a valued
            business partner. We continually enhance our customer’s business
            processes by managing their critical data and documents with special
            focus on security and accuracy.
          </span>
        </div>

        <div className="extensive_experience">
          <span className="experience_title">Extensive Experience in:</span>
          <div className="experience">
            <ul className="experience_list">
              <l1 className="experience_item">
                City, County, State Organizations
              </l1>
              <l1 className="experience_item">Corporations</l1>
              <l1 className="experience_item">Distributions</l1>
              <l1 className="experience_item">Engineering Firms</l1>
              <l1 className="experience_item">Financial Institutions</l1>
            </ul>
            <ul className="experience_list">
              <l1 className="experience_item">Food Industries</l1>
              <l1 className="experience_item">Law & Legal Services</l1>
              <l1 className="experience_item">Health Care Orgarnizations</l1>
              <l1 className="experience_item">Engineering Firms</l1>
              <l1 className="experience_item">Insurance</l1>
            </ul>
            <ul className="experience_list">
              <l1 className="experience_item">Loan Services</l1>
              <l1 className="experience_item">Manufacturers</l1>
              <l1 className="experience_item">Mortgage Services</l1>
              <l1 className="experience_item">Engineering Firms</l1>
              <l1 className="experience_item">
                Real Estate Loan, Mortgage, Title Companies
              </l1>
            </ul>
          </div>
        </div>
        <div className="images_titles_texts">
          <div className="aboutUs_last">
            <div className="img_cont">
              <img src={aboutImage1} alt="" className="img" />
            </div>

            <span className="titles_text_titles">Data Entry Services</span>
            <span className="titles_text_text">
              As well as our Minnesota based document scanning services, we also
              offer manual data entry for hand-written documents or those which
              require some form of transcription due to their illegible nature.
              Our Data Entry services in Minnesota are suitable for a wide range
              of sectors, so no matter your industry, we can manually convert
              your data, and organize it effectively.
            </span>
          </div>

          <div className="aboutUs_last">
            <div className="img_cont">
              <img src={aboutImage2} alt="" className="img" />
            </div>

            <span className="titles_text_titles">Data Entry Services</span>
            <span className="titles_text_text">
              SideKick Inc., Advanced Document Services can scan almost any size
              document. Once scanned we can provide your scanned files in many
              different formats such as PDF, JPG, TIFF, etc… Now your documents
              are ready to be safely verified, we offer safe and environment
              friendly solutions to dispose of the paper copies if required. In
              addition to providing the data transfer to a media of the
              customers choice , we can assist with matters such as data
              security, transfer protocols, access arrangements, templates and
              more, providing a complete solution to all your document
              management requirements.
            </span>
          </div>

          <div className="aboutUs_last">
            <div className="img_cont">
              <img src={aboutImage3} alt="" className="img" />
            </div>

            <span className="titles_text_titles">Data Entry Services</span>
            <span className="titles_text_text">
              Everyone in business needs to have the ability to measure your
              efforts to ensure they are productive and have a positive impact
              on the business.
              <span className="inbetween_texts">
                See the benefits that your company can profit from.
              </span>
              To find out more about our services or to see how we can bring our
              expertise to your current document management needs, call us at
              <span className="bold_text">(952) 835-5425.</span>
            </span>
          </div>
        </div>
      </div>
      <References />
      <Footer />
    </>
  );
};

export default AboutUs;
