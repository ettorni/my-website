import classes from "./titleMobile.module.css";

function TitleHomeMobile() {
  return (
    <div className={classes.fadeIn + " " + classes.container}>
      <h1>I'm Joseph.</h1>
      <br />
      <h2>a programmer.</h2>
    </div>
  );
}

export default TitleHomeMobile;
