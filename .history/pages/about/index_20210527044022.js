import AboutIntro from "../../components/about/aboutIntro";
import classes from "./index.module.css";
import History from "../../components/about/history";
import Interests from "../../components/about/interests";
import Viewport from "../../components/mobile-layout/viewport";
import MobileInterests from "../../components/about/mobile/mobileInterests";
import MobileHistory from "../../components/about/mobile/historyMobile";
import AboutIntroMobile from "../../components/about/mobile/aboutMobile";

function AboutPage() {
  return (
    <div className={classes.textColor}>
      <Viewport 
        mobile={<AboutIntroMobile />}
        desktop={<AboutIntro />}
      />

<hr />
      
      <div>
        <Viewport 
          mobile={<MobileHistory />}
          desktop={<History />}
        />
        
      </div>
      <Viewport 
        mobile={<MobileInterests />}
        desktop={<Interests />}
      />
    </div>
  );
}

export default AboutPage;
