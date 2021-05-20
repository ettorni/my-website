import AboutIntro from "../../components/about/aboutIntro";
import classes from "./index.module.css";
import Image from "next/image";
import History from "../../components/about/history";
import Interests from "../../components/about/interests";

function AboutPage() {
  return (
    <div className={classes.textColor}>
      <AboutIntro />
      <div className={classes.topContainer + " row"}>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <History />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <h2 className={classes.text}>A Brief History</h2>
          <div className={classes.left}>
            <Image
              src="/images/profile.jpeg"
              layout="intrinsic"
              width={500}
              height={600}
            />
          </div>
        </div>
        <hr />
      </div>
    
      <Interests />
    </div>
  );
}

export default AboutPage;
