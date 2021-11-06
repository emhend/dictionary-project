import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}•
        <a href={props.phonetic.audio} target="_blank">
          listen
        </a>
      </div>
    );
  }
}
