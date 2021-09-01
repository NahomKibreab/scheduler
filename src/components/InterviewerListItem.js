import classNames from "classnames";
import React from "react";
import "./InterviewerListItem.scss";
export default function InterviewerListItem(props) {
  const interviewerClasses = {
    "interviewers__item--selected": props.selected,
  };
  return (
    <li
      className={classNames("interviewers__item", interviewerClasses)}
      onClick={() => props.setInterviewer(props.name)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
