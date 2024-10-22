import React from "react";

interface TimeLineTextProps {
    title: string;
    children?: React.ReactNode;
}

class TimeLineText extends React.Component<TimeLineTextProps> {
  render() {
    return (
      <div className="timeLineText">
        <h2>{this.props.title}</h2>
          {this.props.children}
      </div>
    );
  }
}

export default TimeLineText;