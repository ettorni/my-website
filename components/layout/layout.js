import { Fragment } from "react";
import MainNavigationBar from "../navbar/mainNavigationBar";
import Footer from "./footer";
import Header from "./header";
import Viewport from '../mobile-layout/viewport';
import MobileNavigationBar from "../navbar/mobile/mobileNavigationBar";


function Layout(props) {
    return <Fragment>
        <Header />
        <Viewport 
            desktop={<MainNavigationBar />}
            // desktop={<MobileNavigationBar/ >}
            mobile={<MobileNavigationBar />}
        />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
}

export default Layout;