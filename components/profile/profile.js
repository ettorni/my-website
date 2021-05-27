import classes from "./profile.module.css";
import Image from 'next/image';

function Profile() {
  return (
    <div className={classes.profile}>
      <Image
        src="/images/joseph.jpg"
        alt="joseph-profile-img"
        width={1125}
        height={824}
        layout="intrinsic"
      />
      <h2 className={classes.title}>Hello.</h2>
      <p className={classes.intro}>
        I'm also a Software Developer and a person who is always eager to learn new things.
      </p>
    </div>
  );
}

export default Profile;
