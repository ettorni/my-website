import Image from "next/image";
import classes from "./interests.module.css";

function Interests() {
  return (
    <div className={classes.container}>
      <h2> Interests and Hobbies</h2>
      <div className={"row " + classes.margin}>
        <div className={classes.ltext + " col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <h3>Soccer</h3>
          <p>
            I have always been a huge fan of soccer. Although it did not last
            too long, at one point I remember I told my brother I wanted to
            become a soccer player. My favorite players are Messi, Heung-min Son
            and Zidane.
          </p>
          <p>Little Joseph, wearing his favorite </p>
        </div>

        <div className={classes.rimage + " col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <Image
            src="/images/soccer.jpg"
            layout="intrinsic"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={"row " + classes.margin}>
        <div className={classes.limage +" col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <Image
            src="/images/music.jpg"
            layout="intrinsic"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.rtext + " col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <h3>Music</h3>
          <p>
            Even though this has never been my main interest, music in all forms
            has really grown within me. From classical to pop, I have an
            appreciation for a broad genre of music. My favorite classical piece
            is called the Moldau by Smetana, written after his love for his
            hometown.
          </p>
        </div>
      </div>
      <div className={"row " + classes.margin}>
        <div className={classes.ltext + " col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <h3>Baking</h3>
          <p>
            This is a hobby that I’ve learned to love over the quarantine. The
            precision and the combinations it requires from ingredients to
            technique and the attentiveness to detail reminded me of the lab
            settings that I used to be a lot in. My favorite desserts to make
            are brownies, cookies, and macarons.
          </p>
        </div>
        <div className={classes.rimage + " col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <Image
            src="/images/baking.jpg"
            layout="intrinsic"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={"row " + classes.margin}>
        <div className={classes.limage +" col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <Image
            src="/images/finance.png"
            layout="intrinsic"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.rtext + " col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
          <h3>Finance and Investment</h3>
          <p>
            Although I’m still much rather a beginner in this field, I realized
            how important it is to stay in touch and up to date on this subject.
            Trying to understand the world of finance a bit better, I found
            myself trying to stay on top of what’s happening in the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interests;
