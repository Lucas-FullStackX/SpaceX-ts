import React from "react";
import { useQuery } from "@apollo/client";
import * as query from "../../Queries";
import { Link, useParams } from "react-router-dom";

export default function Rocket() {
  type QuizParams = {
    id: string;
  };
  const { id } = useParams<QuizParams>();
  const { error, data } = useQuery(query.GET_ROCKETS);
  console.log(data);
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <p>{id}</p>
      <img
        src="https://jhammanpsu.github.io/project-one-spacex/images/spacexwebsitelogo.png"
        alt="spacex-logo"
      />
      {data?.rockets.map((rocket: { name: string; id: string }) => (
        <Link to={`/rocket/${rocket.id}`}>{rocket.name}</Link>
      ))}
    </div>
  );
}
