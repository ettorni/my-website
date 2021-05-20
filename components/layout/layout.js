import { Fragment } from "react";
import MainNavigationBar from "../navbar/mainNavigationBar";
import Footer from "./footer";

function Layout(props) {
    return <Fragment>
        <MainNavigationBar />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
}

export default Layout;