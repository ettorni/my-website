import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import classes from "./history.module.css";
import Image from "next/image";

function History() {
  return (
    <div className={"row"}>
      <div className={"col-lg-6 col-md-6 col-sm-6 col-xs-6"}>
        <div className={classes.noleft}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Born 1998, Dae-gu, South Korea</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Moved to Toronto, Canada, 2009</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Graduated Cardinal Carter Academy for the Arts, Toronto, 2016
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Started at McGill University, Montréal, 2016
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>English Teacher, Seoul, 2018</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Junior Package Handler, Shengze, 2019
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                McGill Research Project, Montréal, 2020
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Graduated from McGill University, Montréal, 2021
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
              </TimelineSeparator>
              <TimelineContent>Current</TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h2 className={classes.text}>A Brief History</h2>
        <div className={classes.left}>
          <Image
            src="/images/profile.jpeg"
            layout="intrinsic"
            width={500}
            height={600}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default History;
