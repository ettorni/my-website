import ProfileMobile from "../components/profile/mobile/profileMobile";
import Profile from "../components/profile/profile";
import TitleHome from "../components/title/title";
import Viewport from "../components/mobile-layout/viewport";
import TitleHomeMobile from "../components/title/mobile/titleMobile";

function Home() {
  return (
    <div>
      <div>
        <Viewport 
          mobile={<TitleHomeMobile />}
          desktop={<TitleHome />}
        />
      </div>
      <Viewport 
          mobile={<ProfileMobile />}
          desktop={<Profile />}
        />
      
    </div>
  );
}

export default Home;
