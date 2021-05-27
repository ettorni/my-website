import classes from "./mobileInterests.module.css";

function MobileInterests() {
  return (
    <div className={classes.container}>
      <h2> Interests and Hobbies</h2>
      <div className={"row " + classes.margin}>
        <div className={classes.text + " col-xs-6 " + classes.photo1}>
          <h3>Soccer</h3>
          <p>
            I have always been a huge fan of soccer. Although it did not last
            too long, at one point I remember I told my brother I wanted to
            become a soccer player. My favorite players are Messi, Heung-min Son
            and Zidane.
          </p>
          <p>Little Joseph, wearing his favorite player's jersey.</p>
        </div>
        <br />
        <br />
      </div>
      <div className={"row " + classes.margin}>
        <div className={classes.text + " col-xs-6 " + classes.photo2}>
          <h3>Music</h3>
          <p>
            Even though this has never been my main interest, music in all forms
            has really grown within me. From classical to pop, I have an
            appreciation for a broad genre of music. My favorite classical piece
            is called the Moldau by Smetana, written after his love for his
            hometown.
          </p>
          <p>Try to find where I am in the photo!</p>
        </div>
      </div>
      <div className={"row " + classes.margin}>
        <div className={classes.text + " col-xs-6 " + classes.photo3}>
          <h3>Baking</h3>
          <p>
            This is a hobby that I’ve learned to love over the quarantine. The
            precision and the combinations it requires from ingredients to
            technique and the attentiveness to detail reminded me of chemistry
            labs. My favorite desserts to make are brownies, cookies, and
            macarons.
          </p>
          <p>My finest levain cookies.</p>
        </div>
      </div>
      <div className={"row " + classes.margin}>
        <div className={classes.text + " col-xs-6 " + classes.photo4}>
          <h3>Finance and Investment</h3>
          <p>
            Although I’m still much rather a beginner in this field, I realized
            how important it is to stay in touch and up to date on this subject.
            Trying to understand the world of finance a bit better, I found
            myself trying to stay on top of what’s happening in the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileInterests;
