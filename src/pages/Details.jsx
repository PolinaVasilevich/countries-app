import React from "react";
import { useParams } from "react-router";

const Details = () => {
  const { name } = useParams();
  return <div>Details {name}</div>;
};

export default Details;
