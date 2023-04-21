import React from "react";

export const Details = ({ summary, detail1, detail2, detail3, detail4 }) => {
  return (
    <>
      <li>
        <details>
          <summary>{summary}</summary>
          {detail1}
          <br />
          {detail2}
          <br />
          {detail3}
          <br />
          {detail4}
        </details>
      </li>
    </>
  );
};
