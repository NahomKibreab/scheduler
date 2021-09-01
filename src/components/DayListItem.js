import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

const formatSpots = (spot) => {
  if (spot === 0) {
    return "no spots remaining";
  }
  if (spot === 1) {
    return "1 spot remaining";
  }
  return `${spot} spots remaining`;
};

export default function DayListItem(props) {
  const dayClass = {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  };
  return (
    <li
      className={classNames("day-list__item", dayClass)}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
