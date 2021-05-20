import classes from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const date = new Date();
  const curYear = date.getFullYear();
  const emailLogo = <FontAwesomeIcon icon={faEnvelope} />;
  const copyRightLogo = <FontAwesomeIcon icon={faCopyright} />;
  const linkedinLogo = <FontAwesomeIcon icon={faLinkedin} />;
  const githubLogo = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className={classes.footer}>
      <a href="mailto:soon.jo@mail.mcgill.ca" className={classes.icon}>{emailLogo}</a>
      <a href="https://www.linkedin.com/in/joseph-jo-a5778519b/" target="_blank" className={classes.icon}>
        {linkedinLogo}
      </a>
      <a href="https://github.com/ettorni" target="_blank" className={classes.icon}>{githubLogo}</a>
      <footer className={classes.margin}>
        Copyright {copyRightLogo} {curYear} Joseph Jo
      </footer>
    </div>
  );
}

export default Footer;
