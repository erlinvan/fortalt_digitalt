import React from "react";

function Suggestion(suggestion) {
  console.log(suggestion);
  const logo = require("../Images/festningen.jfif");
  const data = suggestion.suggestion;
  return (
    <>
      {data && <p>{data.text}</p>}

      {data.img && <img src={logo} alt="fint bilde"></img>}
    </>
  );
}

export default Suggestion;
