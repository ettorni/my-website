import Image from "next/image";
import classes from "./index.module.css";
import Profile from "../components/profile/profile";
import TitleHome from "../components/title/title";

function Home() {
  return (
    <div>
      <div className={classes.topContainer}>
        <TitleHome />
      </div>
      <Profile />
    </div>
  );
}

export default Home;
