import Image from "next/image";
import classes from "./aboutIntro.module.css";

function AboutIntro() {
  return (
    <div className={classes.topContainer + " row"}>
      <div className={"col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
        <Image
          src="/images/about2.jpg"
          width={562.5}
          height={750}
          layout="intrinsic"
        />
      </div>
      <div className={"col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
        <h2 className={classes.text}>About</h2>
        <hr className={classes.override} />
        <p className={classes.text}>
          My name is Joseph Jo, a recent graduate from McGill University with a Bachelor of
          Science in Computer Science and Biology.
        </p>
        <br />
        <p className={classes.text}>
          I was born and raised in Korea until I was ten. Then with my mom’s
          keen interest to live abroad, she brought her two sons to live with
          her in Toronto. I attended a small catholic elementary school (Holy
          Redeemer Catholic School), then attended an arts high school (Cardinal
          Carter Academy for the Arts), where I played the clarinet as my
          specialty. Oddly though, this led me to study sciences at McGill
          University.
        </p>
      </div>
      <div className={classes.margin}></div>
      <hr />
    </div>
  );
}

export default AboutIntro;
