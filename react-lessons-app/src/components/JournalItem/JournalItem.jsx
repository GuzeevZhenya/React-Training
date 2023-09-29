import React from "react";
import { CardButton } from "../CardButton/CardButton";

import "./JournalItem.css";

export const JournalItem = (props) => {
  console.log(props.data);
  const data = props.data.map((el) => {
    console.log(el);
    return (
      <CardButton>
        <h2 className="journal-item__header">{el.title}</h2>
        <h2 className="journal-item__body">
          <div className="journal-item__date">
            {el.date.getDate()}.{el.date.getMonth()}.{el.date.getFullYear()}
          </div>
          <div className="journal-item__text">{el.text}</div>
        </h2>
      </CardButton>
    );
  });

  return <>{data}</>;
};
