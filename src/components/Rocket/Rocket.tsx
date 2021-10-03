import React from "react";
import { useQuery } from "@apollo/client";
import * as query from "../../Queries";
import { Link, useParams } from "react-router-dom";

export default function Rocket() {
  type QuizParams = {
    id: string;
  };
  const { id } = useParams<QuizParams>();
  const { error, data } = useQuery(query.GET_ROCKET_INFO, {
    variables: { rocketId: id },
  });
  console.log(data, id);
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <p>{data?.rocket.description}</p>
      <img
        src="https://jhammanpsu.github.io/project-one-spacex/images/spacexwebsitelogo.png"
        alt="spacex-logo"
      />
    </div>
  );
}
