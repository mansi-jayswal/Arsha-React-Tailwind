import FAQuestions from "./FAQ/FAQuestions";
import SkillsSection from "./SkillsSection/SkillsSection";
import AboutUs from "./aboutUs/AboutUs";
import ClientImages from "./brandImageCaraousal/ClientImages";
import BottomToTop from "./common/BottomToTop";
import Contact from "./contact/Contact";
import DetailAccordian from "./detailAccordian/DetailAccordian";
import Footer from "./footer/Footer";
import HeroSection from "./heroSection/HeroSection";
import Navbar from "./navbar/Navbar";
import NewsLetter from "./newsletter/NewsLetter";
import Portfolio from "./portfolio/Portfolio";
import Pricing from "./pricing/Pricing";
import Services from "./services/Services";
import Team from "./team/Team";
import Testimonial from "./testimonial/Testimonial";

function Home() {
  return (
    <>
      <BottomToTop />
      <Navbar />
      <div id="home">
        <HeroSection />
        <ClientImages />
      </div>
      <div id="aboutUs">
        <AboutUs />
        <DetailAccordian />
        <SkillsSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Testimonial />
      <FAQuestions />
      <div id="contact">
        <Contact />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
