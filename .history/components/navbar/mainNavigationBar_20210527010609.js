import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./mainNavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function MainNavigationBar() {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  return (
    <Navbar className={classes.bg} variant="light">
      <Nav.Link href="/" className={classes.font}>
        {homeIcon}
      </Nav.Link>
      <Nav.Link href="/about" className={classes.font}>
        About
      </Nav.Link>
      <Nav.Link href="/contact" className={classes.font}>
        Contact
      </Nav.Link>
      <Nav.Link href="/resume/401_Report.pdf" className={classes.font}>
        Resume
      </Nav.Link>
    </Navbar>
  );
}

export default MainNavigationBar;
