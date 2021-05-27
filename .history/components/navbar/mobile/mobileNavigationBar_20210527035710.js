import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars} from "@fortawesome/free-solid-svg-icons";
import classes from "./mobileNavigationBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MobileNavigationBar() {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const menuIcon = <FontAwesomeIcon icon={faBars} />;
  return (

      <Navbar className={classes.bg}>
        <Nav.Link href="/" className={classes.font}>
          {homeIcon}
        </Nav.Link>
        <Dropdown className={classes.bg}>
          <Dropdown.Toggle className={classes.button}>{menuIcon}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/about">About</Dropdown.Item>
            <Dropdown.Item href="/contact">Contact</Dropdown.Item>
            <Dropdown.Item href="/resume/CV-JJ.pdf">Resume</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
  );
}

export default MobileNavigationBar;
