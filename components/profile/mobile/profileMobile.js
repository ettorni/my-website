import classes from "./profileMobile.module.css";
import Image from "next/image";

function ProfileMobile() {
  return (
    <div className={classes.profile}>
      <div className={classes.photo}>
        <Image
          src="/images/joseph.jpg"
          alt="joseph-profile-img"
          width={1125}
          height={824}
          layout="intrinsic"
        />
      </div>
      <div className={classes.title}>
      <h2>Hello.</h2>
      <p>
        I'm also a Software Developer and a person who is always eager to learn
        new things.
      </p>
      </div>
    </div>
  );
}

export default ProfileMobile;
