import React from "react";
import { useQuery } from "@apollo/client";
import * as query from "../../Queries";
import { Link } from "react-router-dom";

export default function Rockets() {
  const { error, data } = useQuery(query.GET_ROCKETS);
  console.log(data);
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <img
        src="https://jhammanpsu.github.io/project-one-spacex/images/spacexwebsitelogo.png"
        alt="spacex-logo"
      />
      {data?.rockets.map((rocket: { name: string, id: string }) => (
        <Link to={`/rocket/${rocket.id}`}>{rocket.name}</Link>
      ))}
    </div>
  );
}
