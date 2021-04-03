import React, { useContext } from "react";
import { ChatBotContext } from "../Context";

const ContextModal = () => {
  const { global } = useContext(ChatBotContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0.25rem",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <h2 style={{ margin: "0", marginBottom: "8px", padding: 0 }}>
            Details
          </h2>
        </li>
        {global.name && (
          <li>
            <b>Name :</b> {global.name}
          </li>
        )}
        {global.hobbies && (
          <li>
            <b>Hobbies :</b> {global.hobbies}
          </li>
        )}
        {global.programmingLevel && (
          <li>
            <b>Programming Level :</b> {global.programmingLevel}
          </li>
        )}
        {global.specialization && (
          <li>
            <b>Specialization :</b> {global.specialization.join(", ")}
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContextModal;
