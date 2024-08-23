import React from "react";
import Card from "@mui/material/Card";
import Timeline from "@mui/lab/Timeline";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { fDateTime } from "../../../../utils";


// Define the types for your props
interface OrderItemProps {
  item: {
    id: string;
    type: string;
    title: string;
    time: string; // or Date if you're using Date objects
  };
  lastTimeline: boolean;
}

interface AnalyticsOrderTimelineProps {
  title: string;
  subheader?: string;
  list: Array<{
    id: string;
    type: string;
    title: string;
    time: string; // or Date if you're using Date objects
  }>;
}

// ----------------------------------------------------------------------

export const AnalyticsOrderTimeline: React.FC<AnalyticsOrderTimelineProps> = ({
  title,
  subheader,
  list,
  ...other
}) => {
  return (
    <>
      <CardHeader title={title} subheader={subheader} />

      <Timeline
        sx={{
          m: 0,
          p: 3,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {list.map((item, index) => (
          <OrderItem
            key={item.id}
            item={item}
            lastTimeline={index === list.length - 1}
          />
        ))}
      </Timeline>
    </>
  );
};

// ----------------------------------------------------------------------

const OrderItem: React.FC<OrderItemProps> = ({ item, lastTimeline }) => {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === "order1" && "primary") ||
            (type === "order2" && "success") ||
            (type === "order3" && "info") ||
            (type === "order4" && "warning") ||
            "error"
          }
        />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: "text.disabled" }}>
          {/* {fDateTime(time)} */}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
