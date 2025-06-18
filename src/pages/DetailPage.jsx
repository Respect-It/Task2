import React from "react";
import { useParams } from "react-router";

function DetailPage() {
  const { id } = useParams();
  return <div>DetailPage- {id} </div>;
}

export default DetailPage;
