import React from "react";

function Suggestion(suggestion) {
  const data = suggestion.suggestion;
  return (
    <>
      {data && <p>{data.text}</p>}

      {data.img && <img src={process.env.PUBLIC_URL + data.img} alt="fint bilde" height={400} width={600}></img>}
    </>
  );
}

export default Suggestion;
