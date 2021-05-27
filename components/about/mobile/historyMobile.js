import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import classes from "./historyMobile.module.css";


function MobileHistory() {
  return (
    <div className={classes.container}>
      <h2 style={{ textAlign: "center" }}>A Brief History</h2>
      <br />
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
              <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Born 1998, Dae-gu, South Korea</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Moved to Toronto, Canada, 2009</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Graduated Cardinal Carter Academy for the Arts, Toronto, 2016
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
            <TimelineConnector className={classes.secondaryTail}/>
          </TimelineSeparator>
          <TimelineContent>
            Started at McGill University, Montréal, 2016
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>English Teacher, Seoul, 2018</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Junior Package Handler, Shengze, 2019
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            McGill Research Project, Montréal, 2020
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Graduated from McGill University, Montréal, 2021
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="black" />
          </TimelineSeparator>
          <TimelineContent>Current</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default MobileHistory;
