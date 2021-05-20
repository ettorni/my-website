import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import classes from './history.module.css';

function History() {
  return (
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
          <TimelineContent>Graduated Cardinal Carter Academy for the Arts, Toronto, 2016</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Started at McGill University, Montréal, 2016</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>English Teacher, Seoul, 2018</TimelineContent>
        </TimelineItem><TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined"  />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Junior Package Handler, Shengze, 2019</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined"  />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>McGill Research Project, Montréal, 2020</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined"  />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Graduated from McGill University, Montréal, 2021</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Current</TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
  );
}

export default History;
